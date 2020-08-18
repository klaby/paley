import React from 'react'
import { Icon } from '@minily/components'

import { IHeaderProps } from './types'

import { Wrapper } from './styles'
import { Toggle } from '../Toggle'

export const Header: React.FC<IHeaderProps> = ({ onPicker }) => (
  <Wrapper>
    <Toggle>
      <Icon name="sip" type="fill" onClick={onPicker} />
    </Toggle>
  </Wrapper>
)
