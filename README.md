# Autofillr.

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/umutcanbolat/Autofillr?label=latest%20release&logo=github&style=flat-square)](https://github.com/umutcanbolat/Autofillr/releases/latest)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jcgfleiagjfjlgdpbignhphpdcbjplco?color=light-green&logo=google-chrome&logoColor=white&style=flat-square)](https://chrome.google.com/webstore/detail/autofillr/jcgfleiagjfjlgdpbignhphpdcbjplco)
[![License](https://img.shields.io/github/license/umutcanbolat/Autofillr?logoColor=white&logo=gnu&style=flat-square)](LICENSE)
[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-fe5196.svg?style=flat-square)](https://conventionalcommits.org)

Autofillr is a browser extension that can fill registration forms with randomly but consistently generated data. Consistent here means that the values of the generated fields will be valid between each other. For example, some countries may have date of birth included in national identification numbers. In a such case, Autofillr considers this while generating both fields.

## Why?

The intention is to make testing and development of products that have such forms easier. In some products, form validation can be so strict that finding random valid data becomes a real pain. Especially when you need to do this several times in a day, filling this data into the same form becomes cumbersome and tedious.

So, I felt the need to develop this tool that does the dirty job for me :D

## How?

All the data generation happens locally. So, Autofillr does not send any requests to a remote service or api. Thanks to the libraries like [Faker.js](https://github.com/marak/Faker.js/).

To fill in the forms on websites, it uses a list of html ids for each input field.

Here is an example form that Autofillr can fill in: [codesandbox](https://8vc76.csb.app/)

<img src="https://user-images.githubusercontent.com/10065235/109368480-8adcfd00-7899-11eb-85a9-293b67c69688.gif" alt="Autofilr Gif" width="720"/>

## Development

The project consists of 2 parts.

- UI: The pop-up that users can interact with. This is a very simple `create react app` project.
- Content script: This basically fills the form inputs on any web page when UI sends a message with the generated data. See [src/contentScripts/content.js](src/contentScripts/content.js)

To start the project in development mode, just run `yarn start`. This will watch both the UI project and the content script to copy them into the build folder when a change is made. Then you can point the build folder in chrome to load the unpacked extension.

These 3 steps from chrome developer documentation explain how to load an unpacked extension: https://developer.chrome.com/docs/extensions/mv2/getstarted/#manifest

To make commits complying with [conventional commits](https://www.conventionalcommits.org/), use `yarn commit`. This helps us in creating changelog and semantic versioning.

## Releasing

The release process is fully automated. So, triggering the [release action](https://github.com/umutcanbolat/Autofillr/actions/workflows/release.yml);

- Builds the project.
- Updates the version number both in package.json and manifest.json.
- Generates a changelog based on the latest commits. (See [Conventional Changelog](https://github.com/conventional-changelog))
- Commits these changes with a message like `chore(release): v0.1.0` and creates a new tag with this new version number.
- Pushes all these changes upstream.
- Creates a new release in Github Releases and attaches the packed extension files to it.
- TODO: Uploads the packed extension to chrome dev store and applies for a review.

## License

This project is licensed under the GNU General Public License 3 or later (GPL-3.0-or-later). See the [LICENSE](LICENSE) file for details.
