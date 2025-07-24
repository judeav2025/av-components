import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { globbySync } from "globby";

const __dirname = dirname(fileURLToPath(import.meta.url));

const componentFiles = globbySync("lib/components/*/index.tsx");
// Generate entry points (e.g., { 'button': 'lib/components/Button/index.tsx' })
const entries = componentFiles.reduce((acc, file) => {
  const componentName = file.split("/")[2]; // Extract folder name (e.g., Button)
  acc[componentName] = resolve(__dirname, file);
  return acc;
}, {} as Record<string, string>);

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
