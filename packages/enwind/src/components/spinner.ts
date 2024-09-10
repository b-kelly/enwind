import { CssInJs } from "../types";

const spinner: CssInJs = (theme) => ({
    ".spinner": {
        "--_spn-bw": `calc(theme("height.xs") / 2)`,
        "--_spn-h": theme("height.md"),
        display: "inline-flex",
        alignItems: "center",
        gap: theme("gap.xs"),
        "&:before": {
            content: "''",
            borderColor: "currentColor",
            borderTopColor: "transparent",
            borderWidth: "var(--_spn-bw)",
            borderRadius: "100%",
            height: "var(--_spn-h)",
            width: "var(--_spn-h)",
            animation: theme("animation.spin"),
        },
        "&.spinner-lg": {
            "--_spn-bw": theme("height.xs"),
            "--_spn-h": theme("height.xl"),
        },
        "@keyframes spin": theme("keyframes.spin"),
    },
});

export default spinner;
