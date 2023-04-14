import type { CssInJs } from "../types";

const table: CssInJs = (theme) => ({
    ".table": {
        width: "100%",
        maxWidth: "100%",
        borderCollapse: "collapse",
        borderSpacing: "0",
        "& tr": {
            borderBottomWidth: theme("borderWidth.DEFAULT"),
            "&:last-of-type": {
                borderBottomColor: "transparent",
            },
        },
        "& th, & td": {
            padding: theme("padding.2"),
            verticalAlign: "middle",
            textAlign: "left",
        },
        "& thead th": {
            fontWeight: theme("fontWeight.bold"),
            verticalAlign: "bottom",
            whitespace: "no-wrap",
            lineHeight: theme("lineHeight.tight"),
            borderBottomWidth: theme("borderWidth.DEFAULT"),
            borderBottomColor: theme("colors.body.highlight"),
        },
    },
});

export default table;
