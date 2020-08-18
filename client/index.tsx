import React from 'react'
import { render } from 'react-dom'

import { GlobalStyle } from './theme'
import App from './app'

window.eel.set_host('ws://localhost:8080')

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
)
