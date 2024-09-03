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
    },
};
