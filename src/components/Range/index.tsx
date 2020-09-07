import React, { useRef } from 'react'

import { IRangeProps } from './types'

import { Wrapper, Selector } from './styles'

import { _Color } from '../../helpers'

const Range: React.FC<IRangeProps> = ({
  color = '',
  onGetColor = () => {},
}) => {
  const rangeRef = useRef<HTMLInputElement>(null)

  /**
   * @function getRangeColor
   *
   * Get HSL color from the input range.
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   */
  const getRangeColor = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const rangeColor = _Color.getHsl(Number(e.target.value))

    rangeRef.current!.onmouseup = () =>
      onGetColor(_Color.tinycolor(rangeColor as string).toHexString())
  }

  return (
    <Wrapper>
      <Selector.Container>
        <Selector.Label>Colors</Selector.Label>
        <Selector.Range
          ref={rangeRef}
          min={0}
          max={360}
          value={_Color.tinycolor(color).toHsl().h}
          onChange={getRangeColor}
        />
      </Selector.Container>
    </Wrapper>
  )
}

export default Range
