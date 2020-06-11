const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('./../store')

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

// const checkWinner = function (event) {
//   if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {
//     return $('#message').text(`We have a winner!! Congratulations, ${currentPlayer} is the winner!!`)
//   } else if (store.cell.index[0] === store.cell.index[1] && store.cell.index[1] === store.cell.index[2]) {
//     return $('#message').text(`We have a winner!! Congratulations, ${currentPlayer} is the winner!!`)
//   }
// }

const onUpdateGame = function (event) {
  event.preventDefault()
  // console.log to make sure the event handler is targeting the cells
  console.log('this is the event target', event.target)
  // store.game.cells = currentPlayer

  // const data = store.game
  // const form = event.target
  // const data = getFormFields(form)

  if ($(event.target).text() === '') {
    $('#message').hide()
    $(event.target).text(currentPlayer)

    const position = $(event.target).data('cell-index')

    api.updateGame(position, currentPlayer)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)

    // const checkWinner = function (currentPlayer) {
    //   if (store.game.cell[0] === store.game.cell[1] && store.game.cell[0] === store.game.cell[2]) {
    //     $('#message').text(`We have a winner!! Congratulations, ${currentPlayer} is the winner!!`)
    //   } else {
    //   }
    // }
    // checkWinner()
    // check for a winner?
    if (currentPlayer === pOne) {
      currentPlayer = pTwo
      // $('#message').hide()
    } else {
      currentPlayer = pOne
      // $('#message').text('Invalid move. Try Again.').show()
    }
  } else if ($(event.target).text() !== '') {
    $('#message').text('Invalid Move').show().removeClass().addClass('failure')
  }

}


// store.game.cell
// const data = store.game.cell[$(event.target).data('cell-index')]
// const winningCombos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

  // after input, check to see if currentPlayer is p1... if it is, then make cP equal to p2
          // if (currentPlayer === pOne) { // && $(form).innerHTML() === null - try an empty string?
          //   // if that is true, then switch players (make cP equal to p2)
          //   currentPlayer = pTwo
          //   // $('#message').hide()
          // } else {
          //   currentPlayer = pOne
          //   // $('#message').text('Invalid move. Try Again.').show()
          // }
  // const gameBoard = ['', '', '', '', '', '', '', '', '']
  // // const form = event.target
  // // const data = getFormFields(form)
  // $(event.target).data('cell-index')
  // if (event.target.innerHTML('cell-index') !== null) {
  //   $('#message').text('Space is already taken, try again.')
  // } else if (currentPlayer = pOne) {
  //   $(event.target).data('cell-index[]')
  // }

module.exports = {
  onNewGame,
  onGameIndex,
  onUpdateGame
}
