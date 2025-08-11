import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  root: ".", // still fine
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        commander: resolve(__dirname, "pages/crew-commander.html"),
        engineer: resolve(__dirname, "pages/crew-engineer.html"),
        pilot: resolve(__dirname, "pages/crew-pilot.html"),
        specialist: resolve(__dirname, "pages/crew-specialist.html"),
        mars: resolve(__dirname, "pages/destination-mars.html"),
        moon: resolve(__dirname, "pages/destination-moon.html"),
        titan: resolve(__dirname, "pages/destination-titan.html"),
        europa: resolve(__dirname, "pages/destination-europa.html"),
        capsule: resolve(__dirname, "pages/technology-capsule.html"),
        spaceport: resolve(__dirname, "pages/technology-spaceport.html"),
        vehicle: resolve(__dirname, "pages/technology-vehicle.html"),
      },
    },
  },
});
