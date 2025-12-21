import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // Absolute imports support
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // IMPORTANT: do NOT set base unless deploying to subfolder
  // base: "/",  ❌ keep this commented or removed

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },

  server: {
    port: 5173,
    open: true,
  },
});
