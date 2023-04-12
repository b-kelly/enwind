import plugin from "tailwindcss/plugin";
import base from "./base";
import components from "./components";

export default plugin(
    function ({
        addBase,
        theme,
        addComponents,
        /*addUtilities,*/
    }) {
        addBase(base(theme));
        addComponents(components(theme));
    },
    {
        theme: {
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
    }
);
