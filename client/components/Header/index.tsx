import React, { useContext } from 'react'

import { Icon } from '@minily/components'
import { IHeaderProps } from './types'

import { PickerContext, TMode, TSchemeColor } from '../../store'

import DropDown from '../DropDown'

import { Wrapper, Menu, Toggle } from './styles'

const Header: React.FC<IHeaderProps> = () => {
  const { actions } = useContext(PickerContext)

  return (
    <Wrapper>
      <Menu.Options.Container>
        <Menu.Options.Item>
          <DropDown
            defaultValue="solid"
            data={[
              { label: 'Solid', value: 'solid' },
              { label: 'Advanced', value: 'advanced' },
            ]}
            onGetValue={({ value }) => actions.changeMode(value as TMode)}
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
            onGetValue={({ value }) =>
              actions.changeSchemeColor(value as TSchemeColor)
            }
          />
        </Menu.Options.Item>
      </Menu.Options.Container>
      <Menu.Buttons.Container>
        <Toggle>
          <Icon name="sip" type="fill" size="xs" onClick={actions.picker} />
        </Toggle>
      </Menu.Buttons.Container>
    </Wrapper>
  )
}

export default Header
