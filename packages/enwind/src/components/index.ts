import { CssInJs } from "../types";
import audio from "./audio";
import button from "./button";
import drawer from "./drawer";
import check from "./check";
import codeblock from "./codeblock";
import input from "./input";
import modal from "./modal";
import progress from "./progress";
import spinner from "./spinner";
import table from "./table";

const components: CssInJs = (theme) => ({
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
