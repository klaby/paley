import React from 'react'
import { ThemeProvider as Theme } from 'styled-components'

import 'remixicon/fonts/remixicon.css'

const ThemeProvider: React.FC = ({ children }) => {
  const theme = {
    fonts: {
      primary: "'Rubik', sans-serif",
    },
  }

  return <Theme theme={theme}>{children}</Theme>
}

export { ThemeProvider }
export * from './styles'
