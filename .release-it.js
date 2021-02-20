module.exports = {
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'angular',
      //   infile: 'CHANGELOG.md',
    },
    '@release-it/bumper': {
      out: {
        file: 'public/manifest.json',
      },
    },
  },
};
