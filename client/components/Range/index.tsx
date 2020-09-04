import React, { useRef, useContext } from 'react'

import { IRangeProps } from './types'

import { Wrapper, Selector } from './styles'

import { PickerContext } from '../../store'

import { _Color } from '../../helpers'

const Range: React.FC<IRangeProps> = () => {
  const { state, actions } = useContext(PickerContext)

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

    rangeRef.current.onmouseup = () =>
      actions.setRangerColor(_Color.tinycolor(rangeColor).toHexString())
  }

  return (
    <Wrapper>
      <Selector.Container>
        <Selector.Label>Colors</Selector.Label>
        <Selector.Range
          ref={rangeRef}
          min={0}
          max={360}
          value={_Color.tinycolor(state.colors.solid).toHsl().h}
          onChange={getRangeColor}
        />
      </Selector.Container>
    </Wrapper>
  )
}

export default Range
