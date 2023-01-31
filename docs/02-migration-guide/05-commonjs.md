---
sidebar_label: CommonJS imports
sidebar_position: 5
---

# CommonJS Imports

Lyra now ships **ESM** modules by default. This allows us to move faster when providing new features and bug fixes, as well as using the `"exports"` field in `package.json` to provide a better developer experience.

CommonJS imports are still supported, but you'll need to import Lyra from `@lyrasearch/lyra/cjs` instead of `@lyrasearch/lyra`:

```diff
- const { search, insert, create } = require("@lyrasearch/lyra");
+ const { search, insert, create } = require("@lyrasearch/lyra/cjs");
```

No other changes are required.

## TypeScript

Set `moduleResolution` in the `compilerOptions` in your `tsconfig.json` to be either `Node16` or `NodeNext`.

When importing types, always refer to the standard lyra import:

```ts
import type { Language } from '@lyrasearch/lyra'
```
