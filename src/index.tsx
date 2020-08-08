import React from 'react'
import { render } from 'react-dom'

import App from './app'
import { GlobalStyle } from './theme'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  mainElement,
)
