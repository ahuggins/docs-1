---
sidebar_label: Components
sidebar_position: 3
---

# Components

Lyra `v0.4.0` introduces a new way to customize and interact with the library core. The new components system allows you to customize the library behavior by replacing the default components with your own.

By "components" we refer to algorithms, data structures, and other building blocks that are used to build the library core.

With `v0.3.1`, for example, if you wanted to import a custom stemmer, you had to do something like this:

```js title="V0.3.1"
import { create } from "@lyrasearch/lyra";
import { stemmer } from "@lyrasearch/lyra/dist/esm/stemmer/lib/it";

const db = create({
  schema: {
    author: "string",
    quote: "string",
  },
  defaultLanguage: "italian",
  tokenizer: {
    stemmingFn: stemmer,
  }
});
```

Starting from `v0.4.0`, you can customize the stemmer by using the new `components` interface:

```js title="V0.4.0"
import { create } from "@lyrasearch/lyra";
import { stemmer } from "@lyrasearch/lyra/stemmer/it";

const db = create({
  schema: {
    author: "string",
    quote: "string",
  },
  defaultLanguage: "italian",
  components: {
    tokenizer: {
      stemmingFn: stemmer,
    }
  }
});
```

With the following Lyra releases, we'll make it possible to customize as much as possible of the library core via the newest `components` interface.