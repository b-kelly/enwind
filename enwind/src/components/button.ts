import type { CssInJs } from "../types";

const btnHover: CssInJs = (theme) => ({
    backgroundColor: theme("colors.body.highlight"),
    borderColor: theme("colors.body.highlight"),
});

const btnFocus: CssInJs = () => ({
    outlineWidth: "2px", //TODO theme("outline.2"),
});

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
        padding: theme("padding.2"),
        borderWidth: theme("borderWidth.DEFAULT"),
        borderColor: "transparent",
        borderRadius: theme("borderRadius.DEFAULT"),
        color: theme("colors.primary.DEFAULT"),
        outlineStyle: "solid",
        outlineWidth: "0",
        outlineColor: theme("colors.primary.DEFAULT"),
        "&:hover,&.hover": btnHover(theme),
        "&:focus, &:active, &.focus, &.active": btnFocus(theme),
        "&:disabled": {
            opacity: theme("opacity.60"),
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
        gap: theme("gap.2"),
    },
});

export default button;