import plugin, { Config } from "tailwindcss/plugin";
import components from "./components/index.js";
import { CssInJs } from "./types.js";

export interface EnwindOptions {
    // TODO remove others, like spacing?
    /** If true, then removes all non-Enwind colors from the config */
    strict: boolean;
}

export default plugin.withOptions<EnwindOptions>(
    () =>
        function ({ theme, addComponents }) {
            addComponents(components(theme) as Record<string, CssInJs>);
        },
    (opts) => {
        const config: Partial<Config> = {
            theme: {
                extend: {},
            },
        };

        if (opts?.strict) {
            config.theme!["colors"] = {};

            // Object.keys(utilities).map((k) => {
            //     config.theme![k] = {};
            // });
        }

        return config;
    },
) as Config;
