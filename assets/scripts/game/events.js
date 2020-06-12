const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('./../store')

const onNewGame = function (event) {
  event.preventDefault()
  $('#win-message').hide()
  const gameStart = start()
  // const form = event.target
  // const data = getFormFields(form)
  // gameStart()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGameIndex = function (event) {
  event.preventDefault()
  // const form = event.target
  // const data = getFormFields(form)

  api.gameIndex()
    .then(ui.gameIndexSuccess)
    .catch(ui.gameIndexFailure)
}

const pOne = 'x'
const pTwo = 'o'
let currentPlayer
const start = function () {
  currentPlayer = pOne
}
// const pOne = 'x'
// const pTwo = 'o'
// let currentPlayer = pOne
// const gameBoard = store.cells

const onUpdateGame = function (event) {
  event.preventDefault()

  // console.log to make sure the event handler is targeting the cells
  // console.log('this is the event target', event.target)
  // store.game.cells = currentPlayer

  if ($(event.target).text() === '') {
    $('#win-message').hide()
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
  // if (store.game.over === true) {
  //   $('#win-message').text(`The WINNER is ${currentPlayer}`)
  // } else if (store.game.over === false) {
  //   if (currentPlayer === pOne) {
  //     currentPlayer = pTwo
  //     // $('#message').hide()
  //   } else {
  //     currentPlayer = pOne
  //     // $('#message').text('Invalid move. Try Again.').show()
  //   }
  // }
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

const gameCondition = function () {
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2] && store.game.cells[0] !== '') {
    // $('#win-message').text(`The WINNER is ${currentPlayer}`)
    console.log('Winner', store.game.cells[0])
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[0]} is the winner!!`).show()
    return true
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5] && store.game.cells[3] !== '') {
    console.log('Winner', store.game.cells[3])
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[3]} is the winner!!`).show()
    return true
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8] && store.game.cells[6] !== '') {
    console.log('Winner', store.game.cells[6])
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[6]} is the winner!!`).show()
    return true
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6] && store.game.cells[0] !== '') {
    console.log('Winner', store.game.cells[0])
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[0]} is the winner!!`).show()
    return true
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7] && store.game.cells[1] !== '') {
    console.log('Winner', store.game.cells[1])
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[1]} is the winner!!`).show()
    return true
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8] && store.game.cells[2] !== '') {
    console.log('Winner', store.game.cells[2])
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[2]} is the winner!!`).show()
    return true
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8] && store.game.cells[0] !== '') {
    console.log('Winner', store.game.cells[0])
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[0]} is the winner!!`).show()
    return true
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6] && store.game.cells[2] !== '') {
    console.log('Winner', store.game.cells[2])
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[2]} is the winner!!`).show()
    return true
  // } else if (gameBoard.every(??) !== '') {
  //   console.log('Tie')
  //   store.game.over = true
  } else {
    return false
  }
}



module.exports = {
  onNewGame,
  onGameIndex,
  onUpdateGame
}
