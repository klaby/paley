import React, { useState, useRef, useCallback, useEffect } from 'react'

import { Wrapper, Color } from './styles'

import { ISelectorProps } from './types'

import { _Color } from '../../helpers'

const Selector: React.FC<ISelectorProps> = ({
  color = 'red',
  onGetColor = () => {},
  onCopyColor = () => {},
}) => {
  const colorPreviewRef = useRef<HTMLCanvasElement>(null)

  const [mode, setMode] = useState<'preview' | 'advanced'>('preview')

  /**
   * @function changeMode
   *
   * Switch from solid to advanced preview mode.
   */
  const changeMode = () => setMode(mode === 'preview' ? 'advanced' : 'preview')

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

    if (mode === 'advanced') {
      createGradient(width, height, color)
      createGradient(width, 0, ['rgba(255,255,255,1)', 'rgba(255,255,255,0)'])
      createGradient(0, height, ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'])
    } else {
      createGradient(width, height, color)
    }
  }, [color, mode])

  /**
   * @function getColor
   *
   * Get selected color.
   *
   * @param {MouseEvent<HTMLCanvasElement>} e
   */
  const copyColor = () => {
    if (mode === 'preview') {
      onCopyColor(color)
    }
  }

  /**
   * @function getAdvancedColor
   *
   * @param {React.MouseEvent<HTMLCanvasElement>} e
   */
  const getAdvancedColor = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    const ctx = colorPreviewRef.current.getContext('2d')

    const imageData = ctx.getImageData(e.clientX, e.clientY, 1, 1).data

    const previewColor = _Color
      .tinycolor(`rgb(${imageData[0]},${imageData[1]},${imageData[2]})`)
      .toHslString()

    colorPreviewRef.current.onmouseup = () => onGetColor(previewColor)
  }

  useEffect(() => {
    initColorPreview()
  }, [initColorPreview])

  return (
    <Wrapper>
      <Color.Preview
        ref={colorPreviewRef}
        onClick={copyColor}
        onMouseMove={getAdvancedColor}
        onDoubleClick={changeMode}
      />
      <Color.Name>{color}</Color.Name>
    </Wrapper>
  )
}

export default Selector
