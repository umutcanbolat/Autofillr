module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
    requireBranch: 'master',
    requireCommits: 'true',
    tagName: 'v${version}',
  },
  npm: {
    publish: false,
  },
  github: {
    release: true,
    assets: ['dist/**/*.zip'],
    releaseName: 'v${version}',
    releaseNote: 'sudo ./tools/generate-release-note.sh',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'angular',
      infile: 'CHANGELOG.md',
    },
    '@release-it/bumper': {
      out: {
        file: 'public/manifest.json',
      },
    },
  },
  hooks: {
    'before:github:release': 'sudo ./tools/pack-chromium.sh v${version}',
  },
};
