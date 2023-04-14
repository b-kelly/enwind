import type { CssInJs } from "../types";

const table: CssInJs = (theme) => ({
    ".table": {
        width: "100%",
        maxWidth: "100%",
        borderCollapse: "collapse",
        borderSpacing: "0",
        "& tr": {
            borderBottomWidth: "1px",
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
            borderBottomWidth: "1px",
            borderBottomColor: theme("gray.300"),
        },
    },
});

export default table;
