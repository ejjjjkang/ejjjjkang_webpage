import fs from "fs/promises";
import path from "path";

const essaysDir = path.resolve("src/essays");
const outFile = path.resolve("prerender-routes.txt");

async function main() {
	const entries = await fs.readdir(essaysDir, { withFileTypes: true });
	const routes = new Set();
	routes.add("/");

	for (const e of entries) {
		if (!e.isFile()) continue;
		if (!e.name.endsWith(".yaml")) continue;
		if (e.name.startsWith("_")) continue;
		const p = path.join(essaysDir, e.name);
		const txt = await fs.readFile(p, "utf8");
		const m = txt.match(/^id:\s*(.+)$/m);
		if (m) {
			const id = m[1].trim();
			if (id) routes.add(`/essay/${id}`);
		}
	}

	const out = Array.from(routes).join("\n") + "\n";
	await fs.writeFile(outFile, out, "utf8");
	console.log("Wrote prerender routes to", outFile);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
