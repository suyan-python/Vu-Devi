import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Allow access from local network
    open: true, // Automatically open the browser when the server starts
  },
  assetsInclude: ["**/*.JPG"], // Allow JPG as assets
});
