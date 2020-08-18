import styled from 'styled-components'
import { Flex } from '@minily/tools'

const Toggle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  ${Flex.container('center', 'center')};
`

export { Toggle }
