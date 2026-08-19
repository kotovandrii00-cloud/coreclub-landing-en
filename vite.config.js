import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, "index.html"),
        privacy: resolve(rootDir, "privacy.html"),
        support: resolve(rootDir, "support.html"),
      },
    },
  },
});
