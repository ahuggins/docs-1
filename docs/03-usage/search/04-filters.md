# Filters

:::info
Available since `v0.4.8`
:::

:::caution Experimental
Filters are still in **experimental** phase.
If you find an bug, please [open an issue](https://github.com/LyraSearch/lyra/issues)
:::

Starting with Lyra `v0.4.8`, you can use the `filters` interface to filter the
search results.

Filters are available for both numeric and boolean properties.

If we consider the following schema:

```javascript
const db = await create({
  schema: {
    id: 'string',
    title: 'string',
    year: 'number',
    meta: {
      rating: 'number',
      length: 'number',
      favorite: 'boolean',
    }
  }
})
```

We will be able to filter the search results by using the `where` property on numeric properties only:

```javascript
const results = await search({
  term: 'prestige',
  where: {
    year: {
      gte: 2000,
    },
    'meta.rating': {
      between: [5, 10],
    },
    'meta.favorite': true,
    length: {
      gt: 60,
    }
  }
})
```

## Filters operators

As for now, the following operators are available for numeric properties:

| Operator | Description | Example |
| -------- | ----------- | ------- |
| `gt` | Greater than | `year: { gt: 2000 }` |
| `gte` | Greater than or equal to | `year: { gte: 2000 }` |
| `lt` | Less than | `year: { lt: 2000 }` |
| `lte` | Less than or equal to | `year: { lte: 2000 }` |
| `eq` | Equal to | `year: { eq: 2000 }` |
| `between` | Between two values (inclusive) | `year: { between: [2000, 2008] }` |

For boolean properties, you can simply set the property to `true` or `false`:

```javascript
const results = await search({
  term: 'prestige',
  where: {
    'meta.favorite': true,
  }
})
```