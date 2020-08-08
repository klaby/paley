import React from 'react'
import { exec } from 'child_process'
import { Icon } from '@minily/components'

import { Wrapper, Button } from './styles'

const Header: React.FC = () => {
  /**
   * @function picker
   *
   * This function performs grim by selecting any part of the screen and choosing
   * colors based on the position.
   */
  const picker = (): void => {
    exec(
      'grim -g "$(slurp -p)" -t ppm - | convert - -format "%[pixel:p{0,0}]" txt:-',
      (error, stdout, syderr) => {
        console.log({ error, stdout, syderr })
      },
    )
  }

  return (
    <Wrapper>
      <Button onClick={picker}>
        <Icon name="sip" type="fill" />
      </Button>
    </Wrapper>
  )
}

export default Header
