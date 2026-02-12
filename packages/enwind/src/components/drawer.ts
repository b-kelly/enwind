import type { ThemedCss } from "../types.js";
import overlay from "./_overlay.js";

const drawer: ThemedCss = (theme) => ({
    ".drawer": {
        ...overlay(theme),
        zIndex: theme("zIndex.drawer"),
        "& .drawer-contents": {
            backgroundColor: theme("colors.body.DEFAULT"),
            height: "100%",
            width: "50%",
            overflow: "auto",
        },
    },
});

export default drawer;
