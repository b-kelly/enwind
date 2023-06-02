import type { CssInJs } from "../types";

const check: CssInJs = (theme) => ({
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
            opacity: theme("opacity.60"),
        },
        "&:focus, &.focus": {
            outlineWidth: "2px", //TODO theme("outline.2")
        },
    },
});

export default check;
