import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

const entries = {
  Button: resolve(__dirname, "lib/Button/index.tsx"),
  Input: resolve(__dirname, "lib/Input/index.tsx"),
};

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: entries,
      fileName: (format, entryName) => `${entryName}.${format}.js`, // e.g., component-a.es.js
      formats: ["es"], // ES modules for tree shaking
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "lib",
        dir: "dist",
      },
    },
  },
});
