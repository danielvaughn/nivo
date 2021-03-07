import React from 'react'
import styled from '@emotion/styled'
import { fonts } from '../theme'
import Bar from './Bar'

const StyledDiv = styled.div`
  font-family: ${fonts.body};
  height: 400px;
  width: 100%;
`

const App = () => {
  return (
    <StyledDiv>
      <Bar />
    </StyledDiv>
  )
}

export default App
