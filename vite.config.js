import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Build config for the popup UI (index.html).
// `public/` is copied verbatim, which is how manifest.json and the icons land in build/.
export default defineConfig({
  plugins: [react()],
  // The popup is loaded from chrome-extension://<id>/index.html, so all asset
  // references have to be relative rather than rooted at /.
  base: './',
  build: {
    outDir: 'build',
    // The content script writes into the same folder, so neither build may wipe it.
    // `npm run build` and `npm start` both clean beforehand instead.
    emptyOutDir: false,
    // Chrome is the only target, so there is no need to down-level modern syntax.
    target: 'chrome120',
    sourcemap: true,
    // Fewer files means fewer round trips when the popup opens.
    assetsInlineLimit: 8192,
    chunkSizeWarningLimit: 500,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
