export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

export function getBrowserDefaultTheme(): ThemeMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeMode.Dark : ThemeMode.Light
}

export function getLocalTheme(): ThemeMode | null {
  return localStorage.getItem('theme') as ThemeMode | null
}

export function setLocalTheme(theme: ThemeMode): void {
  localStorage.setItem('theme', theme)
}
