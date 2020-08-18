import React from 'react'

import { IColorPreviewProps } from './types'

import { Wrapper } from './styles'

export const ColorPreview: React.FC<IColorPreviewProps> = ({
  color,
  onClick,
}) => <Wrapper color={color} onClick={onClick} />
