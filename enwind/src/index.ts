import plugin from "tailwindcss/plugin";
import base from "./base";
import components from "./components";
import colors from "./colors";
import type { Config } from "tailwindcss";

export interface EnwindOptions {
    // TODO remove others, like spacing?
    /** If true, then removes all non-Enwind colors from the config */
    strict: boolean;
}

export default plugin.withOptions<EnwindOptions>(
    () =>
        function ({ addBase, theme, addComponents }) {
            addBase(base(theme));
            addComponents(components(theme));
        },
    (opts) => {
        const config: Partial<Config> = {
            theme: {
                enwind: {
                    colors,
                },
                extend: {
                    colors: {
                        body: {
                            DEFAULT: "var(--_bw-color-body)",
                            content: "var(--_bw-color-body-content)",
                            highlight: "var(--_bw-color-body-highlight)",
                        },
                        primary: {
                            DEFAULT: "var(--_bw-color-primary)",
                            content: "var(--_bw-color-primary-content)",
                            focus: "var(--_bw-color-primary-focus)",
                        },
                        success: {
                            DEFAULT: "var(--_bw-color-success)",
                            focus: "var(--_bw-color-success-focus)",
                        },
                        warn: {
                            DEFAULT: "var(--_bw-color-warn)",
                            focus: "var(--_bw-color-warn-focus)",
                        },
                        danger: {
                            DEFAULT: "var(--_bw-color-danger)",
                            focus: "var(--_bw-color-danger-focus)",
                        },
                    },
                },
            },
        };

        return config;
    }
);
