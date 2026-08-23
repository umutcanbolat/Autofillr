import Dark from './Dark';
import Light from './Light';

const STORAGE_KEY = 'colorScheme';

const query = window.matchMedia('(prefers-color-scheme: dark)');

const listeners = new Set();
const emit = () => listeners.forEach((listener) => listener());

const readStored = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : 'system';
};

let preference = readStored();

const resolve = () => {
  if (preference !== 'system') return preference;
  return query.matches ? 'dark' : 'light';
};

/**
 * The background is written inline, from the same theme object the components
 * read, because `light-dark()` does not reliably recompute when `color-scheme`
 * changes at runtime -- which left the canvas on the old theme while the
 * components had already switched.
 */
const applyToRoot = () => {
  const root = document.documentElement;

  root.style.colorScheme = preference === 'system' ? '' : preference;
  root.style.background = (resolve() === 'dark' ? Dark : Light).background;
};

// Before the first render, so a stored override does not paint twice.
applyToRoot();

// On 'system' the resolved scheme moves, so the root needs rewriting too.
query.addEventListener('change', () => {
  applyToRoot();
  emit();
});

export const PREFERENCES = ['system', 'light', 'dark'];

export const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const getPreference = () => preference;

export const getScheme = () => resolve();

export const setPreference = (next) => {
  preference = PREFERENCES.includes(next) ? next : 'system';

  if (preference === 'system') localStorage.removeItem(STORAGE_KEY);
  else localStorage.setItem(STORAGE_KEY, preference);

  applyToRoot();
  emit();
};
