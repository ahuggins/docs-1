---
description: >-
  The plugin-data-persistence plugin allows Lyra to bump the entire database and
  restore it in three different formats.
---

# Data persistence plugin

<h3 className="plugin-description">{frontMatter.description}</h3>

The plugin is currently available on the following runtimes:

| Runtime        | Status               |
| -------------- | -------------------- |
| Node.js        | ✅ available          |
| Bun            | ✅ available          |
| V8 isolates    | ✅ available          |
| Major browsers | ✅ available          |
| Deno           | 🚧 under construction |

## Installation

You can install the plugin using any major Node.js/Bun package manager:

```bash title="Using npm"
npm install --save @lyrasearch/plugin-data-persistence
```

```bash title="Using yarn"
yarn add @lyrasearch/plugin-data-persistence
```

```bash title="Using pnpm"
pnpm add @lyrasearch/plugin-data-persistence
```

## Usage

Plugin usage depends on the runtime that you are using, even though the goal is
to expose the exact same APIs for browsers, Deno, and all the other JavaScript
engines.

Let's consider the following Lyra instance as a common database source for both
browsers and JavaScript engines:

```javascript
import { create, insert } from "@lyrasearch/lyra";

const originalInstance = await create({
  schema: {
    author: "string",
    quote: "string",
  },
});

await insert(originalInstance, {
  quote: "He who is brave is free",
  author: "Seneca",
});

await insert(originalInstance, {
  quote: "Make each day your masterpiece",
  author: "John Wooden",
});

await insert(originalInstance, {
  quote: "You must be the change you wish to see in the world",
  author: "Mahatma Gandhi",
});
```

## Persisting the database to disk[​](https://docs.lyrasearch.io/plugins/plugin-data-persistence#persisting-the-database-to-disk) <a href="#persisting-the-database-to-disk" id="persisting-the-database-to-disk"></a>

Now we have a Lyra instance containing three quotes. We can use the
`plugin-data-persistence` plugin to save the database to a file:

```javascript
import { persistToFile } from "@lyrasearch/plugin-data-persistence";

const filePath = await persistToFile(originalInstance, "binary", "./quotes.msp");
```

## Restore the database from disk[​](https://docs.lyrasearch.io/plugins/plugin-data-persistence#restore-the-database-from-disk) <a href="#restore-the-database-from-disk" id="restore-the-database-from-disk"></a>

To restore the database from the disk:

```javascript
import { restoreFromFile } from "@lyrasearch/plugin-data-persistence";
const db = await restoreFromFile("binary", filePath);
```

## CommonJS Imports

Lyra plugins now ships **ESM** modules by default. This allows us to move faster when providing new features and bug fixes, as well as using the `"exports"` field in `package.json` to provide a better developer experience.

CommonJS imports are still supported, but you'll need to import the plugin from `@lyrasearch/plugin-data-persistence/cjs` instead of `@lyrasearch/plugin-data-persistence`:

```diff
- const { persistToFile } = require("@lyrasearch/plugin-data-persistence");
+ const { persistToFile } = require("@lyrasearch/plugin-data-persistence/cjs");
