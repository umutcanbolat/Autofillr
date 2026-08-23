import { useSyncExternalStore } from 'react';
import { getPreference, getScheme, setPreference, subscribe } from './colorScheme';

/**
 * @returns {{ scheme: 'dark'|'light', preference: 'system'|'light'|'dark',
 *            setPreference: (next: string) => void }}
 */
export default function useColorScheme() {
  const scheme = useSyncExternalStore(subscribe, getScheme, () => 'light');
  const preference = useSyncExternalStore(subscribe, getPreference, () => 'system');

  return { scheme, preference, setPreference };
}
