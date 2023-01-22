# Stemming

By default, Lyra analyzes the input and performs a `stemming` operation, which
allows the engine to perform more optimized queries, as well as save indexing
space.

:::info
[_Wikipedia_](https://en.wikipedia.org/wiki/Stemming) In linguistic
morphology and information retrieval, stemming is the process of reducing
inflected (or sometimes derived) words to their word stem, base, or root
form—generally a written word form. The stem need not be identical to the
morphological root of the word; it is usually sufficient that related words map
to the same stem, even if this stem is not in itself a valid root. Algorithms
for stemming have been studied in computer science since the 1960s. Many search
engines treat words with the same stem as synonyms as a kind of query expansion,
a process called conflation.
:::

By default, Lyra uses **the English language analyzer**, but we can override
this behavior by setting the property `defaultLanguage` at database
initialization.

```javascript
import { create } from "@lyrasearch/lyra";
import { stemmer } from "@lyrasearch/lyra/dist/esm/stemmer/lib/it";

const db = create({
  schema: {
    author: "string",
    quote: "string",
  },
  defaultLanguage: "italian",
  components: {
    tokenizer: {
      stemmingFn: stemmer,
    },
  }
});
```

Right now, Lyra supports 23 languages and stemmers out of the box:

- Armenian
- Arabic
- Danish
- Spanish
- English
- Finnish
- French
- German
- Greek
- Hindi
- Hungarian
- Indonesian
- Italian
- Irish
- Dutch
- Nepali
- Norwegian
- Portuguese
- Romanian
- Russian
- Serbian
- Swedish
- Turkish

## Disabling stemming

You can disable stemming by setting `enableStemming: false` while initializing a
new Lyra instance:

```javascript
import { create } from "@lyrasearch/lyra";

const db = create({
  schema: {
    author: "string",
    quote: "string",
  },
  components: {
    tokenizer: {
      enableStemming: false,
    }
  }
});
```
