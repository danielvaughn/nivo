import React from 'react'
import ReactDOM from 'react-dom'
import Bar from '../components/Bar'

looker.plugins.visualizations.add({
  options: {
    font_size: {
      type: 'string',
      label: 'Font Size',
      values: [{ Large: 'large' }, { Small: 'small' }],
      display: 'radio',
      default: 'small',
    },
    sum_num: {
      type: 'number',
      label: 'Sum Num',
      default: 0,
      display: 'number',
    },
  },

  create: function (element, config) {
    // const css = (element.innerHTML = `
    //   <style>
    //     .hello-world-vis {
    //       height: 100%;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: center;
    //       text-align: center;
    //     }
    //     .hello-world-text-large {
    //       font-size: 72px;
    //       color: orange;
    //     }
    //     .hello-world-text-small {
    //       font-size: 18px;
    //       color: purple;
    //     }
    //   </style>
    // `)

    // const container = element.appendChild(document.createElement('div'))
    // container.className = 'hello-world-vis'

    // this._textElement = container.appendChild(document.createElement('div'))

    element.style.height = '100%'
    element.style.width = '100%'

    ReactDOM.render(<Bar data={[]} keys={[]} indexBy={null} />, element)
  },

  updateAsync: function (data, element, config, queryResponse, details, done) {
    this.clearErrors()

    if (queryResponse.fields.dimensions.length !== 1) {
      this.addError({ title: 'Invalid Dimensions', message: 'This chart requires one dimension' })
      return
    }

    if (queryResponse.fields.measures.length < 1) {
      this.addError({ title: 'No Metrics', message: 'This chart requires at least one metric' })
      return
    }

    console.log('RECEIVING UPDATE')
    console.log(data)
    console.log(queryResponse)

    const dimension = queryResponse.fields.dimensions[0].name
    const metrics = queryResponse.fields.measures.map((m) => m.name)

    console.log('DIMENSIONS')
    console.log(dimension)
    console.log(metrics)

    // Let's see if this works?
    ReactDOM.render(<Bar data={data} dimension={dimension} metrics={metrics} />, element)

    // const firstRow = data[0]
    // const firstCell = firstRow[queryResponse.fields.dimensions[0].name]

    // this._textElement.innerHTML = LookerCharts.Utils.htmlForCell(firstCell)

    // if (config.font_size === 'small') {
    //   this._textElement.className = 'hello-world-text-small'
    // } else {
    //   this._textElement.className = 'hello-world-text-large'
    // }

    done()
  },
})
