import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "dist", // Output directory
  },
  server: {
    port: 3000, // Development server port
  },
  root: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"), // Alias for src directory
    },
  },
  // Vite plugins
  plugins: [],
  // HTML pages configuration
  optimizeDeps: {
    include: ["@vueuse/core"],
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"), // Entry point for the index.html (homepage)
        about: resolve(__dirname, "pages/about-us.html"),
        services: resolve(__dirname, "pages/services.html"),
        blog: resolve(__dirname, "pages/how-to-begin.html"),
        contact: resolve(__dirname, "pages/contact.html"),
      },
    },
  },
});
