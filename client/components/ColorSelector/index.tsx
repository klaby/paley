import React, { useRef, useEffect, useCallback } from 'react'

import { Selector } from './styles'

import { _Color } from '../../helpers'

import { IColorPreviewProps } from './types'

export const ColorSelector: React.FC<IColorPreviewProps> = ({
  onGetRangeColor = () => {},
  onGetPreviewColor = () => {},
  color,
}) => {
  const colorPreviewRef = useRef<HTMLCanvasElement>(null)
  const rangeRef = useRef<HTMLInputElement>(null)

  /**
   * @function createGradient
   *
   * Creates a gradient scheme for the canvas element.
   *
   * @param {number} x1
   * @param {number} y1
   * @param {string[] | string} colors
   */
  const createGradient = (
    x1: number,
    y1: number,
    colors: string[] | string,
  ) => {
    const ctx = colorPreviewRef.current.getContext('2d')
    const { width, height } = colorPreviewRef.current

    if (Array.isArray(colors)) {
      const gradient = ctx.createLinearGradient(0, 0, x1, y1)
      colors.forEach((c, i) => gradient.addColorStop(i, c))
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    } else {
      ctx.fillStyle = colors
      ctx.fillRect(0, 0, width, height)
    }
  }

  /**
   * @function initColorPreview
   *
   * Initializes the color selection component.
   */
  const initColorPreview = useCallback(() => {
    const { width, height } = colorPreviewRef.current

    createGradient(width, height, color)
    createGradient(width, 0, ['rgba(255,255,255,1)', 'rgba(255,255,255,0)'])
    createGradient(0, height, ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'])
  }, [color])

  /**
   * @function getPreviewColor
   *
   * @param {React.MouseEvent<HTMLCanvasElement>} e
   */
  const getPreviewColor = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    const ctx = colorPreviewRef.current.getContext('2d')

    const imageData = ctx.getImageData(e.clientX, e.clientY, 1, 1).data

    const previewColor = _Color
      .tinycolor(`rgb(${imageData[0]},${imageData[1]},${imageData[2]})`)
      .toHslString()

    colorPreviewRef.current.onmouseup = () => onGetPreviewColor(previewColor)
  }

  /**
   * @function getRangeColor
   *
   * Get HSL color from the input range.
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   */
  const getRangeColor = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const rangeColor = _Color.getHsl(Number(e.target.value))

    rangeRef.current.onmouseup = () => onGetRangeColor(rangeColor)
  }

  useEffect(() => {
    initColorPreview()
  }, [initColorPreview])

  return (
    <>
      <Selector.ColorPreview
        ref={colorPreviewRef}
        color={color}
        onMouseMove={getPreviewColor}
      />
      <Selector.Range
        ref={rangeRef}
        min={0}
        max={360}
        value={_Color.tinycolor(color).toHsl().h}
        onChange={getRangeColor}
      />
    </>
  )
}
