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
    height: 20px;

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
    left: 70px;
    height: 150px;
    transition: all 0.3s;
    margin-bottom: 20px;
    background: linear-gradient(180deg, transparent, black 98%),
      linear-gradient(110deg, transparent, ${p => p.color} 80%),
      linear-gradient(140deg, transparent, white);

    :hover {
      cursor: crosshair;
    }
  `,
}

export { Selector }
