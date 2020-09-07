import React, { useRef, useCallback, useEffect } from 'react'

import { Wrapper, Color } from './styles'

import { ISelectorProps } from './types'

import { _Color } from '../../helpers'

const Selector: React.FC<ISelectorProps> = ({
  mode = 'solid',
  colors = { solid: '', advanced: '' },
  onGetColor = () => {},
}) => {
  const colorPreviewRef = useRef<HTMLCanvasElement>(null)

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
    const ctx = colorPreviewRef.current?.getContext('2d')
    const { width, height } = colorPreviewRef.current as HTMLCanvasElement

    if (Array.isArray(colors)) {
      const gradient = ctx!.createLinearGradient(0, 0, x1, y1)
      colors.forEach((c, i) => gradient.addColorStop(i, c))
      ctx!.fillStyle = gradient
      ctx!.fillRect(0, 0, width, height)
    } else {
      ctx!.fillStyle = colors
      ctx!.fillRect(0, 0, width, height)
    }
  }

  /**
   * @function initColorPreview
   *
   * Initializes the color selection component.
   */
  const initColorPreview = useCallback(() => {
    const { width, height } = colorPreviewRef.current as HTMLCanvasElement

    if (mode === 'advanced') {
      createGradient(width, height, colors.solid)
      createGradient(width, 0, ['rgba(255,255,255,1)', 'rgba(255,255,255,0)'])
      createGradient(0, height, ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'])
    } else {
      createGradient(width, height, colors.solid)
    }
  }, [colors, mode])

  /**
   * @function getAdvancedColor
   *
   * @param {React.MouseEvent<HTMLCanvasElement>} e
   */
  const getAdvancedColor = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    const ctx = colorPreviewRef.current?.getContext('2d')

    const imageData = ctx?.getImageData(e.clientX, e.clientY, 1, 1).data

    if (imageData) {
      const previewColor = _Color
        .tinycolor(`rgb(${imageData[0]},${imageData[1]},${imageData[2]})`)
        .toHslString()

      colorPreviewRef.current!.onmouseup = () => onGetColor(previewColor)
    }
  }

  useEffect(() => {
    initColorPreview()
  }, [initColorPreview])

  return (
    <Wrapper>
      <Color.Preview ref={colorPreviewRef} onMouseMove={getAdvancedColor} />
      <Color.Name>{colors[mode]}</Color.Name>
    </Wrapper>
  )
}

export default Selector
