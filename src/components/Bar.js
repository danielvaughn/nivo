import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const Bar = ({ metrics, dimension, data }) => {
  const formattedData = data.map((datum) => {
    const formattedDatum = {}
    Object.entries(datum).forEach(([key, value]) => {
      formattedDatum[key] = value.value
    })
    return formattedDatum
  })

  return (
    <ResponsiveBar
      groupMode="grouped"
      data={formattedData}
      keys={metrics}
      indexBy={dimension}
      margin={{ top: 30, right: 30, bottom: 30, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'purple_red' }}
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
      // borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: 'country',
        // legendPosition: 'middle',
        // legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: 'food',
        // legendPosition: 'middle',
        // legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      theme={{
        background: '#ffffff',
        textColor: '#777777',
        fontSize: 11,
        axis: {
          domain: {
            line: {
              stroke: '#aaaaaa',
              strokeWidth: 0.5,
            },
          },
          ticks: {
            line: {
              stroke: '#aaaaaa',
              strokeWidth: 0.5,
            },
          },
        },
        grid: {
          line: {
            stroke: '#dddddd',
            strokeWidth: 0,
          },
        },
      }}
    />
  )
}

export default Bar
