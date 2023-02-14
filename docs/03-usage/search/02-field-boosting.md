# Fields Boosting

:::info
Available since `v0.4.2`
:::

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
