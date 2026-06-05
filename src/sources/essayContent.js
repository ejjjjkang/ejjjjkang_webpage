// Essays are loaded automatically from src/essays/*.yaml
// To add a new essay, copy src/essays/_template.yaml, rename it, and fill it in.
// Files starting with "_" are ignored.

const modules = import.meta.glob("../essays/[^_]*.yaml", { eager: true });

export const essay_content = Object.values(modules)
	.map((mod) => mod.default)
	.sort((a, b) => new Date(b.date) - new Date(a.date));
