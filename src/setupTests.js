import '@testing-library/jest-dom/vitest';

// jsdom ships no matchMedia, which the colour-scheme store reads at import.
if (!window.matchMedia) {
  window.matchMedia = (media) => ({
    media,
    matches: false,
    addEventListener: () => {},
    removeEventListener: () => {},
  });
}
