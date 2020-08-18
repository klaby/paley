import React, { useState } from 'react'
import copy from 'copy-to-clipboard'

import { ColorPreview, Header } from '../components'

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('#3867d6')

  /**
   * @function picker
   *
   * This function performs grim by selecting any part of the screen and choosing
   * colors based on the position.
   */
  const picker = (): void => {
    window.eel.picker()((color: string) =>
      setSelectedColor(color.split(' ')[7]),
    )
  }

  return (
    <>
      <Header onPicker={picker} />
      <ColorPreview onClick={() => copy(selectedColor)} color={selectedColor} />
    </>
  )
}

export default App
