looker.plugins.visualizations.add({
  create: function (element, config) {
    element.innerHTML = '<h1>Ready to render!</h1>'
  },
  /*

    data = [
      {
        "table.field-name": {
          value: 123 // The only property guaranteed to exist in all cases! Also, some values might be complex objects!
        }
      }
    ]

   */
  updateAsync: function (data, element, config, queryResponse, details, doneRendering) {
    let html = ''
    for (let row of data) {
      const cell = row[queryResponse.fields.dimensions[0].name]
      html += LookerCharts.Utils.htmlForCell(cell)
    }
    element.innerHTML = html
    doneRendering()
  },
})
