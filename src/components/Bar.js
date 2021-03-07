import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const data = [
  {
    country: 'AD',
    'hot dog': 45,
    'hot dogColor': 'hsl(94, 70%, 50%)',
    burger: 126,
    burgerColor: 'hsl(96, 70%, 50%)',
    sandwich: 182,
    sandwichColor: 'hsl(10, 70%, 50%)',
    kebab: 111,
    kebabColor: 'hsl(172, 70%, 50%)',
    fries: 191,
    friesColor: 'hsl(166, 70%, 50%)',
    donut: 83,
    donutColor: 'hsl(11, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 13,
    'hot dogColor': 'hsl(152, 70%, 50%)',
    burger: 63,
    burgerColor: 'hsl(8, 70%, 50%)',
    sandwich: 23,
    sandwichColor: 'hsl(295, 70%, 50%)',
    kebab: 125,
    kebabColor: 'hsl(62, 70%, 50%)',
    fries: 106,
    friesColor: 'hsl(135, 70%, 50%)',
    donut: 5,
    donutColor: 'hsl(211, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 155,
    'hot dogColor': 'hsl(124, 70%, 50%)',
    burger: 166,
    burgerColor: 'hsl(268, 70%, 50%)',
    sandwich: 108,
    sandwichColor: 'hsl(207, 70%, 50%)',
    kebab: 71,
    kebabColor: 'hsl(138, 70%, 50%)',
    fries: 131,
    friesColor: 'hsl(236, 70%, 50%)',
    donut: 38,
    donutColor: 'hsl(270, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 21,
    'hot dogColor': 'hsl(302, 70%, 50%)',
    burger: 188,
    burgerColor: 'hsl(269, 70%, 50%)',
    sandwich: 114,
    sandwichColor: 'hsl(233, 70%, 50%)',
    kebab: 89,
    kebabColor: 'hsl(290, 70%, 50%)',
    fries: 32,
    friesColor: 'hsl(149, 70%, 50%)',
    donut: 55,
    donutColor: 'hsl(333, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 57,
    'hot dogColor': 'hsl(23, 70%, 50%)',
    burger: 67,
    burgerColor: 'hsl(98, 70%, 50%)',
    sandwich: 45,
    sandwichColor: 'hsl(193, 70%, 50%)',
    kebab: 138,
    kebabColor: 'hsl(358, 70%, 50%)',
    fries: 51,
    friesColor: 'hsl(287, 70%, 50%)',
    donut: 119,
    donutColor: 'hsl(118, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 12,
    'hot dogColor': 'hsl(357, 70%, 50%)',
    burger: 110,
    burgerColor: 'hsl(220, 70%, 50%)',
    sandwich: 11,
    sandwichColor: 'hsl(73, 70%, 50%)',
    kebab: 156,
    kebabColor: 'hsl(147, 70%, 50%)',
    fries: 119,
    friesColor: 'hsl(39, 70%, 50%)',
    donut: 132,
    donutColor: 'hsl(270, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 177,
    'hot dogColor': 'hsl(168, 70%, 50%)',
    burger: 58,
    burgerColor: 'hsl(315, 70%, 50%)',
    sandwich: 161,
    sandwichColor: 'hsl(265, 70%, 50%)',
    kebab: 175,
    kebabColor: 'hsl(5, 70%, 50%)',
    fries: 135,
    friesColor: 'hsl(52, 70%, 50%)',
    donut: 5,
    donutColor: 'hsl(230, 70%, 50%)',
  },
]

const Bar = () => (
  <ResponsiveBar
    data={data}
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'fries',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'sandwich',
        },
        id: 'lines',
      },
    ]}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
)

export default Bar
