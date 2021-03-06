module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
    requireBranch: 'master',
    requireCommits: 'true',
  },
  npm: {
    publish: false,
  },
  github: {
    release: true,
    assets: ['dist/**/*.zip'],
    releaseName: 'v${version}',
    releaseNotes: './tools/generate-release-note.sh',
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
    'after:bump': 'yarn build',
    'before:github:release': './tools/pack-chromium.sh v${version}',
  },
};
