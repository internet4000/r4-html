Generates static HTML files for every Radio4000 channel. Just an experiment..

Here's how it works.

Run `npm install` once for the [11ty Eleventy](https://www.11ty.dev/docs/) static site generator.

Then, you can either:

- `make` to fetch all channels and build the site into the `_site` folder
- `make seed start` for developing

To generate the pages from JSON with Eleventy, we have:

1. `_data/channels.js` that serializes `raw-channels.json`. Available as `{{channels}}` in templates
2. `channels.liquid` that uses the Paginate feature to generate the pages
