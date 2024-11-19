import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "~components": path.resolve(__dirname, "./src/components"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./testingLibrary.setup.ts",
    globals: true,
    // browser: {
    //   enabled: true,
    //   name: "chromium",
    //   provider: "playwright",
    // },
  },
});
