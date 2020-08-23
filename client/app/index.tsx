import React, { useState } from 'react'

import { Header, ColorPreview } from '../components'
import { _Color } from '../helpers'

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('hsl(222,65%,52%)')

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
    <>
      <Header onPicker={picker} />
      <ColorPreview
        onGetColor={color => setSelectedColor(color)}
        color={selectedColor}
      />
    </>
  )
}

export default App
