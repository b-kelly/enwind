import type { CssInJs } from "../types";

const btnSelected: CssInJs = (theme) => ({
    color: theme("colors.primary.content"),
    backgroundColor: theme("colors.primary.DEFAULT"),
    borderColor: theme("colors.primary.focus"),
    "&:hover": {
        backgroundColor: theme("colors.primary.focus"),
        borderColor: theme("colors.primary.focus"),
    },
});

const button: CssInJs = (theme) => ({
    ".btn": {
        display: "inline-block",
        padding: theme("spacing.sm"),
        borderWidth: theme("borderWidth.DEFAULT"),
        borderColor: "transparent",
        borderRadius: theme("borderRadius.DEFAULT"),
        color: theme("colors.primary.DEFAULT"),
        outlineStyle: "solid",
        outlineWidth: "0",
        outlineColor: theme("colors.primary.DEFAULT"),
        "&:hover, &.hover": {
            backgroundColor: theme("colors.body.highlight"),
            borderColor: theme("colors.body.highlight"),
        },
        "&:focus-visible, &.focus": {
            outlineWidth: theme("outlineWidth.sm"),
            boxShadow: `inset 0 0 0 1px ${theme("colors.body.DEFAULT")}`,
        },
        "&:active, &.active": {
            transform: `scale(${theme("scale.95")})`,
        },
        "&:disabled": {
            opacity: theme("opacity.disabled"),
            pointerEvents: "none",
        },
    },
    ".btn.btn-primary": {
        ...btnSelected(theme),
    },
    ".btn.btn-icon": {
        borderColor: "transparent",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        borderRadius: theme("borderRadius.full"),
        gap: theme("gap.sm"),
    },
});

export default button;
