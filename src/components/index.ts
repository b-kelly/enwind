import { CssInJs } from "../types";
import button from "./button";
import check from "./check";
import input from "./input";

const components: CssInJs = (theme) => ({
    ...button(theme),
    ...check(theme),
    ...input(theme),
});

export default components;
