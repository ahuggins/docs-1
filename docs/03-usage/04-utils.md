# Utility functions for Lyra

Lyra exposes a few utility functions that can be useful when working with the search results.

- [getByID](#getbyid)
- [count](#count)

## `getByID`

`getByID` is a function that allows you to retrieve a document from a Lyra database by its ID.

```javascript
import { getByID } from '@lyrasearch/lyra'

const thePrestige = await getByID(movieDB, 'tt0482571')

// Returns the original, full document
```

## `count`

`count` is a function that allows you to retrieve the number of documents in a Lyra database.

```javascript
import { count } from '@lyrasearch/lyra'

const docNumber = await count(movieDB)

// Returns the number of documents in the database
```