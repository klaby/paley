import React from 'react'

import { Icon } from '@minily/components'
import { IHeaderProps } from './types'

import { Wrapper, Menu, Toggle } from './styles'

const Header: React.FC<IHeaderProps> = ({ onPicker }) => (
  <Wrapper>
    <Menu.Options.Container>
      <Menu.Options.Item>Solid</Menu.Options.Item>
      <Menu.Options.Item>HSL</Menu.Options.Item>
    </Menu.Options.Container>
    <Menu.Buttons.Container>
      <Toggle>
        <Icon name="sip" type="fill" size="xs" onClick={onPicker} />
      </Toggle>
    </Menu.Buttons.Container>
  </Wrapper>
)

export default Header
