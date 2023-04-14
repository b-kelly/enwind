import type { CssInJs } from "./types";

const css: CssInJs = (theme) => {
    const darkModeVars = {
        "color-scheme": "dark",
        "--_bw-color-primary": theme("colors.teal.500", null),
        "--_bw-color-primary-content": theme("colors.black", null),
        "--_bw-color-primary-focus": theme("colors.teal.600", null),

        "--_bw-color-body": theme("colors.slate.900", null),
        "--_bw-color-body-content": theme("colors.white", null),
        "--_bw-color-body-highlight": theme("colors.slate.600", null),
    };

    const variables = {
        ":root": {
            "--_bw-color-primary": theme("colors.indigo.500", null),
            "--_bw-color-primary-content": theme("colors.white", null),
            "--_bw-color-primary-focus": theme("colors.indigo.600", null),

            "--_bw-color-body": theme("colors.white", null),
            "--_bw-color-body-content": theme("colors.gray.900", null),
            "--_bw-color-body-highlight": theme("colors.neutral.200", null),

            "--_bw-color-success": theme("colors.green.500", null),
            "--_bw-color-success-focus": theme("colors.green.600", null),

            "--_bw-color-warn": theme("colors.amber.400", null),
            "--_bw-color-warn-focus": theme("colors.amber.500", null),

            "--_bw-color-danger": theme("colors.red.500", null),
            "--_bw-color-danger-focus": theme("colors.red.600", null),
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
        "html, body": {
            backgroundColor: theme("colors.body.DEFAULT", null),
            color: theme("colors.body.content", null),
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
