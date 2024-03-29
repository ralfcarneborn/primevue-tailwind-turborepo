import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@smoothcomp/ui",
      fileName: (format) => `@smoothcomp-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "primevue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
