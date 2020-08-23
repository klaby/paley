import React from 'react'

import { Icon } from '@minily/components'
import { IColorPreview } from './types'

import { Wrapper, Color } from './styles'

export const ColorPreview: React.FC<IColorPreview> = ({ color }) => (
  <Wrapper>
    <Color.Preview color={color} />
    <Color.Name>{color}</Color.Name>
    <Color.Format.Container>
      {['RGB', 'HEX', 'HSL'].map(type => (
        <Color.Format.Item key={type}>{type}</Color.Format.Item>
      ))}
    </Color.Format.Container>
  </Wrapper>
)
