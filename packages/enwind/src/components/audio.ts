import type { CssInJs } from "../types";

const audio: CssInJs = (theme) => ({
    ".audio": {
        padding: theme("spacing.sm"),
        borderWidth: theme("borderWidth.DEFAULT"),
        borderColor: theme("colors.body.highlight"),
        borderRadius: theme("borderRadius.DEFAULT"),
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
        lineHeight: "1",

        "& .audio-duration-text": {
            whitespace: "nowrap",
        },

        "& .audio-seek-control": {
            // apply the "gap" manually so the space between the time and seek control
            // matches the padding on buttons, while not adding extra gaps between the buttons
            marginLeft: theme("spacing.sm"),
            flexGrow: "1",
            // allow the input to shrink below its default width
            width: "0",
        },

        "&.disabled": {
            opacity: theme("opacity.disabled"),
            pointerEvents: "none",
        },
    },
});

export default audio;
