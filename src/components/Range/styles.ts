import styled from 'styled-components'
import { Flex } from '@minily/tools'
import { _Color } from '../../helpers'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  padding: 0 7px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const Selector = {
  Container: styled.div`
    display: grid;
    grid-template-rows: 30px auto;
  `,

  Label: styled.span`
    font-size: 0.77rem;
    font-weight: 400;
    color: rgba(93, 100, 108, 0.79);
    user-select: none;
  `,

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
      height: 25px;
      width: 2.5px;
      cursor: ew-resize;
    }
  `,
}

const InputRange = styled.input.attrs(() => ({ type: 'range' }))`
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
`
export { Wrapper, InputRange, Selector }
