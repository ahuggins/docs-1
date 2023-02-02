---
description: >-
  The plugin-astro plugin allows you to index the content of your Astro websites
  and offer text search to your visitors.
---

# Astro plugin

<h3 className="plugin-description">{frontMatter.description}</h3>

## Installation

You can install the plugin using any major Node.js/Bun package manager:

```bash title="Using npm"
npm install --save @lyrasearch/plugin-astro
```

```bash title="Using yarn"
yarn add @lyrasearch/plugin-astro
```

```bash title="Using pnpm"
pnpm add @lyrasearch/plugin-astro
```

## Usage

There are two main aspects to consider when using this plugin:

- DB generation
- Loading DBs & performing searches

```javascript
// In `astro.config.mjs`
import lyra from "@lyrasearch/plugin-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    lyra({
      // We can generate more than one DB, with different configurations
      mydb: {
        // Required. Only pages matching this path regex will be indexed
        pathMatcher: /blog\/[0-9]{4}\/[0-9]{2}\/[0-9]{2}\/.+$/,

        // Optional. 'english' by default
        language: "spanish",

        // Optional. ['body'] by default. Use it to constraint what is used to
        // index a page.
        contentSelectors: ["h1", "main"],
      },
    }),
  ],
});
```

When running the `astro build` command, a new DB file will be persisted in the `dist/assets` directory. For the particular case of this example, it will be saved in the file `dist/assets/lyraDB_mydb.json`.

## Loading the DB on client-side[​](https://docs.lyrasearch.io/plugins/plugin-astro#loading-the-db-on-client-side) <a href="#loading-the-db-on-client-side" id="loading-the-db-on-client-side"></a>

To use the generated DBs in your pages, you can include a script in your `<head>` section, as the following one:

```html
<head>
  <!-- Other stuff -->
  <script>
    // Astro will do the job of bundling everything for you
    import { getLyraDB, search } from "@lyrasearch/plugin-astro/client"

    // We load the DB that we generated at build time, this is an asynchronous
    // operation, so we must either await, or rely on `.then` calls.
    const db = await getLyraDB('mydb')

    // Now we can search inside our DB. Of course, feel free to use it in more
    // interesting ways.
    console.log('Search Results')
    console.log(await search(db, { term: 'mySearchTerm' }))
  </script>
</head>
```

For now, the plugin only expose load & search functionality on the client side, but we might expose other Lyra features as soon as we stabilise some internal details and public APIs.
