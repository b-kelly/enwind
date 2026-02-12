import type { ThemedCss } from "../types.js";
import audio from "./audio.js";
import button from "./button.js";
import drawer from "./drawer.js";
import check from "./check.js";
import codeblock from "./codeblock.js";
import input from "./input.js";
import modal from "./modal.js";
import progress from "./progress.js";
import spinner from "./spinner.js";
import table from "./table.js";

const components: ThemedCss = (theme) => ({
    ...audio(theme),
    ...button(theme),
    ...check(theme),
    ...codeblock(theme),
    ...drawer(theme),
    ...input(theme),
    ...modal(theme),
    ...progress(theme),
    ...spinner(theme),
    ...table(theme),
});

export default components;
