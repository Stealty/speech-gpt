import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
      "@use": fileURLToPath(new URL("./src/use", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@icons": fileURLToPath(
        new URL("./src/components/icons", import.meta.url)
      ),
      "@ions": fileURLToPath(new URL("./src/components/ions", import.meta.url)),
      "@atoms": fileURLToPath(
        new URL("./src/components/atoms", import.meta.url)
      ),
      "@molecules": fileURLToPath(
        new URL("./src/components/molecules", import.meta.url)
      ),
      "@organisms": fileURLToPath(
        new URL("./src/components/organisms", import.meta.url)
      ),
      "@templates": fileURLToPath(
        new URL("./src/components/templates", import.meta.url)
      ),
    },
  },
});
