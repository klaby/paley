import styled from 'styled-components'
import { Flex } from '@minily/tools'

import { _Color } from '../../helpers'

const Selector = {
  Range: styled.input.attrs(() => ({ type: 'range' }))`
    width: 100%;
    appearance: none;
    background: transparent;
    border: none;
    outline: 0;
    height: 15px;

    ${Flex.container()};
    background: -webkit-linear-gradient(
      left,
      ${_Color.makeHslScheme(10).toString()}
    );

    ::-webkit-slider-thumb {
      appearance: none;
      background: #1c1d27;
      height: 32px;
      width: 3px;
      cursor: ew-resize;
    }
  `,

  ColorPreview: styled.canvas`
    height: 120px;
    width: 100%;
    transition: all 0.3s;
    margin-bottom: 15px;

    :hover {
      cursor: crosshair;
    }
  `,
}

export { Selector }
