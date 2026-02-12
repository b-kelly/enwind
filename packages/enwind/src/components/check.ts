import type { ThemedCss } from "../types.js";

const check: ThemedCss = (theme) => ({
    ".check": {
        accentColor: theme("colors.primary.DEFAULT"),
        height: theme("spacing.md"),
        width: theme("spacing.md"),
        outlineStyle: "solid",
        outlineWidth: "0",
        outlineColor: theme("colors.primary.focus"),
        outlineOffset: "1px", // TODO chrome overrides to this value?
        "&:disabled": {
            cursor: "not-allowed",
            opacity: theme("opacity.disabled"),
        },
        "&:focus, &:where(.focus)": {
            outlineWidth: theme("outlineWidth.sm"),
        },
    },
});

export default check;
