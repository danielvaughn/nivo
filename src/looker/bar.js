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

    const viz = element.appendChild(document.createElement('div'))

    viz.style.height = '100vh'
    viz.style.width = '100vw'

    ReactDOM.render(<Bar />, viz)

    this._textElement = viz
  },

  updateAsync: function (data, element, config, queryResponse, details, done) {
    this.clearErrors()

    if (queryResponse.fields.dimensions.length == 0) {
      this.addError({ title: 'No Dimensions', message: 'This chart requires dimensions' })
      return
    }

    // Let's see if this works?
    ReactDOM.render(<Bar />, this._textElement)

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
