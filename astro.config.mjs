import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://jhbdrivingschool.co.za",
  base: "/",
  integrations: [
    // Keep the thank-you page out of the sitemap — it shouldn't be indexed
    sitemap({ filter: (page) => !page.includes("/thank-you") }),
  ],
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
