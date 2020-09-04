import React, { useState, useContext } from 'react'

import { Header, Selector, Range } from '../components'

import { Wrapper, Container } from './styles'

const App: React.FC = () => (
  <Wrapper>
    <Container.Header>
      <Header />
    </Container.Header>
    <Container.Main>
      <Selector />
      <Range />
    </Container.Main>
  </Wrapper>
)

export default App
