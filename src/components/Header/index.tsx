import React from 'react'

import { Icon } from '@minily/components'
import { IHeaderProps } from './types'

import Select from '../Select'

import { Wrapper, Menu, Toggle } from './styles'

const Header: React.FC<IHeaderProps> = ({ menu, buttons }) => (
  <Wrapper>
    <Menu.Options.Container>
      {menu?.map((option, key) => (
        <Menu.Options.Item key={key}>
          <Select
            defaultValue={option.defaultValue}
            data={option.options}
            onGetValue={option.onChange}
          />
        </Menu.Options.Item>
      ))}
    </Menu.Options.Container>
    <Menu.Buttons.Container>
      {buttons?.map((button, key) => (
        <Toggle key={key}>
          <Icon
            name={button.icon}
            type="fill"
            size="xs"
            onClick={button.onClick}
          />
        </Toggle>
      ))}
    </Menu.Buttons.Container>
  </Wrapper>
)

export default Header
