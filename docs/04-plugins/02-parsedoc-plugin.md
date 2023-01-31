---
description: >-
  The plugin-parsedoc plugin allows Lyra to parse and create indexes from HTML
  and Markdown documents automatically.
---

# Parsedoc plugin

<h3 className="plugin-description">{frontMatter.description}</h3>

## Installation <a href="#installation" id="installation"></a>

You can install the plugin using any major Node.js/Bun package manager:

```bash title="Using npm"
npm install --save @lyrasearch/plugin-parsedoc
```

```bash title="Using pnpm"
pnpm add @lyrasearch/plugin-parsedoc
```

```bash title="Using yarn"
yarn add @lyrasearch/plugin-parsedoc
```

## Usage

Plugin usage depends on the runtime that you are using, even though the goal is to expose the exact same APIs for browsers, Deno, and all the other JavaScript engines.

The plugin exports `defaultHtmlSchema` which will be the schema used in the index. Providing a glob pattern to the files containing the documents will index them.

```javascript
import { create, insert } from "@lyrasearch/lyra";
import { populateFromGlob, defaultHtmlSchema } from "@lyrasearch/plugin-parsedoc";

const db = await create({
  schema: defaultHtmlSchema,
});

await populateFromGlob(db, "docs/**/*.html");
```

## API Reference

#### `populateFromGlob`[​](https://deploy-preview-8--lyra-docs.netlify.app/plugins/plugin-parsedoc#populatefromglob) <a href="#populatefromglob" id="populatefromglob"></a>

An asynchronous function that takes three arguments:

- `db`: the database to populate.
- `globPath`: a string representing a glob path to reading the files from.
- `options`: an object containing the following properties:
  - `transformFn` (optional): a function that passes an object as its only argument. It contains the raw HTML/Markdown chunk, tag name, parsed content and html attributes.
  - `mergeStrategy` (optional): a value that defines how to handle consecutive chunks of the same tag. The default value is `merge`. Accepted values are:
    - `merge`: consecutive chunks with the same tag will be merged into one document for the index.
    - `split`: consecutive chunks with the same tag will be split into separate documents for the index.
    - `both`: consecutive chunks with the same tag will be split into separate documents for the index, and also merged into one document for the index.

#### `populate`[​](https://deploy-preview-8--lyra-docs.netlify.app/plugins/plugin-parsedoc#populate) <a href="#populate" id="populate"></a>

A asynchronous function that takes three arguments. Should be used internally by `populateFromGlob`:

- `db`: the database to populate. Should use Lyra's native `insert` or `insertBatch` methods internally.
- `data`: raw HTML/Markdown string or Buffer.
- `fileType`: a string representing the file type. Accepted values are `html` and `md`.
- `options`: an object containing the following properties:
  - `transformFn` (optional): a function that passes an object as its only argument. It contains the raw HTML/Markdown chunk, tag name, parsed content and html attributes.
  - `mergeStrategy` (optional): a value that defines how to handle consecutive chunks of the same tag. The default value is `merge`. Accepted values are:
    - `merge`: consecutive chunks with the same tag will be merged into one document for the index.
    - `split`: consecutive chunks with the same tag will be split into separate documents for the index.
    - `both`: consecutive chunks with the same tag will be split into separate documents for the index, and also merged into one document for the index.
  - `basePath` (optional): a string representing the base path of the file. This is used to generate the `id` field in the index

## CommonJS Imports

Lyra plugins now ships **ESM** modules by default. This allows us to move faster when providing new features and bug fixes, as well as using the `"exports"` field in `package.json` to provide a better developer experience.

CommonJS imports are still supported, but you'll need to import the plugin from `@lyrasearch/plugin-parsedoc/cjs` instead of `@lyrasearch/plugin-parsedoc`:

```diff
- const { populateFromGlob } = require("@lyrasearch/plugin-parsedoc");
+ const { populateFromGlob } = require("@lyrasearch/plugin-parsedoc/cjs");
