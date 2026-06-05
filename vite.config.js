import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yaml from "@rollup/plugin-yaml";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

export default defineConfig({
	plugins: [react(), yaml(), vitePrerenderPlugin()],
	base: "./",
});
