# Search

With the current version of Lyra, only type `string` properties are searchable,
however, this does not prevent the addition of different types of properties.
Lyra will keep them in memory and send the entire document back whenever there's
a match for a query on searchable properties.

## Search

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
  plot:
    "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.",
  year: 2006,
  isFavorite: true,
});

await insert(movieDB, {
  title: "Big Fish",
  director: "Tim Burton",
  plot:
    "Will Bloom returns home to care for his dying father, who had a penchant for telling unbelievable stories. After he passes away, Will tries to find out if his tales were really true.",
  year: 2004,
  isFavorite: true,
});

await insert(movieDB, {
  title: "Harry Potter and the Philosopher's Stone",
  director: "Chris Columbus",
  plot:
    "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.",
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

## Fields Boosting

Starting with Lyra `v0.4.2`, you can use the `boost` interface to boost the
importance of a field in the search results.

```javascript
const searchResult = await search(movieDB, {
  term: "Harry",
  properties: "*",
  boost: {
    title: 2,
    director: 1.5,
  }
});
```

In this example, we are boosting the `title` field by `2` and the `director` field
by `1.5`.

## Filters

The object that defines our query, in this case
`{term: 'Harry', properties: '*'}`, can be shaped, by setting additional
properties (filters), to **"tighten"** or **"loosen"** our query.

### Search term

The `term` property specifies the `word` to be searched.

```javascript
const searchResult = await search(movieDB, {
  term: "Chris",
});
```

We are now searching for all the documents that contain the word `Chris`.

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

### Exact match

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

### Typo tolerance

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

### Results limits

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

### Results offset

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

## Facets

:::caution Experimental
Facets are still in **experimental** phase.
If you find an bug, please [open an issue](https://github.com/LyraSearch/lyra/issues)
:::

Lyra `v0.4.4` introduces experimental support for **facets**, a powerful tool for filtering and narrowing down search results on the Lyra search engine.

With the Lyra Faceted Search API, users can filter their search results by various criteria, such as category, price range, or other attributes, making it easier to find the information they need. Whether you're building a website, mobile app, or any other application, the Lyra Faceted Search API is the perfect solution for adding faceted search functionality to your project.

Given the following Lyra schema:

```js
import { create } from '@lyrasearch/lyra'

const db = await create({
  schema: {
    title: 'string',
    description: 'string',
    categories: {
      primary: 'string',
      secondary: 'string',
    },
    rating: 'number',
    isFavorite: 'boolean',
  }
})
```

Lyra will be able to generate facets at search-time based on the schema.
To do so, we need to specify the `facets` property in the `search` configuration:

```js
const results = await search(db, {
  term: 'Movie about cars and racing',
  properties: ['description'],
  facets: {
    'categories.first': {
      size: 3,
      order: 'DESC',
    },
    'categories.second': {
      size: 2,
      order: 'DESC',
    },
    rating: {
      ranges: [
        { from: 0, to: 3 },
        { from: 3, to: 7 },
        { from: 7, to: 10 },
      ]
    },
    isFavorite: {
      true: true,
      false: true,
    },
  }
})
```

This will generate the following result:

```js
{
  elapsed: ...,
  count: ...,
  hits: { ... },
  facets: {
    'categories.first': {
      count: 14,
      values: {
        'Action': 4,
        'Adventure': 3,
        'Comedy': 2,
      }
    },
    'categories.second': {
      count: 14,
      values: {
        'Cars': 4,
        'Racing': 3,
      }
    },
    rating: {
      count: 3,
      values: {
        '0-3': 5,
        '3-7': 15,
        '7-10': 80,
      }
    },
    isFavorite: {
      count: 2,
      values: {
        'true': 5,
        'false': 95,
      }
    },
  }
}
```

As you may have noticed, the `facets` property is an `object` that contains different
configurations depending on the property type specified in the schema.

### String facets

If a property is specified as `string` in the schema, the facet will accept the following
configuration:

| Property | Type   | Default | Description |
| -------- | ------ | ------- | ----------- |
| `size`   | `number` | `10` | Number of values to return. |
| `order`  | `string` | `DESC` | Order of the values. Can be either `ASC` or `DESC`. |
| `limit` | `number` | `100` | Maximum number of values to consider. |
| `offset` | `number` | `0` | Number of values to skip. |

In the search result, `string` facets will be returned as an `object` with the following properties:

```js
{
  count: 14,            // Total number of values, now limited to 3 (size)
  values: {
    'Action': 4,        // Number of documents that have this value
    'Adventure': 3,     // Number of documents that have this value
    'Comedy': 2,        // Number of documents that have this value
  }
}
```

### Number facets

If a property is specified as `number` in the schema, the facet will accept the following
configuration:

| Property | Type   | Default | Description |
| -------- | ------ | ------- | ----------- |
| `ranges` | `array` | `[]` | Array of ranges to consider. |

Each range is an `object` with the following properties:

| Property | Type    | Description |
| -------- | ------  | ----------- |
| `from` | `number`  | Minimum value of the range. |
| `to` | `number`    | Maximum value of the range. |

In the search result, `number` facets will be returned as an `object` with the following properties:

```js
{
  count: 3,             // Total number of ranges
  values: {
    '0-3': 5,           // Number of documents that have a value between 0 and 3 (inclusive)
    '3-7': 15,          // Number of documents that have a value between 3 and 7 (inclusive)
    '7-10': 80,         // Number of documents that have a value between 7 and 10 (inclusive)
  }
}
```

Please note that the `from` and `to` values are **inclusive**. Note also that the order of the ranges
is guaranteed as specified in the configuration.

### Boolean facets

If a property is specified as `boolean` in the schema, the facet will accept the following
configuration:

| Property | Type   | Default | Description |
| -------- | ------ | ------- | ----------- |
| `true` | `boolean` | `true` | Whether to consider `true` values. |
| `false` | `boolean` | `true` | Whether to consider `false` values. |

In the search result, `boolean` facets will be returned as an `object` with the following properties:

```js
{
  count: 2,             // Total number of values
  values: {
    'true': 5,          // Number of documents that have a `true` value
    'false': 95,        // Number of documents that have a `false` value
  }
}
```

## BM25 Algorithm

Lyra uses the [BM25](https://en.wikipedia.org/wiki/Okapi_BM25) algorithm to
calculate the relevance of a document when searching.

The BM25 algorithm is a **probabilistic** ranking function that uses **term
frequency** and **inverse document frequency** to calculate the relevance of a
document.

You can edit the BM25 parameters by using the `relevance` property in the `search`
configuration object.

```javascript
const searchResult = await search(movieDB, {
  term: "Chris",
  properties: ["director"],
  relevance: {
    // Term frequency saturation parameter.
    // Default value: 1.2
    // Recommended value: between 1.2 and 2
    k: 1.2,

    // Length normalization parameter.
    // Default value: 0.75
    // Recommended value: > 0.75
    b: 0.75,

    // Frequency normalization lower bound.
    // Default value: 0.5
    // Recommended value: between 0.5 and 1
    d: 0.5,  
  },
});
```