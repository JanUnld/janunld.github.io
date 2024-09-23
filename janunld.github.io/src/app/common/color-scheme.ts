import { InjectionToken, Signal, signal } from '@angular/core';

export type ColorScheme = 'dark' | 'light';

export const COLOR_SCHEME = new InjectionToken<Signal<ColorScheme>>(
  'COLOR_SCHEME',
  {
    providedIn: 'root',
    factory: () => {
      const colorSchemeSignal = signal<ColorScheme>('light');
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const setColorScheme = () =>
        colorSchemeSignal.set(mediaQuery.matches ? 'dark' : 'light');

      mediaQuery.addEventListener('change', (event) => setColorScheme());
      setColorScheme();

      return colorSchemeSignal;
    },
  },
);
