import React, { useRef } from 'react'

import { Selector } from './styles'

import { _Color } from '../../helpers'

import { IColorPreviewProps } from './types'

export const ColorPreview: React.FC<IColorPreviewProps> = ({
  onGetColor = () => {},
  color,
}) => {
  const colorPreviewRef = useRef<HTMLCanvasElement>(null)
  const rangeRef = useRef<HTMLInputElement>(null)

  /**
   * @function getRangeColor
   *
   * Get HSL color from the input range.
   *
   * @param {string} value
   */
  const getRangeColor = (value: string): void => {
    rangeRef.current.onmouseup = () => onGetColor(_Color.getHsl(Number(value)))
  }

  return (
    <>
      <Selector.ColorPreview ref={colorPreviewRef} color={color} />
      <Selector.Range
        ref={rangeRef}
        min={0}
        max={360}
        value={_Color.tinycolor(color).toHsl().h}
        onChange={e => getRangeColor((e.target as HTMLInputElement).value)}
      />
    </>
  )
}
