---
sidebar_label: Async methods
sidebar_position: 4
---

# Async methods

With `v0.3.1` and below, Lyra methods were synchronous. This meant that you could use them like this:

```js
import { create, insert, search } from "@lyrasearch/lyra";
const db = create({
  schema: {
    quote: "string",
    author: "string",
  }
});
insert(db, {
  quote: "I feel as if I'm always on the verge of waking up",
  author: "Fernando Pessoa"
});
const results = search(db, {
  term: "waking up"
});
```

With `v0.4.0`, Lyra methods are now asynchronous. This means that you'll need to use `await` when calling them:

```js
import { create, insert, search } from "@lyrasearch/lyra";
const db = await create({
  schema: {
    quote: "string",
    author: "string",
  }
});
await insert(db, {
  quote: "I feel as if I'm always on the verge of waking up",
  author: "Fernando Pessoa"
});
const results = await search(db, {
  term: "waking up"
});
```

If you're using Lyra in a browser, you can use the `async` attribute on your script tag:

```html
<script type="module" async>
  import { create, insert, search } from "@lyrasearch/lyra";
  const db = await create({
    schema: {
      quote: "string",
      author: "string",
    }
  });
  // ...
</script>
```

The synchronous methods now moved to async are:

- `create`
- `insert`
- `search`
- `remove`
- `load`
- `save`