import styled from 'styled-components'
import { Flex } from '@minily/tools'

const Wrapper = styled.header`
  height: 40px;
  background: #f5f5f5;
  padding: 0 5px;
  ${Flex.container('flex-end', 'center')};
`

export { Wrapper }
