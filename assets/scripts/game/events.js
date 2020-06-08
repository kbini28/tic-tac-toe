const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onNewGame = function () {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onNewGame
}
