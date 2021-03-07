import React from 'react'
import styled from '@emotion/styled'
import { fonts } from '../theme'

const StyledDiv = styled.div`
  color: pink;
  font-family: ${fonts.body};
`

const App = () => {
  return <StyledDiv>hello world</StyledDiv>
}

export default App
