import React, { useContext } from 'react'

import { Header, Selector, Range } from '../components'

import { PickerContext, TMode, TSchemeColor } from '../store'

import { Wrapper, Container } from './styles'

const App: React.FC = () => {
  const { state, actions } = useContext(PickerContext)

  return (
    <Wrapper>
      <Container.Header>
        <Header
          menu={[
            {
              defaultValue: state.mode,
              onChange: ({ value }) => actions.changeMode(value as TMode),
              options: [
                { label: 'Solid', value: 'solid' },
                { label: 'Custom', value: 'custom' },
              ],
            },
            {
              defaultValue: state.scheme,
              onChange: ({ value }) =>
                actions.changeSchemeColor(value as TSchemeColor),
              options: [
                { label: 'HEX', value: 'hex' },
                { label: 'RGB', value: 'rgb' },
                { label: 'HSL', value: 'hsl' },
              ],
            },
          ]}
          buttons={[
            { icon: 'file-copy', onClick: actions.copy },
            { icon: 'sip', onClick: actions.picker },
          ]}
        />
      </Container.Header>
      <Container.Main>
        <Selector
          colors={state.colors}
          mode={state.mode}
          onGetColor={actions.setSeletorColor}
        />
        <Range color={state.colors.solid} onGetColor={actions.setRangerColor} />
      </Container.Main>
    </Wrapper>
  )
}

export default App
