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

const onGameIndex = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.gameIndex(data)
    .then(ui.gameIndexSuccess)
    .catch(ui.gameIndexFailure)
}
// const gameBoard = ['', '', '', '', '', '', '', '', '']
const pOne = 'x'
const pTwo = 'o'
let currentPlayer = pOne
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const onUpdateGame = function (event) {
  event.preventDefault()

  console.log(event.target)

  // const gameBoard = ['', '', '', '', '', '', '', '', '']
  // // const form = event.target
  // // const data = getFormFields(form)
  // $(event.target).data('cell-index')
  // if (event.target.innerHTML('cell-index') !== null) {
  //   $('#message').text('Space is already taken, try again.')
  // } else if (currentPlayer = pOne) {
  //   $(event.target).data('cell-index[]')
  // }


// api.updateGame()
//   .then(ui.updateGameSuccess)
//   .catch(ui.updateGameFailure)
}

module.exports = {
  onNewGame,
  onGameIndex,
  onUpdateGame
}
