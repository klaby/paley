import styled from 'styled-components'
import { Flex } from '@minily/tools'

const Header = styled.div`
  padding: 5px;
  ${Flex.container()};
`

const List = {
  Wrapper: styled.div`
    position: absolute;
    z-index: 100;
  `,

  Container: styled.ul`
    padding: 0;
    padding: 5px;
    background: #ffffff;
    box-sizing: border-box;
    max-height: 100px;
    overflow: auto;
    margin-top: 10px;

    ::-webkit-scrollbar {
      width: 0;
    }

    &:first-child {
      padding-top: 0.8em;
    }
  `,

  Item: styled.li`
    list-style: none;
    margin-bottom: 0.8em;
    font-size: 0.75rem;

    &:hover {
      color: #fd9e46;
    }
  `,
}

export { Header, List }
