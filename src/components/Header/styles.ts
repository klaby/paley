import styled from 'styled-components'
import { Flex } from '@minily/tools'

const Wrapper = styled.header`
  width: 100%;
  height: 100%;
  background: white;
  padding: 0 7px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  user-select: none;
`

const Menu = {
  Options: {
    Container: styled.ul`
      list-style-type: none;
      ${Flex.container('flex-start', 'center')};
    `,

    Item: styled.li`
      padding: 0 10px;
      font-weight: 400;
      font-size: 0.77rem;
      font-weight: 400;
      width: 50px;
      color: rgba(93, 100, 108, 0.79);

      :first-child {
        padding-left: 0;
      }
    `,
  },

  Buttons: {
    Container: styled.div`
      ${Flex.container('flex-end', 'center')}
    `,
  },
}

const Toggle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  ${Flex.container('flex-end', 'center')};

  i {
    cursor: pointer;
  }
`

export { Wrapper, Menu, Toggle }
