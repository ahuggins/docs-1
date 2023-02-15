# Stemming

:::info CommonJS support
The following examples shows how to import Lyra's internals using ESM imports. If you're still using CommonJS, you can import Lyra from `@lyrasearch/lyra/cjs/stemmer` instead of `@lyrasearch/lyra/stemmer`.
:::


By default, Lyra analyzes the input and performs a `stemming` operation, which allows the engine to perform more optimized queries, as well as save indexing space.

:::info what is stemming?
[_Wikipedia_](https://en.wikipedia.org/wiki/Stemming)
In linguistic morphology and information retrieval, stemming is the process of reducing inflected (or sometimes derived) words to their word stem, base, or root form—generally a written word form. The stem need not be identical to the morphological root of the word; it is usually sufficient that related words map to the same stem, even if this stem is not in itself a valid root. Algorithms for stemming have been studied in computer science since the 1960s. Many search engines treat words with the same stem as synonyms as a kind of query expansion, a process called conflation.
:::

By default, Lyra uses **the English language analyzer**, but we can override this behavior by setting the property `defaultLanguage` at database initialization, and importing a custom stemmer:

```javascript
import { create } from "@lyrasearch/lyra";
import { stemmer } from "@lyrasearch/lyra/stemmer/it";

const db = create({
  schema: {
    author: "string",
    quote: "string",
  },
  defaultLanguage: "italian",
  components: {
    tokenizer: {
      stemmingFn: stemmer,
    }
  }
});
```

Right now, Lyra supports 26 languages and stemmers out of the box:

- Arabic
- Armenian
- Bulgarian
- Danish
- Dutch
- English
- Finnish
- French
- German
- Greek
- Hindi
- Hungarian
- Indonesian
- Irish
- Italian
- Nepali
- Norwegian
- Portuguese
- Romanian
- Russian
- Serbian
- Slovenian
- Spanish
- Swedish
- Turkish
- Ukrainian

## Disabling stemming

You can disable stemming by setting `enableStemming: false` while initializing a new Lyra instance:

```javascript
import { create } from "@lyrasearch/lyra";

const db = create({
  schema: {
    author: "string",
    quote: "string",
  },
  defaultLanguage: "italian",
  components: {
    tokenizer: {
      enableStemming: false
    }
  }
});
```
