---
sidebar_label: Default IDs
sidebar_position: 6
---

# Default IDs

With version `v0.3.1` and below, Lyra would generate a random ID for each document you inserted. This was a good default, but it didn't allow you to use your own IDs.

With `v0.4.0`, Lyra will use the `id` field of your document as the ID. If you don't provide an `id` field, Lyra will generate a random ID for you.

If you have an existing instance of Lyra with a `id` property in the schema definition, make sure that everything works as expected after migrating to `v0.4.0`.

Read more on how to generate custom IDs in the [docs](/usage/insert-data#custom-document-ids).