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
        borderWidth: theme("borderWidth.DEFAULT"),
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
    ".form-group": {
        display: "flex",
        flexDirection: "column",
        gap: theme("gap.1"),
        "& label": {
            fontSize: theme("fontSize.sm"),
            lineHeight: theme("lineHeight.tight"),
        },
    },
});

export default input;
