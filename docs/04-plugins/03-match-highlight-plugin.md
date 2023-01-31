---
description: >-
  The plugin-match-highlight plugin allows Lyra to keep track of all token positions
  on each property of each document.
---

# Match highlight plugin

<h3 className="plugin-description">{frontMatter.description}</h3>

## Installation <a href="#installation" id="installation"></a>

You can install the plugin using any major Node.js/Bun package manager:

```bash title="Using npm"
npm install --save @lyrasearch/plugin-match-highlight
```

```bash title="Using yarn"
yarn add @lyrasearch/plugin-match-highlight
```

```bash title="Using pnpm"
pnpm add @lyrasearch/plugin-match-highlight
```

## Usage

Plugin usage depends on the runtime that you are using, even though the goal is
to expose the exact same APIs for browsers, Deno, and all the other JavaScript
engines.

The plugin exports `afterInsertHook`, which will be the hook used by Lyra to add
positions, and `searchWithHighlight` which wraps the original Lyra's `search`
function to return positions alongside docs.

```typescript
import { afterInsert, LyraWithHighlight, searchWithHighlight } from "../src";

const schema = {
  text: "string",
} as const;

const db = await create({
  schema,
  hooks: { afterInsert },
}) as LyraWithHighlight<typeof schema>;

await insertWithHooks(db, { text: "hello world" });

const results = await searchWithHighlight(db, "hello");
```

## API Reference

#### `searchWithHighlight` [​](https://deploy-preview-8--lyra-docs.netlify.app/plugins/plugin-match-highlight#searchwithhighlight) <a href="#searchwithhighlight" id="searchwithhighlight"></a>

A function that takes the same arguments as the original `search` function, and
returns the document with positions for each token on each property matching the
query.

```typescript
[
  {
    positions: {
      text: {
        hello: [{
          start: 0,
          length: 5
        }]
      }
    }
  },
  ...
]
```

## CommonJS Imports

Lyra plugins now ships **ESM** modules by default. This allows us to move faster when providing new features and bug fixes, as well as using the `"exports"` field in `package.json` to provide a better developer experience.

CommonJS imports are still supported, but you'll need to import the plugin from `@lyrasearch/plugin-match-highlight/cjs` instead of `@lyrasearch/plugin-match-highlight`:

```diff
- const { searchWithHighlight } = require("@lyrasearch/plugin-match-highlight");
+ const { searchWithHighlight } = require("@lyrasearch/plugin-match-highlight/cjs");
