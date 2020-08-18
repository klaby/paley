export {}

declare global {
  interface Window {
    eel: {
      picker: () => (cb: (color: string) => void) => void
      set_host(path: string): void
    }
  }
}
