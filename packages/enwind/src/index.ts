import plugin, { Config } from "tailwindcss/plugin";
import base from "./base.js";
import components from "./components/index.js";
import colors from "./colors.js";
import { utilities } from "./utilities.js";
import { CssInJs } from "./types.js";

export interface EnwindOptions {
    // TODO remove others, like spacing?
    /** If true, then removes all non-Enwind colors from the config */
    strict: boolean;
}

export default plugin.withOptions<EnwindOptions>(
    () =>
        function ({ addBase, theme, addComponents }) {
            addBase(base(theme));
            addComponents(components(theme) as Record<string, CssInJs>);
        },
    (opts) => {
        const config: Partial<Config> = {
            theme: {
                enwind: {
                    colors,
                },
                extend: {
                    ...utilities,
                    colors: {
                        body: {
                            DEFAULT: "var(--_bw-color-body)",
                            content: {
                                DEFAULT: "var(--_bw-color-body-content)",
                                light: "var(--_bw-color-body-content-light)",
                                dark: "var(--_bw-color-body-content-dark)",
                            },
                            highlight: "var(--_bw-color-body-highlight)",
                            overlay: "var(--_bw-color-body-overlay)",
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
                        code: {
                            DEFAULT: "var(--_bw-color-code)",
                            addition: "var(--_bw-color-code-addition)",
                            attr: "var(--_bw-color-code-attr)",
                            builtin: "var(--_bw-color-code-builtin)",
                            comment: "var(--_bw-color-code-comment)",
                            deletion: "var(--_bw-color-code-deletion)",
                            literal: "var(--_bw-color-code-literal)",
                            meta: "var(--_bw-color-code-meta)",
                            string: "var(--_bw-color-code-string)",
                            tag: "var(--_bw-color-code-tag)",
                            title: "var(--_bw-color-code-title)",
                            variable: "var(--_bw-color-code-variable)",
                        },
                    },
                },
            },
        };

        if (opts?.strict) {
            config.theme!["colors"] = {};

            Object.keys(utilities).map((k) => {
                config.theme![k] = {};
            });
        }

        return config;
    },
) as Config;
