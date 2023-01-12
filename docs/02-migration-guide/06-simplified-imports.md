---
sidebar_label: Simplified Imports
sidebar_position: 6
---

# Imports

Before `v0.4.0`, Lyra was available both as a CommonJS and an ESM module. This meant that you could import Lyra in two different ways:

```javascript
// CommonJS
const { search, insert, create } = require("@lyrasearch/lyra");

// ESM
import { search, insert, create } from "@lyrasearch/lyra";
```

With `v0.4.0`, Lyra starts a migration into a **ESM-first** library, maintaining backward compatibility with CommonJS, but with a few changes.

This simplifies the imports by a lot, and allows us to move faster when providing new features and bug fixes, as well as using the `"exports"` field in `package.json` to provide a better developer experience.

Starting from `v0.4.0`, there are some changes when importing different parts of Lyra.

## Importing Lyra, stemmers, and internals in ESM

Importing Lyra, stemmers, and internals in ESM has become significantly simpler:

```diff
- import { search, insert, create } from "@lyrasearch/lyra";
+ import { search, insert, create } from "@lyrasearch/lyra"; // No changes for default Lyra functions

- import { include } from "@lyrasearch/lyra/dist/esm/internals";
+ import { include } from "@lyrasearch/lyra/internals";

- import { stemmer } from "@lyrasearch/lyra/dist/esm/stemmer/lib/it";
+ import { stemmer } from "@lyrasearch/lyra/stemmer/it";
```

## Importing Lyra in CommonJS

To import Lyra as a CommonJS module, you now need to explicitly import it from the `@lyrasearch/lyra/cjs` subpackage:

```diff
- const { search, insert, create } = require("@lyrasearch/lyra");
+ const { search, insert, create } = require("@lyrasearch/lyra/cjs");

- const { include } = require("@lyrasearch/lyra/dist/cjs/internals");
+ const { include } = require("@lyrasearch/lyra/cjs/internals");

- const { stemmer } = require("@lyrasearch/lyra/dist/cjs/stemmer/lib/it");
+ const { stemmer } = require("@lyrasearch/lyra/cjs/stemmer/it");
```