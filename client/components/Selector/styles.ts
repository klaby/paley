import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: grid;
  grid-template-rows: auto 40px;
  align-items: center;
  justify-items: center;
`

const Color = {
  Preview: styled.canvas`
    background: orange;
    height: 135px;
    width: 100%;
    cursor: pointer;
    user-select: none;
  `,

  Name: styled.span`
    font-size: 0.85rem;
    color: rgba(28, 29, 39, 0.86);
  `,
}

export { Wrapper, Color }
