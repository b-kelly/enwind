import type { CssInJs } from "../types";

const codeblock: CssInJs = (theme) => ({
    ".codeblock": {
        background: theme("colors.body.highlight"),
        borderRadius: theme("borderRadius.DEFAULT"),
        color: theme("colors.code.DEFAULT"),
        display: "block",
        "overflow-x": "auto",
        overflow: "auto",
        padding: "0.5em",
        width: "100%",

        ".hljs-subst, .hljs-formula, .hljs-attr, .hljs-property, .hljs-params":
            {
                /* default color */
            },

        ".hljs-comment": {
            color: theme("colors.code.comment"),
        },

        ".hljs-tag, .hljs-punctuation": {
            color: theme("colors.code.tag"),
        },

        ".hljs-tag .hljs-name, .hljs-tag .hljs-attr": {
            color: theme("colors.code.attr"),
        },

        ".hljs-keyword, .hljs-attribute, .hljs-selector-tag, .hljs-meta .hljs-keyword, .hljs-doctag, .hljs-name":
            {
                "font-weight": "bold",
            },

        ".hljs-type, .hljs-string, .hljs-number, .hljs-selector-id, .hljs-selector-class, .hljs-quote, .hljs-template-tag":
            {
                color: theme("colors.code.string"),
            },

        ".hljs-title, .hljs-section": {
            color: theme("colors.code.title"),
            "font-weight": "bold",
        },

        ".hljs-regexp, .hljs-symbol, .hljs-variable, .hljs-template-variable, .hljs-link, .hljs-selector-attr, .hljs-operator, .hljs-selector-pseudo":
            {
                color: theme("colors.code.variable"),
            },

        ".hljs-literal": {
            color: theme("colors.code.literal"),
        },

        ".hljs-built_in, .hljs-bullet, .hljs-code": {
            color: theme("colors.code.builtin"),
        },

        ".hljs-meta": {
            color: theme("colors.code.meta"),
        },

        ".hljs-addition": {
            color: theme("colors.code.addition"),
        },

        ".hljs-deletion": {
            color: theme("colors.code.deletion"),
        },

        ".hljs-emphasis": {
            "font-style": "italic",
        },

        ".hljs-strong": {
            "font-weight": "bold",
        },
    },
});

export default codeblock;
