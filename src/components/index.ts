import { CssInJs } from "../types";
import button from "./button";
import check from "./check";
import input from "./input";
import modal from "./modal";
import table from "./table";

const components: CssInJs = (theme) => ({
    ...button(theme),
    ...check(theme),
    ...input(theme),
    ...modal(theme),
    ...table(theme),
});

export default components;
