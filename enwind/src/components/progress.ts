import { CssInJs } from "../types";

const progress: CssInJs = (theme) => ({
    ".progress-circle": {
        "--value": "0",
        "--width": "8rem", //theme("width.32"),
        "--thickness": "calc(var(--width) / 10)",
        position: "relative",
        display: "inline-flex",
        height: "var(--width)",
        width: "var(--width)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        overflow: "hidden",
        color: theme("colors.primary.focus"),
        "&:before": {
            content: "''",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            background: `${theme(
                "colors.body.highlight"
            )} conic-gradient(currentColor calc(var(--value) * 1%), transparent 0)`,
            mask: "radial-gradient(farthest-side, transparent calc(100% - var(--thickness)), #000 calc(100% - var(--thickness)))",
        },
    },
});

export default progress;
