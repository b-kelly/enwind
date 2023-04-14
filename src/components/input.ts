import type { CssInJs } from "../types";

const input: CssInJs = (theme) => ({
    ".input": {
        backgroundColor: theme("colors.body.DEFAULT"),
        borderColor: theme("colors.body.highlight"),
        outlineStyle: "solid",
        outlineWidth: "0",
        outlineColor: theme("colors.primary.focus"),
        display: "inline-block",
        padding: `${theme("padding.1")} ${theme("padding.2")}`,
        borderRadius: theme("borderRadius.DEFAULT"),
        borderWidth: "1px", //TODO theme("border.DEFAULT"),
        accentColor: theme("colors.primary.DEFAULT"),
        "&:focus, &.focus": {
            outlineWidth: "2px", //TODO theme("outline.2")
        },
        "&:disabled": {
            cursor: "not-allowed",
            opacity: theme("opacity.60"),
            backgroundColor: theme("colors.body.highlight"),
        },
    },
});

export default input;
