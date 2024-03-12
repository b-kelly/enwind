import type { CssInJs } from "../types";

const overlay: CssInJs = (theme) => ({
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: theme("colors.body.overlay"),
    backdropFilter: "blur(8px)",
});

export default overlay;
