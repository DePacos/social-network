export const manageThemeMode = {
  get: () => localStorage.getItem('themeMode') || 'dark',
  set: (themeMode: 'dark' | 'light') => localStorage.setItem('themeMode', themeMode),
}
