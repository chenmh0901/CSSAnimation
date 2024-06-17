export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

export function getBrowserDefaultTheme(): ThemeMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeMode.Dark : ThemeMode.Light
}

export function getLocalTheme(): ThemeMode {
  return localStorage.getItem('theme') as ThemeMode
}

export function setLocalTheme(theme: ThemeMode) {
  localStorage.setItem('theme', theme)
}
