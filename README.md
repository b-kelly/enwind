# enwind

> _enwind_: v. to wind in or about

A simple design system written for use in my personal projects. I had a set of Tailwind components I was copy/pasting between projects that needed consolidating. I had a few hours to myself on a flight, so I whipped up this library.

## Usage

```bash
npm install enwind
```

Add the plugin to your `tailwind.config.js` file:

```js
import enwind from "enwind";

export default {
    // ...
    theme: {
        extend: {},
    },
    plugins: [enwind],
};
```

## Colors

Colors can be overridden in the `enwind` section of your Tailwind config:

```json
{
    "theme": {
        "extend": {
            "enwind": {
                "colors": {
                    "dark": {
                        "body": {
                            "DEFAULT": "#ccc"
                        }
                    }
                }
            }
        }
    }
}
```

Default values can be found in [colors.ts](./src/colors.ts).
