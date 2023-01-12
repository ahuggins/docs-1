# Extending Lyra

:::info CommonJS support
The following examples shows how to import Lyra's internals using ESM imports. If you're still using CommonJS, you can import Lyra from `@lyrasearch/lyra/cjs/internals` instead of `@lyrasearch/lyra/internals`.
:::

Extending Lyra has just become easier than ever. Starting from `v0.3.0`, Lyra exposes some of its internals:

```javascript
import {
  formatNanoseconds,
  getNanosecondsTime,
  intersectTokenScores,
  includes,
  boundedLevenshtein,
  tokenize,
} from "@lyrasearch/lyra/internals";
```

Every exposed method comes with its own type definition.

Let's break them down:

### `formatNanoseconds`

Takes a `BigInt` as input and returns a human-readable `string`.

```javascript
import { formatNanoseconds } from "@lyrasearch/lyra/internals";

formatNanoseconds(30000n); // "30μs"
```

### `getNanosecondsTime`

Gets the current time with nanoseconds-precision. Returns a `BigInt`.

```javascript
import { getNanosecondsTime } from "@lyrasearch/lyra/internals";

getNanosecondsTime(); // 1363500821581208n
```

### `intersectTokenScores`

Returns the intersection of `N` arrays.

```javascript
import { intersectTokenScores } from "@lyrasearch/lyra/internals";

intersectTokenScores([
  [
    ["foo", 1],
    ["bar", 1],
    ["baz", 2],
  ],
  [
    ["foo", 4],
    ["quick", 10],
    ["brown", 3],
    ["bar", 2],
  ],
  [
    ["fox", 12],
    ["foo", 4],
    ["jumps", 3],
    ["bar", 6],
  ],
]);

// Result: [["foo", 9], ["bar", 9]]
```

### `includes`

faster alternative to `Array.prototype.includes`.

```javascript
import { includes } from "@lyrasearch/lyra/internals";

includes([10, 20, 30], 10); // true
```

### `boundedLevenshtein`

Computes the Levenshtein distance between two strings `(a, b)`, returning early with -1 if the distance is greater than the given tolerance. It assumes that `tolerance >= ||a| - |b|| >= 0`.

```javascript
import { boundedLevenshtein } from "@lyrasearch/lyra/internals";

boundedLevenshtein("moon", "lions", 3); // { isBounded: true, distance: 3 }
```
