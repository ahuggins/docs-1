---
sidebar_label: Introduction
sidebar_position: 1
---

# Getting Started with Lyra

:::caution migrating to v0.4.x
Version `v0.4.0` is a major release that introduces breaking changes. Please read the [migration guide](/migration-guide/breaking-changes) before upgrading.
:::

Lyra is an **immutable, runtime-agnostic, edge, and in-memory full-text search engine** that works both on client and server.

Through implementing an optimized prefix tree and some clever tweaks, Lyra can perform searches through millions of entries in **microseconds**.

<div className="youtube">
  <iframe 
    title="Embedded youtube"
    src="https://www.youtube.com/embed/42sMkbGLlh4" frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
  />
</div>

## Requirements

A JavaScript runtime is the **only** requirement. Lyra has been designed to work on any runtime and has no dependencies.

## Installation

You can install Lyra using npm, yarn, pnpm:

```bash
npm install @lyrasearch/lyra
```

```bash
yarn add @lyrasearch/lyra
```

```bash
pnpm add @lyrasearch/lyra
```

Or import it directly in a browser module:

```html
<html>
  <body>
    <script type="module">
      import { create, search, insert } from "https://unpkg.com/@lyrasearch/lyra@latest/dist/index.js";

      // ...
    </script>
  </body>
</html>
```
