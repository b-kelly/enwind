import c from "tailwindcss/colors";

export default {
    light: {
        body: {
            DEFAULT: c.white,
            content: {
                DEFAULT: c.gray["800"],
                light: c.gray["700"],
                dark: c.black,
            },
            highlight: c.neutral["200"],
            overlay: "rgb(0 0 0 / 0.5)", // TODO color choice,
        },
        primary: {
            DEFAULT: c.indigo["500"],
            content: c.white,
            focus: c.indigo["600"],
        },
        success: {
            DEFAULT: c.green["500"],
            focus: c.green["600"],
        },
        warn: {
            DEFAULT: c.amber["400"],
            focus: c.amber["500"],
        },
        danger: {
            DEFAULT: c.red["500"],
            focus: c.red["600"],
        },
        code: {
            DEFAULT: c.gray["800"], // body.content.DEFAULT
            addition: c.green["500"], // success.DEFAULT
            attr: c.black, // body.content.dark
            builtin: c.green["700"],
            comment: c.gray["700"], // body.content.light
            deletion: c.red["500"], // danger.DEFAULT
            literal: c.green["700"],
            meta: c.cyan["700"],
            string: c.indigo["500"], // primary.DEFAULT
            tag: c.gray["800"], // body.content.DEFAULT
            title: c.red["900"],
            variable: c.red["900"],
        },
    },
    dark: {
        body: {
            DEFAULT: c.slate["900"],
            content: {
                DEFAULT: c.gray["200"],
                light: c.gray["300"],
                dark: c.white,
            },
            highlight: c.slate["600"],
            overlay: "rgb(0 0 0 / 0.5)", // TODO copied from light mode
        },
        primary: {
            DEFAULT: c.teal["500"],
            content: c.black,
            focus: c.teal["600"],
        },
        success: {
            DEFAULT: c.green["500"],
            focus: c.green["600"],
        },
        warn: {
            DEFAULT: c.amber["400"],
            focus: c.amber["500"],
        },
        danger: {
            DEFAULT: c.red["500"],
            focus: c.red["600"],
        },
        code: {
            DEFAULT: c.gray["200"], // body.content.DEFAULT
            addition: c.green["500"], // success.DEFAULT
            attr: c.white, // body.content.dark
            builtin: c.green["600"],
            comment: c.gray["300"], // body.content.light
            deletion: c.red["500"], // danger.DEFAULT
            literal: c.green["500"],
            meta: c.cyan["500"],
            string: c.teal["500"], // primary.DEFAULT
            tag: c.gray["200"], // body.content.DEFAULT
            title: c.orange["700"],
            variable: c.orange["700"],
        },
    },
};
