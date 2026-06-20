#!/usr/bin/env node
import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const DIST = path.resolve("dist");
const ESSAYS_DIR = path.resolve("src/essays");
const SITE_URL = JSON.parse(
	await fs.readFile(path.resolve("site.config.json"), "utf8"),
).siteUrl;

function extractDescription(content, maxLength = 155) {
	const text = content.replace(/\s+/g, " ").trim();
	if (text.length <= maxLength) return text;
	return `${text.slice(0, maxLength - 3).trim()}...`;
}

function escapeHtml(str) {
	return str
		.replace(/&/g, "&amp;")
		.replace(/"/g, "&quot;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}

async function loadEssays() {
	const entries = await fs.readdir(ESSAYS_DIR, { withFileTypes: true });
	const essays = [];
	for (const e of entries) {
		if (!e.isFile() || !e.name.endsWith(".yaml") || e.name.startsWith("_"))
			continue;
		const txt = await fs.readFile(path.join(ESSAYS_DIR, e.name), "utf8");
		const id = txt.match(/^id:\s*(.+)$/m)?.[1]?.trim();
		const title = txt.match(/^title:\s*(.+)$/m)?.[1]?.trim();
		const image = txt.match(/^image:\s*(.+)$/m)?.[1]?.trim();
		const contentMatch = txt.match(/^content:\s*\|\s*\n([\s\S]+)/m);
		const content = contentMatch ? contentMatch[1].replace(/^ {2}/gm, "") : "";
		if (id) essays.push({ id, title, image, content });
	}
	return essays;
}

function buildMetaTags(essay) {
	const description = escapeHtml(extractDescription(essay.content));
	const title = escapeHtml(`${essay.title} | Eun Jeong Kang`);
	const pageUrl = `${SITE_URL}/essay/${essay.id}`;
	const imageUrl = essay.image
		? essay.image.startsWith("http")
			? essay.image
			: `${SITE_URL}${essay.image.startsWith("/") ? essay.image : `/${essay.image}`}`
		: null;

	let tags = `    <title>${title}</title>\n`;
	tags += `    <meta name="description" content="${description}" />\n`;
	tags += `    <link rel="canonical" href="${pageUrl}" />\n`;
	tags += `    <meta property="og:type" content="article" />\n`;
	tags += `    <meta property="og:title" content="${escapeHtml(essay.title)}" />\n`;
	tags += `    <meta property="og:description" content="${description}" />\n`;
	tags += `    <meta property="og:url" content="${pageUrl}" />\n`;
	if (imageUrl) {
		tags += `    <meta property="og:image" content="${escapeHtml(imageUrl)}" />\n`;
	}
	tags += `    <meta name="twitter:card" content="${imageUrl ? "summary_large_image" : "summary"}" />\n`;
	tags += `    <meta name="twitter:title" content="${escapeHtml(essay.title)}" />\n`;
	tags += `    <meta name="twitter:description" content="${description}" />\n`;
	if (imageUrl) {
		tags += `    <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />\n`;
	}
	return tags;
}

async function prerender() {
	if (!existsSync(DIST)) {
		console.error("dist folder not found; run build first");
		process.exit(1);
	}

	const template = await fs.readFile(path.join(DIST, "index.html"), "utf8");
	const essays = await loadEssays();

	for (const essay of essays) {
		const metaTags = buildMetaTags(essay);
		const html = template
			.replace(/<title>[^<]*<\/title>/, "")
			.replace(
				/<meta name="description"[^>]*\/>/,
				"",
			)
			.replace("</head>", `${metaTags}  </head>`);

		const outDir = path.join(DIST, "essay", essay.id);
		await fs.mkdir(outDir, { recursive: true });
		const outPath = path.join(outDir, "index.html");
		await fs.writeFile(outPath, html, "utf8");
		console.log("Wrote", outPath);
	}

	console.log("Prerender complete");
}

prerender().catch((err) => {
	console.error(err);
	process.exit(1);
});
