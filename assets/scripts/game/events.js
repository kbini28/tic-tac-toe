const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onNewGame = function (event) {
  event.preventDefault()
  //
  // const form = event.target
  // const data = getFormFields(form)
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// const gameBoard = ['', '', '', '', '', '', '', '', '']

const onMoves = function (event) {
  event.preventDefault()
  // const form = event.target
  // const data = getFormFields(form)

api.updateMoves()
  .then(ui.updateMovesSuccess)
  .catch(ui.updateMovesFailure)
}

module.exports = {
  onNewGame,
  onMoves
}
