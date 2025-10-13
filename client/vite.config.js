// import tailwindcss from "@tailwindcss/vite";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    "**/*.JPG",
    "**/*.jpg",
    "**/*.png",
    "**/*.svg",
    "**/*.heic",
    "**/*.HEIC",
  ],
  server: {
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist", // default output folder
    emptyOutDir: true,
  },
  base: "/",
});
