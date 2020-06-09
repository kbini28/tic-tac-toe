const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onNewGame = function (event) {
  event.preventDefault()
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
  // console.log to make sure the event handler is targeting the cells
  console.log('this is the event target', event.target)
  const form = event.target
  const data = getFormFields(form)
  // check that the event target (form) will input the 'marker' of the currentPlayer (x)
  if ($(form).text() === pOne || pTwo) {
    // if the text in the form says p1 or p2, close that space. Do not allow play to that space, or to be overwritten
    $('#message').text('That space is reserved! Choose again.').show()
  }
  $(form).text(currentPlayer)
  // after input, check to see if currentPlayer is p1... if it is, then make cP equal to p2
  if (currentPlayer === pOne) {
    // if that is true, then switch players (make cP equal to p2)
    currentPlayer = pTwo
  } else {
    currentPlayer = pOne
  }
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
