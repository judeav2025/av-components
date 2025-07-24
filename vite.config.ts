import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    lib: {
      entry: `${__dirname}/lib/index.ts`,
      fileName: (_, entryName) => `${entryName}.js`, // e.g., component-a.es.js
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
      treeshake: {
        moduleSideEffects: false,
      },
    },
  },
});
