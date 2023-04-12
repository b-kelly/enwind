import { CssInJs } from "../types";
import button from "./button";
import input from "./input";

const components: CssInJs = (theme) => ({
    ...button(theme),
    ...input(theme),
});

export default components;
