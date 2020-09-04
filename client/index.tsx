import React from 'react'
import { render } from 'react-dom'

import { GlobalStyle, ThemeProvider } from './theme'
import { PickerProvider } from './store'
import App from './app'

window.eel.set_host('ws://localhost:8080')

render(
  <ThemeProvider>
    <GlobalStyle />
    <PickerProvider>
      <App />
    </PickerProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)
