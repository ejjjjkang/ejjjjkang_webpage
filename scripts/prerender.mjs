#!/usr/bin/env node
import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { pathToFileURL } from "url";

const DIST = path.resolve("dist");
const ESSAYS_DIR = path.resolve("src/essays");
const SSR_DIR = path.resolve("dist-ssr");

// Head content for "/". The essays derive theirs from front matter; the home
// page has no such source, so it is declared here.
const HOME_TITLE =
	"Eun Jeong Kang — PhD Candidate in Information Science, Cornell University";
const HOME_DESCRIPTION =
	"Eun Jeong Kang is a PhD candidate in Information Science at Cornell University studying human-AI interaction, and trust and safety in open-source AI models.";
const SITE_URL = JSON.parse(
	await fs.readFile(path.resolve("site.config.json"), "utf8"),
).siteUrl;

function stripMarkdown(text) {
	return text
		.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
		.replace(/[*_~`#]+/g, "")
		.replace(/\s+/g, " ")
		.trim();
}

function extractDescription(content, maxLength = 155) {
	const text = stripMarkdown(content);
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

function escapeJsonString(str) {
	return str
		.replace(/\\/g, "\\\\")
		.replace(/"/g, '\\"')
		.replace(/\n/g, "\\n")
		.replace(/\r/g, "\\r")
		.replace(/\t/g, "\\t");
}

function markdownToHtml(md) {
	return md
		.split(/\n{2,}/)
		.map((block) => block.trim())
		.filter(Boolean)
		.map((block) => {
			const escaped = escapeHtml(block);
			const withLinks = escaped.replace(
				/\[([^\]]+)\]\(([^)]+)\)/g,
				'<a href="$2" rel="noopener noreferrer">$1</a>',
			);
			return `<p>${withLinks}</p>`;
		})
		.join("\n");
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
		const date = txt.match(/^date:\s*(.+)$/m)?.[1]?.trim();
		const image = txt.match(/^image:\s*(.+)$/m)?.[1]?.trim();
		const contentMatch = txt.match(/^content:\s*\|\s*\n([\s\S]+)/m);
		const content = contentMatch ? contentMatch[1].replace(/^ {2}/gm, "") : "";
		if (id) essays.push({ id, title, date, image, content });
	}
	return essays;
}

function buildMetaTags(essay) {
	const description = escapeHtml(extractDescription(essay.content));
	const title = escapeHtml(`${essay.title} | Eun Jeong Kang`);
	const pageUrl = `${SITE_URL}/essay/${essay.id}/`;
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

function buildJsonLd(essay) {
	const pageUrl = `${SITE_URL}/essay/${essay.id}/`;
	const description = extractDescription(essay.content);
	const ld = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: essay.title,
		description,
		url: pageUrl,
		author: {
			"@type": "Person",
			name: "Eun Jeong Kang",
			url: SITE_URL,
		},
	};
	if (essay.image) {
		ld.image = essay.image.startsWith("http")
			? essay.image
			: `${SITE_URL}${essay.image.startsWith("/") ? essay.image : `/${essay.image}`}`;
	}
	return `<script type="application/ld+json">${JSON.stringify(ld)}</script>`;
}

function buildBodyContent(essay) {
	const articleHtml = markdownToHtml(essay.content);
	return [
		`<article>`,
		`<h1>${escapeHtml(essay.title)}</h1>`,
		essay.date ? `<time>${escapeHtml(essay.date)}</time>` : "",
		articleHtml,
		`</article>`,
	]
		.filter(Boolean)
		.join("\n");
}

async function loadServerRenderer() {
	for (const name of ["entry-server.mjs", "entry-server.js"]) {
		const candidate = path.join(SSR_DIR, name);
		if (existsSync(candidate)) {
			return (await import(pathToFileURL(candidate).href)).render;
		}
	}
	throw new Error(
		`No server bundle in ${SSR_DIR}. Run: vite build --config vite.config.ssr.js`,
	);
}

async function prerenderHome(template) {
	const render = await loadServerRenderer();
	const appHtml = render("/");

	let tags = `    <title>${escapeHtml(HOME_TITLE)}</title>\n`;
	tags += `    <meta name="description" content="${escapeHtml(HOME_DESCRIPTION)}" />\n`;
	tags += `    <link rel="canonical" href="${SITE_URL}/" />\n`;

	const html = template
		.replace(/<title>[^<]*<\/title>/, "")
		.replace(/<meta name="description"[^>]*\/>/, "")
		.replace("</head>", `${tags}  </head>`)
		.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

	const outPath = path.join(DIST, "index.html");
	await fs.writeFile(outPath, html, "utf8");
	console.log("Wrote", outPath, `(${html.length} bytes)`);
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
		const jsonLd = buildJsonLd(essay);
		const bodyContent = buildBodyContent(essay);

		const html = template
			.replace(/<title>[^<]*<\/title>/, "")
			.replace(/<meta name="description"[^>]*\/>/, "")
			.replace("</head>", `${metaTags}    ${jsonLd}\n  </head>`)
			.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`);

		const outDir = path.join(DIST, "essay", essay.id);
		await fs.mkdir(outDir, { recursive: true });
		const outPath = path.join(outDir, "index.html");
		await fs.writeFile(outPath, html, "utf8");
		console.log("Wrote", outPath);
	}

	await prerenderHome(template);

	console.log("Prerender complete");
}

prerender().catch((err) => {
	console.error(err);
	process.exit(1);
});
