import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, "src/index.ts"),
            name: "plugin",
            // the proper extensions will be added
            fileName: "plugin",
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["tailwind"],
        },
    },
});
