import styled from 'styled-components'
import { Flex } from '@minily/tools'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70px auto 70px;
  margin-top: 25px;
  align-items: center;
  justify-items: auto;
`

const Color = {
  Preview: styled.div`
    height: 30px;
    width: 30px;
    background: ${p => p.color};
    border-radius: 100px;
  `,

  Name: styled.span`
    font-size: 0.9rem;
  `,

  Format: {
    Container: styled.select`
      height: 40px;
      width: 70px;
      list-style-type: none;
      border: none;
      outline: none;
      font-size: 0.9rem;
      background: white;
    `,

    Item: styled.option`
      font-size: 0.8rem;
      min-height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,
  },
}

export { Wrapper, Color }
