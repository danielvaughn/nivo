import React from 'react'
import styled from '@emotion/styled'
import { fonts } from '../theme'
import Bar from './Bar'

const StyledDiv = styled.div`
  font-family: ${fonts.body};
  height: 400px;
  width: 100%;
`

const data = [
  {
    country: {
      value: 'AD',
    },
    burger: {
      value: 126,
    },
    // burgerColor: 'hsl(96, 70%, 50%)',
    sandwich: {
      value: 182,
    },
    // sandwichColor: 'hsl(10, 70%, 50%)',
    kebab: {
      value: 111,
    },
    // kebabColor: 'hsl(172, 70%, 50%)',
    fries: {
      value: 191,
    },
    // friesColor: 'hsl(166, 70%, 50%)',
    donut: {
      value: 83,
    },
    // donutColor: 'hsl(11, 70%, 50%)',
  },
  {
    country: {
      value: 'AE',
    },
    burger: {
      value: 63,
    },
    // burgerColor: 'hsl(8, 70%, 50%)',
    sandwich: {
      value: 23,
    },
    // sandwichColor: 'hsl(295, 70%, 50%)',
    kebab: {
      value: 125,
    },
    // kebabColor: 'hsl(62, 70%, 50%)',
    fries: {
      value: 106,
    },
    // friesColor: 'hsl(135, 70%, 50%)',
    donut: {
      value: 5,
    },
    // donutColor: 'hsl(211, 70%, 50%)',
  },
  {
    country: {
      value: 'AF',
    },
    burger: {
      value: 166,
    },
    // burgerColor: 'hsl(268, 70%, 50%)',
    sandwich: {
      value: 108,
    },
    // sandwichColor: 'hsl(207, 70%, 50%)',
    kebab: {
      value: 71,
    },
    // kebabColor: 'hsl(138, 70%, 50%)',
    fries: {
      value: 131,
    },
    // friesColor: 'hsl(236, 70%, 50%)',
    donut: {
      value: 38,
    },
    // donutColor: 'hsl(270, 70%, 50%)',
  },
  {
    country: {
      value: 'AG',
    },
    burger: {
      value: 188,
    },
    // burgerColor: 'hsl(269, 70%, 50%)',
    sandwich: {
      value: 114,
    },
    // sandwichColor: 'hsl(233, 70%, 50%)',
    kebab: {
      value: 89,
    },
    // kebabColor: 'hsl(290, 70%, 50%)',
    fries: {
      value: 32,
    },
    // friesColor: 'hsl(149, 70%, 50%)',
    donut: {
      value: 55,
    },
    // donutColor: 'hsl(333, 70%, 50%)',
  },
  {
    country: {
      value: 'AI',
    },
    burger: {
      value: 67,
    },
    // burgerColor: 'hsl(98, 70%, 50%)',
    sandwich: {
      value: 45,
    },
    // sandwichColor: 'hsl(193, 70%, 50%)',
    kebab: {
      value: 138,
    },
    // kebabColor: 'hsl(358, 70%, 50%)',
    fries: {
      value: 51,
    },
    // friesColor: 'hsl(287, 70%, 50%)',
    donut: {
      value: 119,
    },
    // donutColor: 'hsl(118, 70%, 50%)',
  },
  {
    country: {
      value: 'AL',
    },
    burger: {
      value: 110,
    },
    // burgerColor: 'hsl(220, 70%, 50%)',
    sandwich: {
      value: 11,
    },
    // sandwichColor: 'hsl(73, 70%, 50%)',
    kebab: {
      value: 156,
    },
    // kebabColor: 'hsl(147, 70%, 50%)',
    fries: {
      value: 119,
    },
    // friesColor: 'hsl(39, 70%, 50%)',
    donut: {
      value: 132,
    },
    // donutColor: 'hsl(270, 70%, 50%)',
  },
  {
    country: {
      value: 'AM',
    },
    burger: {
      value: 18,
    },
    // burgerColor: 'hsl(315, 70%, 50%)',
    sandwich: {
      value: 161,
    },
    // sandwichColor: 'hsl(265, 70%, 50%)',
    kebab: {
      value: 175,
    },
    // kebabColor: 'hsl(5, 70%, 50%)',
    fries: {
      value: 135,
    },
    // friesColor: 'hsl(52, 70%, 50%)',
    donut: {
      value: 5,
    },
    // donutColor: 'hsl(230, 70%, 50%)',
  },
]

const App = () => {
  return (
    <StyledDiv>
      <Bar
        data={data}
        dimension="country"
        metrics={['burger', 'sandwich', 'kebab', 'fries', 'donut']}
      />
    </StyledDiv>
  )
}

export default App
