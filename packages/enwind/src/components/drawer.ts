import type { CssInJs } from "../types";
import overlay from "./_overlay";

const drawer: CssInJs = (theme) => ({
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
