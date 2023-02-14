# Introduction to search

Lyra provides a simple search interface that allows you to search through your documents.

## Searching with Lyra

Let's say we have a database that contains some elements:

```javascript
import { create, insert, search } from "@lyrasearch/lyra";

const movieDB = await create({
  schema: {
    title: "string",
    director: "string",
    plot: "string",
    year: "number",
    isFavorite: "boolean",
  },
});

await insert(movieDB, {
  title: "The prestige",
  director: "Christopher Nolan",
  plot: "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.",
  year: 2006,
  isFavorite: true,
});

await insert(movieDB, {
  title: "Big Fish",
  director: "Tim Burton",
  plot: "Will Bloom returns home to care for his dying father, who had a penchant for telling unbelievable stories. After he passes away, Will tries to find out if his tales were really true.",
  year: 2004,
  isFavorite: true,
});

await insert(movieDB, {
  title: "Harry Potter and the Philosopher's Stone",
  director: "Chris Columbus",
  plot: "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.",
  year: 2001,
  isFavorite: false,
});
```

:::info
Notice that we are also importing the `search` method
:::

We can now search for one (or multiple) documents as easily as:

```javascript
const searchResult = await search(movieDB, {
  term: "Harry",
  properties: "*",
});
```

### Search properties

The `properties` property defines in which property to run our query.

```javascript
const searchResult = await search(movieDB, {
  term: "Chris",
  properties: ["director"],
});
```

We are now searching for all the documents that contain the word `Chris` in the
`director` property.

We can also search through nested properties:

```javascript
const searchResult = await search(movieDB, {
  term: "Chris",
  properties: ["cast.director"],
});
```

By default, Lyra searches in **all** searchable properties.

## Exact match

The `exact` property finds all the document with an exact match of the `term`
property.

```javascript
const searchResult = search(movieDB, {
  term: "Chris",
  properties: ["director"],
  exact: true,
});
```

We are now searching for all the documents that contain **`exactly`** the word
`Chris` in the `director` property.

> Without the `exact` property, for example, the term `Christopher Nolan` would
> be returned as well, as it contains the word `Chris`.

## Typo tolerance

The `tolerance` property allows specifying the maximum distance (following the
Levenshtein algorithm) between the term and the searchable property.

> _The Levenshtein distance is a string metric for measuring the difference
> between two sequences. Informally, the Levenshtein distance between two words
> is the minimum number of single-character edits (insertions, deletions or
> substitutions) required to change one word into the other._

```javascript
const searchResult = await search(movieDB, {
  term: "Cris",
  properties: ["director"],
  tolerance: 1,
});
```

We are searching for all the documents that contain a term with an edit distance
of `1` (e.g. `Chris`) in the `director` property.

:::warning
`Tolerance` doesn't work together with the `exact` parameter. `Exact`
will have priority.
:::

## Results limits

The `limit` property limits the result at the specified number.

```javascript
const searchResult = await search(movieDB, {
  term: "Chris",
  properties: ["director"],
  limit: 1,
});
```

We are searching for the `first` document that contains the term `Chris` in the
`director` property.

## Results offset

The `offset` property skips the first `X` results.

```javascript
const searchResult = await search(movieDB, {
  term: "Chris",
  properties: ["director"],
  offset: 1,
});
```

We are searching for all the documents that contains the term `Chris` in the
`director` property, but returning the document at offset `1`.

:::info
By default, Lyra limits the search results to `10`, without any offset
(so, `0` as offset value).
:::

## What does the `search` method return?[​](https://docs.lyrasearch.io/usage/search-data#what-does-the-search-method-return) <a href="#what-does-the-search-method-return" id="what-does-the-search-method-return"></a>

Now that we have learned how to perform **searches** on a Lyra database, we can
briefly analyze the response that Lyra gives us back.

Let's say we have run the following query:

```javascript
const searchResult = await search(movieDB, {
  term: "Cris",
  properties: ["director"],
  tolerance: 1,
});
```

Whether the document was found or not, Lyra gives back an `object` with the
following properties:

```javascript
{
  elapsed: 181208n,
  count: 2,
  hits: [
    {
      id: '37149225-243',
      score: 0.23856062735983122,
      document: {
        title: "Harry Potter and the Philosopher's Stone",
        director: 'Chris Columbus',
        plot: 'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.',
        year: 2001,
        isFavorite: false
      }
    },
    {
      id: '37149225-5',
      score: 0.21267890323564321,
      document: {
        title: 'The prestige',
        director: 'Christopher Nolan',
        plot: 'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',
        year: 2006,
        isFavorite: true
      }
    }
  ]
}
```

| Property  | Type     | Description                                                                                                      |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `elapsed` | `BigInt` | Time taken to execute the query.                                                                                 |
| `hits`    | `object` | Array of results containing result score (from `0` to `1` based on relevance), Lyra's ID, and original document. |
| `count`   | `number` | Number of total results.                                                                                         |

You can customize the `elapsed` property into a more readable format by using
the `components.elapsed.format` property during the database initialization:

```js
import { create } from '@lyrasearch/lyra'

const db = await create({
  schema: { ... },
  components: {
    elapsed: {
      format: 'human' // defaults to 'raw'
    }
  }
})
```

By setting this configuration, the `elapsed` property will be returned as a human-readable string:

```js
{
  elapsed: '1ms',
  count: 2,
  hits: { ... }
}
```
