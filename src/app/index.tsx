import React, { useState } from 'react'
import { clipboard } from 'electron'
import { exec } from 'child_process'

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
    exec(
      'grim -g "$(slurp -p)" -t ppm - | convert - -format "%[pixel:p{0,0}]" txt:-',
      (error, stdout) => {
        if (error) return

        if (stdout) {
          setSelectedColor(stdout.split(' ')[7])
        }
      },
    )
  }

  /**
   * @function copy
   *
   * Copy selected color.
   *
   * @param {string} color
   */
  const copy = (color: string): void => clipboard.writeText(color)

  return (
    <>
      <Header onPicker={picker} />
      <ColorPreview onClick={() => copy(selectedColor)} color={selectedColor} />
    </>
  )
}

export default App
