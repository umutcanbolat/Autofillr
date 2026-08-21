import { defineConfig } from 'vite';

// The content script has to be a single self-contained IIFE: MV3 injects it as a
// classic script, so it cannot use ES module syntax or load sibling chunks.
export default defineConfig({
  build: {
    outDir: 'build',
    emptyOutDir: false,
    target: 'chrome120',
    sourcemap: true,
    lib: {
      entry: 'src/contentScripts/content.js',
      formats: ['iife'],
      name: 'autofillr',
      fileName: () => 'content.js',
    },
  },
});
