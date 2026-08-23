import React from 'react';
import { PREFERENCES, useColorScheme } from '../themes';
import * as Styled from '../styles';

const ICONS = {
  system: (
    <>
      <path d="M8 .75a7.25 7.25 0 1 1 0 14.5A7.25 7.25 0 0 1 8 .75ZM2.25 8a5.75 5.75 0 1 0 11.5 0 5.75 5.75 0 0 0-11.5 0Z" />
      <path d="M8 2.25a5.75 5.75 0 0 0 0 11.5Z" />
    </>
  ),
  light: (
    <>
      <circle cx="8" cy="8" r="3.25" />
      <path d="M8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0Zm0 13a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13ZM16 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm10.657-5.657a.75.75 0 0 1 0 1.061l-1.06 1.06a.75.75 0 1 1-1.061-1.06l1.06-1.06a.75.75 0 0 1 1.06 0ZM4.464 11.536a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0Zm9.193 2.121a.75.75 0 0 1-1.06 0l-1.061-1.06a.75.75 0 1 1 1.06-1.061l1.061 1.06a.75.75 0 0 1 0 1.061ZM2.343 4.464a.75.75 0 0 1 0-1.06l1.06-1.061a.75.75 0 0 1 1.061 1.06l-1.06 1.061a.75.75 0 0 1-1.061 0Z" />
    </>
  ),
  dark: (
    <path d="M9.598 1.591a.749.749 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786Z" />
  ),
};

const LABELS = {
  system: 'Theme: follow the browser',
  light: 'Theme: light',
  dark: 'Theme: dark',
};

export default function ThemeToggle() {
  const { preference, setPreference } = useColorScheme();

  const next = PREFERENCES[(PREFERENCES.indexOf(preference) + 1) % PREFERENCES.length];

  return (
    <Styled.ThemeToggle
      type="button"
      title={`${LABELS[preference]}. Click to switch to ${next}.`}
      aria-label={`${LABELS[preference]}. Switch to ${next}.`}
      onClick={() => setPreference(next)}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        {ICONS[preference]}
      </svg>
    </Styled.ThemeToggle>
  );
}
