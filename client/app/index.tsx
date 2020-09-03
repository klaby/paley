import React, { useState } from 'react'
import copy from 'copy-to-clipboard'

import { Header, Selector, Range } from '../components'
import { _Color } from '../helpers'

import { Wrapper, Container } from './styles'

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('hsl(254,91%,62%)')

  const [sheme, setScheme] = useState('hex')

  const [mode, setMode] = useState('solid')

  /**
   * @function picker
   *
   * This function performs grim by selecting any part of the screen and choosing
   * colors based on the position.
   */
  const picker = (): void => {
    window.eel.picker()((color: string) => {
      setSelectedColor(_Color.tinycolor(color.split(' ')[7]).toHslString())
    })
  }

  return (
    <Wrapper>
      <Container.Header>
        <Header onPicker={picker} onGetSheme={setScheme} onGetMode={setMode} />
      </Container.Header>
      <Container.Main>
        <Selector
          color={selectedColor}
          mode={mode}
          scheme={sheme}
          onGetColor={setSelectedColor}
          onCopyColor={copy}
        />
        <Range color={selectedColor} onGetColor={setSelectedColor} />
      </Container.Main>
    </Wrapper>
  )
}

export default App
