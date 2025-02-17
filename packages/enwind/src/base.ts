import type { CssInJs } from "./types";

const css: CssInJs = (theme) => {
    const enwind = (key: string, mode: string) =>
        theme(`enwind.colors.${mode}.${key}`, null);

    const genColors = (mode: string) => ({
        "--_bw-color-primary": enwind("primary.DEFAULT", mode),
        "--_bw-color-primary-content": enwind("primary.content", mode),
        "--_bw-color-primary-focus": enwind("primary.focus", mode),

        "--_bw-color-body": enwind("body.DEFAULT", mode),
        "--_bw-color-body-content": enwind("body.content.DEFAULT", mode),
        "--_bw-color-body-content-light": enwind("body.content.light", mode),
        "--_bw-color-body-content-dark": enwind("body.content.dark", mode),
        "--_bw-color-body-highlight": enwind("body.highlight", mode),
        "--_bw-color-body-overlay": enwind("body.overlay", mode),

        "--_bw-color-success": enwind("success.DEFAULT", mode),
        "--_bw-color-success-focus": enwind("success.focus", mode),

        "--_bw-color-warn": enwind("warn.DEFAULT", mode),
        "--_bw-color-warn-focus": enwind("warn.focus", mode),

        "--_bw-color-danger": enwind("danger.DEFAULT", mode),
        "--_bw-color-danger-focus": enwind("danger.focus", mode),

        // syntax highlighting
        "--_bw-color-code": enwind("code.DEFAULT", mode),
        "--_bw-color-code-addition": enwind("code.addition", mode),
        "--_bw-color-code-attr": enwind("code.attr", mode),
        "--_bw-color-code-builtin": enwind("code.builtin", mode),
        "--_bw-color-code-comment": enwind("code.comment", mode),
        "--_bw-color-code-deletion": enwind("code.deletion", mode),
        "--_bw-color-code-literal": enwind("code.literal", mode),
        "--_bw-color-code-meta": enwind("code.meta", mode),
        "--_bw-color-code-string": enwind("code.string", mode),
        "--_bw-color-code-tag": enwind("code.tag", mode),
        "--_bw-color-code-title": enwind("code.title", mode),
        "--_bw-color-code-variable": enwind("code.variable", mode),
    });

    const darkModeVars = {
        "color-scheme": "dark",
        ...genColors("dark"),
    };

    const variables = {
        ":root": {
            ...genColors("light"),
        },
        "@media (prefers-color-scheme: dark)": {
            ":root": {
                ...darkModeVars,
            },
        },
        "body.theme-dark": {
            ...darkModeVars,
        },
    };

    const base = {
        body: {
            backgroundColor: theme("colors.body.DEFAULT", null),
            color: theme("colors.body.content.DEFAULT", null),
        },
        a: {
            color: theme("colors.primary.DEFAULT", null),
            "&:hover, &:focus": {
                color: theme("colors.primary.focus", null),
            },
        },
    };

    return {
        ...variables,
        ...base,
    };
};

export default css;
