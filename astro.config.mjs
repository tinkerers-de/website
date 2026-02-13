import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	site: "https://tinkerers.de",
	output: "server",
	adapter: cloudflare(),
	integrations: [mdx(), tailwind()],
});
