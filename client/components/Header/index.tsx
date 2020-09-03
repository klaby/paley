import React from 'react'

import { Icon } from '@minily/components'
import { IHeaderProps } from './types'

import DropDown from '../DropDown'

import { Wrapper, Menu, Toggle } from './styles'

const Header: React.FC<IHeaderProps> = ({
  onPicker = () => {},
  onGetMode = () => {},
  onGetSheme = () => {},
}) => (
  <Wrapper>
    <Menu.Options.Container>
      <Menu.Options.Item>
        <DropDown
          defaultValue="solid"
          data={[
            { label: 'Solid', value: 'solid' },
            { label: 'Advanced', value: 'advanced' },
          ]}
          onGetValue={({ value }) => onGetMode(value as string)}
        />
      </Menu.Options.Item>
      <Menu.Options.Item>
        <DropDown
          defaultValue="hex"
          data={[
            { label: 'HEX', value: 'hex' },
            { label: 'RGB', value: 'rgb' },
            { label: 'RGBA', value: 'rgba' },
            { label: 'HSL', value: 'hsl' },
          ]}
          onGetValue={({ value }) => onGetSheme(value as string)}
        />
      </Menu.Options.Item>
    </Menu.Options.Container>
    <Menu.Buttons.Container>
      <Toggle>
        <Icon name="sip" type="fill" size="xs" onClick={onPicker} />
      </Toggle>
    </Menu.Buttons.Container>
  </Wrapper>
)

export default Header
