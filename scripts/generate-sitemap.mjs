import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const { siteUrl } = JSON.parse(
	fs.readFileSync(path.join(root, "site.config.json"), "utf8"),
);
const essaysDir = path.join(root, "src/essays");
const outputPath = path.join(root, "public/sitemap.xml");

const essayIds = fs
	.readdirSync(essaysDir)
	.filter((file) => file.endsWith(".yaml") && !file.startsWith("_"))
	.map((file) => {
		const content = fs.readFileSync(path.join(essaysDir, file), "utf8");
		return content.match(/^id:\s*(.+)$/m)?.[1]?.trim();
	})
	.filter(Boolean);

const urls = [
	{ loc: `${siteUrl}/`, priority: "1.0" },
	...essayIds.map((id) => ({
		loc: `${siteUrl}/essay/${id}/`,
		priority: "0.8",
	})),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(url) => `  <url>
    <loc>${url.loc}</loc>
    <priority>${url.priority}</priority>
  </url>`,
	)
	.join("\n")}
</urlset>
`;

fs.writeFileSync(outputPath, xml);
console.log(`Sitemap written to public/sitemap.xml (${urls.length} URLs)`);

if (process.env.PING_GOOGLE !== "false") {
	fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(`${siteUrl}/sitemap.xml`)}`)
		.then(() => console.log("Pinged Google with updated sitemap"))
		.catch(() => {});
}
