import type { CssInJs } from "../types";

const input: CssInJs = (theme) => ({
    ".input": {
        backgroundColor: theme("colors.body.DEFAULT"),
        borderColor: theme("colors.body.highlight"),
        outlineStyle: "solid",
        outlineWidth: "0",
        outlineColor: theme("colors.primary.focus"),
        display: "inline-block",
        padding: `${theme("spacing.xs")} ${theme("spacing.sm")}`,
        borderRadius: theme("borderRadius.DEFAULT"),
        borderWidth: theme("borderWidth.DEFAULT"),
        accentColor: theme("colors.primary.DEFAULT"),
        "&:focus, &.focus": {
            outlineWidth: theme("outlineWidth.sm"),
        },
        "&:disabled": {
            cursor: "not-allowed",
            opacity: theme("opacity.disabled"),
            backgroundColor: theme("colors.body.highlight"),
        },
    },
    ".form-group": {
        display: "flex",
        flexDirection: "column",
        gap: theme("gap.xs"),
        "& label": {
            fontSize: theme("fontSize.sm"),
            lineHeight: theme("lineHeight.tight"),
        },
    },
});

export default input;
