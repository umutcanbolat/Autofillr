# Autofillr.

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/umutcanbolat/Autofillr?label=latest%20release&logo=github&style=flat-square)](https://github.com/umutcanbolat/Autofillr/releases/latest)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jcgfleiagjfjlgdpbignhphpdcbjplco?color=light-green&logo=google-chrome&logoColor=white&style=flat-square)](https://chrome.google.com/webstore/detail/autofillr/jcgfleiagjfjlgdpbignhphpdcbjplco)
[![License](https://img.shields.io/github/license/umutcanbolat/Autofillr?logoColor=white&logo=gnu&style=flat-square)](LICENSE)
[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-fe5196.svg?style=flat-square)](https://conventionalcommits.org)

A browser extension that fills registration forms with random but _consistent_ data — the generated fields stay valid against each other. Where a country encodes the date of birth in its national identification number, for instance, Autofillr makes the two agree.

The point is to take the pain out of testing forms with strict validation, which otherwise means hand-crafting valid data several times a day.

Everything is generated locally: no requests to any remote service, and no runtime data-generation library. The names are a small table in [src/utils/names.js](src/utils/names.js); the rest is derived from them. Forms are matched via [the HTML autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).

Example form to try it on: [codesandbox](https://8vc76.csb.app/)

<img src="https://user-images.githubusercontent.com/10065235/109368480-8adcfd00-7899-11eb-85a9-293b67c69688.gif" alt="Autofilr Gif" width="720"/>

## Development

Requires Node.js 24 or newer, the active LTS. That is what CI builds on.

```sh
npm install
npm start
```

`npm start` watch-builds both parts into `build/`: the **popup**, a React app bundled with [Vite](https://vite.dev/), and the **content script** ([src/contentScripts/content.js](src/contentScripts/content.js)), which fills the inputs when the popup sends it data. Point Chrome at `build/` to [load it unpacked](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked). Changes need the reload button on the extension card; the popup reloads on its own when reopened.

| Command          | What it does                                                                   |
| ---------------- | ------------------------------------------------------------------------------ |
| `npm start`      | Watch-build the popup and the content script                                   |
| `npm run build`  | Production build into `build/`                                                 |
| `npm test`       | Run the test suite ([Vitest](https://vitest.dev/))                             |
| `npm run lint`   | Lint with ESLint                                                               |
| `npm run format` | Format with Prettier                                                           |
| `npm run commit` | Commit via [conventional commits](https://www.conventionalcommits.org/) prompt |

To add a country, drop a module exporting `generate()` into [src/conf](src/conf) and add one line to [src/conf/index.js](src/conf/index.js).

### Popup start-up time

The popup is a local page, so everything it needs must be cheap to parse. Two choices are deliberate:

- Fonts are bundled (`@fontsource`) rather than fetched from Google Fonts, which put a render-blocking round trip in front of every popup open.
- Country configs load through dynamic `import()`, keeping the ~300 kB municipality table in `codice-fiscale-js` — needed only for the Italian codice fiscale — out of the chunk that runs before first paint.

## Releasing

Triggering the [release action](https://github.com/umutcanbolat/Autofillr/actions/workflows/release.yml) does the rest: builds, bumps the version in `package.json` and `manifest.json`, generates the changelog from the commits since the last tag ([Conventional Changelog](https://github.com/conventional-changelog)), commits and tags as `chore(release): v0.1.0`, pushes, and creates a GitHub release with the packed extension attached.

TODO: upload the package to the Chrome Web Store and submit for review.

## License

Licensed under the GNU General Public License 3 or later (GPL-3.0-or-later). See [LICENSE](LICENSE).
