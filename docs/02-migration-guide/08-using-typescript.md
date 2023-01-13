---
sidebar_label: Using TypeScript
sidebar_position: 8
---

# Using TypeScript

Lyra is written in TypeScript and generates type definitions for the library via `tsc`.
If you're using TypeScript in a **ESM** project, you can import Lyra like this:

```ts
import { create, insert, search } from '@lyrasearch/lyra';
```

so no additional configuration is needed. But chances are that if you're using the default `tsconfig.json` file, you're using CommonJS modules, and you'll need to import Lyra like this:

```ts
import { create, insert, search } from '@lyrasearch/lyra/cjs';
import { stemmer } from '@lyrasearch/lyra/cjs/stemmer/it';
```

This will allow TypeScript to correctly resolve the types for the imported modules.