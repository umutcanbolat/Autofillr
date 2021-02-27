# Autofillr.

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/umutcanbolat/Autofillr?label=Latest%20release&logo=github)](https://github.com/umutcanbolat/Autofillr/releases/latest)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jcgfleiagjfjlgdpbignhphpdcbjplco?color=light-green&logo=google-chrome&logoColor=white&style=flat-square)](https://chrome.google.com/webstore/detail/autofillr/jcgfleiagjfjlgdpbignhphpdcbjplco)
![GitHub](https://img.shields.io/github/license/umutcanbolat/Autofillr?logoColor=white&logo=gnu&style=flat-square)

Autofillr is a browser extension that can fill registration forms with randomly but consistently generated data. Consistent here means that the values of the generated fields will be valid between each other. For example, some countries may have date of birth included in national identification numbers. In a such case, Autofillr considers this while generating the data.

## Why?

The intention is to make testing and development of products that has such forms easier. In some products, form validation can be so strict that finding a random valid data becomes a real pain. Especially when you need to do this several times in a day, filling this data to the same form becomes cumbersome and tedious.

So, I felt the need to develop this tool that does the dirty job for me :D

## How?

All the data generation happens locally. So, Autofillr does not send any requests to a remote service or api. Thanks to the libraries like [Faker.js](https://github.com/marak/Faker.js/).

To fill the forms on websites, it uses a list of html ids for each input field.

Here is a showcase on [codesandbox](https://8vc76.csb.app/):

<img src="https://user-images.githubusercontent.com/10065235/109368480-8adcfd00-7899-11eb-85a9-293b67c69688.gif" alt="Autofilr Gif" width="720"/>

## Development
