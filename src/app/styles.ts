import styled from 'styled-components'

import { HEIGHT, WIDTH } from '../shared/constants'

const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  min-height: ${HEIGHT}px;
  min-width: ${WIDTH}px;
  display: grid;
  grid-template-rows: 50px 350px;
`

const Container = {
  Header: styled.div`
    position: relative;
  `,

  Main: styled.main`
    display: grid;
    grid-template-rows: 1fr 1fr;
  `,
}

export { Wrapper, Container }
