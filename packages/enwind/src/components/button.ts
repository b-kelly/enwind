import type { CssInJs } from "../types";

const btnSelected: CssInJs = (theme) => ({
    "--_btn-fc": theme("colors.primary.content"),
    "--_btn-bg": theme("colors.primary.DEFAULT"),
    "--_btn-border": theme("colors.primary.focus"),
    "&:hover, &:where(.hover)": {
        "--_btn-bg": theme("colors.primary.focus"),
        "--_btn-border": theme("colors.primary.focus"),
    },
});

const button: CssInJs = (theme) => ({
    ".btn": {
        "--_btn-bg": "transparent",
        "--_btn-fc": theme("colors.primary.DEFAULT"),
        "--_btn-border": "transparent",
        display: "inline-block",
        padding: theme("spacing.sm"),
        backgroundColor: "var(--_btn-bg)",
        borderWidth: theme("borderWidth.DEFAULT"),
        borderColor: "var(--_btn-border)",
        borderRadius: theme("borderRadius.DEFAULT"),
        color: "var(--_btn-fc)",
        outlineStyle: "solid",
        outlineWidth: "0",
        outlineColor: theme("colors.primary.DEFAULT"),
        "&:hover, &:where(.hover)": {
            "--_btn-bg": theme("colors.body.highlight"),
            "--_btn-border": theme("colors.body.highlight"),
            color: "var(--_btn-fc)",
        },
        "&:focus-visible, &:where(.focus)": {
            outlineWidth: theme("outlineWidth.sm"),
            boxShadow: `inset 0 0 0 1px ${theme("colors.body.DEFAULT")}`,
            color: "var(--_btn-fc)",
        },
        "&:active, &:where(.active)": {
            transform: `scale(${theme("scale.95")})`,
            color: "var(--_btn-fc)",
        },
        "&:disabled": {
            opacity: theme("opacity.disabled"),
            pointerEvents: "none",
        },
    },
    ".btn-primary": {
        ...btnSelected(theme),
    },
    ".btn-icon": {
        "--_btn-border": "transparent",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        borderRadius: theme("borderRadius.full"),
        gap: theme("gap.sm"),
    },
});

export default button;
