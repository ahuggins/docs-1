# Delete data

Deletion is one of the easiest things to do in Lyra. Let's say we have the
following database with the following inserted documents:

```javascript
import { create, insert, remove, search } from "@lyrasearch/lyra";

const movieDB = await create({
  schema: {
    title: "string",
    director: "string",
    plot: "string",
    year: "number",
    isFavorite: "boolean",
  },
});

const { id: thePrestige } = await insert(movieDB, {
  title: "The prestige",
  director: "Christopher Nolan",
  plot: "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.",
  year: 2006,
  isFavorite: true,
});

const { id: bigFish } = await insert(movieDB, {
  title: "Big Fish",
  director: "Tim Burton",
  plot: "Will Bloom returns home to care for his dying father, who had a penchant for telling unbelievable stories. After he passes away, Will tries to find out if his tales were really true.",
  year: 2004,
  isFavorite: true,
});

const { id: harryPotter } = await insert(movieDB, {
  title: "Harry Potter and the Philosopher's Stone",
  director: "Chris Columbus",
  plot: "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.",
  year: 2001,
  isFavorite: false,
});
```

:::info
Notice that we are also importing the `remove` method.
:::

To delete a single document from the database we use the:

```javascript
await remove(movieDB, harryPotter);
```

As simple as that.
