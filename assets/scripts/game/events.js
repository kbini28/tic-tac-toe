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
// const gameBoard = store.cells

const onUpdateGame = function (event) {
  event.preventDefault()
  // console.log to make sure the event handler is targeting the cells
  // console.log('this is the event target', event.target)
  // store.game.cells = currentPlayer

  // const data = store.game
  // const form = event.target
  // const data = getFormFields(form)

  if ($(event.target).text() === '') {
    $('#message').hide()
    $(event.target).text(currentPlayer)

    const position = $(event.target).data('cell-index')

    const condition = gameCondition()

    // if (condition === false) {
    //   if (currentPlayer === pOne) {
    //     currentPlayer = pTwo
    //     // $('#message').hide()
    //   } else {
    //     currentPlayer = pOne
    //     // $('#message').text('Invalid move. Try Again.').show()
    //   }
    // }

    api.updateGame(position, currentPlayer, condition)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  } else if ($(event.target).text() !== '') {
    $('#message').text('Invalid Move').show().removeClass().addClass('failure')
  }
  if (store.game.over === false) {
    if (currentPlayer === pOne) {
      currentPlayer = pTwo
      // $('#message').hide()
    } else {
      currentPlayer = pOne
      // $('#message').text('Invalid move. Try Again.').show()
    }
  }
}

const gameCondition = function () { // function name = gameCondition - return true/false
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2] && store.game.cells[0] !== '') {
    $('#win-message').text(`The WINNER is ${currentPlayer}`)
    console.log('Winner', store.game.cells[0])
    // $('#message').text(`We have a winner!! Congratulations, ${currentPlayer} is the winner!!`)
    return true
  // } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== '') {
  //   console.log('Winner', gameBoard[3])
  //   store.game.over = true
  // } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== '') {
  //   console.log('Winner', gameBoard[6])
  //   store.game.over = true
  // } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== '') {
  //   console.log('Winner', gameBoard[0])
  //   store.game.over = true
  // } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== '') {
  //   console.log('Winner', gameBoard[1])
  //   store.game.over = true
  // } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] !== '') {
  //   console.log('Winner', gameBoard[2])
  //   store.game.over = true
  // } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== '') {
  //   console.log('Winner', gameBoard[0])
  //   store.game.over = true
  // } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] !== '') {
  //   console.log('Winner', gameBoard[2])
  //   store.game.over = true
  // } else if (gameBoard.every(??) !== '') {
  //   console.log('Tie')
  //   store.game.over = true
  } else {
    return false
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
// const checkWinner = function (event) {
//   if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {
//     return $('#message').text(`We have a winner!! Congratulations, ${currentPlayer} is the winner!!`)
//   } else if (store.cell.index[0] === store.cell.index[1] && store.cell.index[1] === store.cell.index[2]) {
//     return $('#message').text(`We have a winner!! Congratulations, ${currentPlayer} is the winner!!`)
//   }
// }

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
