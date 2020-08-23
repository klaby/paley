import 'styled-components'

declare global {
  export interface Window {
    eel: {
      picker: () => (cb: (color: string) => void) => void
      set_host(path: string): void
    }
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string
    }
  }
}
