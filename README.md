# Autofillr.

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/umutcanbolat/Autofillr?label=latest%20release&logo=github&style=flat-square)](https://github.com/umutcanbolat/Autofillr/releases/latest)
[![Chrome Web Store](https://img.shields.io/badge/chrome%20web%20store-install-4285F4?logo=googlechrome&logoColor=white&style=flat-square)](https://chromewebstore.google.com/detail/autofillr/jcgfleiagjfjlgdpbignhphpdcbjplco)
[![License](https://img.shields.io/github/license/umutcanbolat/Autofillr?logoColor=white&logo=gnu&style=flat-square)](LICENSE)
[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-fe5196.svg?style=flat-square)](https://conventionalcommits.org)

A browser extension that fills registration forms with random but _consistent_ data — the generated fields stay valid against each other. The email comes from the name, the national identification number encodes the date of birth, and the postcode, city and phone area code all belong to the same place.

The point is to take the pain out of testing forms with strict validation, which otherwise means hand-crafting valid data several times a day.

Everything is generated inside the extension: no requests to any remote service, no account, nothing collected. Fields are matched via [the HTML autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete). Text fields, text areas, and matching dropdown options are filled.

[Install from the Chrome Web Store](https://chromewebstore.google.com/detail/autofillr/jcgfleiagjfjlgdpbignhphpdcbjplco), then try it on the [test form](https://umutcanbolat.github.io/Autofillr/).

<img src="chrome-web-store/img/1.png" alt="Autofillr filling a registration form with consistent Italian test data" width="720" />

## Development

Requires Node.js 24 or newer.

```sh
npm install
npm start
```

`npm start` watch-builds the extension into `build/`; point Chrome at that folder to [load it unpacked](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked).

| Command          | What it does                                                                   |
| ---------------- | ------------------------------------------------------------------------------ |
| `npm start`      | Watch-build into `build/`                                                      |
| `npm run build`  | Production build                                                               |
| `npm test`       | Run the test suite                                                             |
| `npm run lint`   | Lint with ESLint                                                               |
| `npm run format` | Format with Prettier                                                           |
| `npm run commit` | Commit via [conventional commits](https://www.conventionalcommits.org/) prompt |

To add a country, drop a module exporting `generate()` into [src/conf](src/conf) and add one line to [src/conf/index.js](src/conf/index.js).

The test form is [docs/](docs), served by GitHub Pages from `master`.

## Releasing

Triggering the [release action](https://github.com/umutcanbolat/Autofillr/actions/workflows/release.yml) does the rest: it builds, bumps the version, writes the changelog from the commits since the last tag, tags, and publishes a GitHub release with the packed extension attached.

TODO: upload the package to the Chrome Web Store and submit for review.

## License

Licensed under the GNU General Public License 3 or later (GPL-3.0-or-later). See [LICENSE](LICENSE).
