import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yaml from "@rollup/plugin-yaml";

// Build-time-only config: compiles src/entry-server.jsx into a Node-runnable
// bundle that scripts/prerender.mjs imports to render "/" to static HTML.
// `noExternal: true` bundles the dependency tree so the output resolves without
// relying on node_modules layout.
export default defineConfig({
	plugins: [react(), yaml()],
	base: "/",
	ssr: { noExternal: true },
	build: {
		ssr: "src/entry-server.jsx",
		outDir: "dist-ssr",
		emptyOutDir: true,
		copyPublicDir: false,
	},
});
