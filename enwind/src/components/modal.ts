import { CssInJs } from "../types";

const modal: CssInJs = (theme) => ({
    ".modal": {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(0 0 0 / 0.5)", // TODO add to colors?
        backdropFilter: "blur(8px)",
        "&.visible": {
            display: "flex",
        },
        "& .modal-dialog": {
            backgroundColor: theme("colors.body.DEFAULT"),
            maxWidth: "100%",
            width: "100%",
            borderRadius: theme("borderRadius.DEFAULT"),
            borderWidth: theme("borderWidth.DEFAULT"),
            padding: theme("padding.lg"),
            display: "flex",
            flexDirection: "column",
            gap: theme("gap.lg"),
            // TODO md:max-w-2xl
        },
        "& .modal-title": {
            fontSize: theme("fontSize.2xl"),
            lineHeight: theme("lineHeight.8"), //TODO add to utilities?
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
        },
    },
});

export default modal;
