import { CssInJs } from "../types";
import button from "./button";
import check from "./check";
import input from "./input";
import table from "./table";

const components: CssInJs = (theme) => ({
    ...button(theme),
    ...check(theme),
    ...input(theme),
    ...table(theme),
});

export default components;
