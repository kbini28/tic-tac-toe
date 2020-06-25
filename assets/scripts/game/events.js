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

// const pOne = 'x'
// const pTwo = 'o'
let currentPlayer
// let condition = store.game.over
// store.game.over = condition
const start = function () {
  currentPlayer = 'x'
}
// const pOne = 'x'
// const pTwo = 'o'
// let currentPlayer = pOne
// const gameBoard = store.cells

const onUpdateGame = function (event) {
  event.preventDefault()

  // if the click event target is empty, fill the target text with the currentPlayer (and hide messages)
  if ($(event.target).text() === '') {
    $('#win-message').hide()
    $(event.target).text(currentPlayer)

    // set the cell position and game over condition to be recorded in the store (API call)
    const position = $(event.target).data('cell-index')
    const condition = gameCondition()

    // update the store and API with the game conditions (index, value, and over)
    api.updateGame(position, currentPlayer, condition)
      .then(ui.updateGameSuccess)
      // check the gameCondition again, if it is updated in the API to true, show in the store and game information that it is true and show the win message
      .then(function () {
        const condition = gameCondition()
        if (condition) {
          store.game.over = true
          return api.updateGame(position, currentPlayer, true)
        }
      })
      .catch(ui.updateGameFailure)


    // if (condition === true) {
    //   // $('.box').addClass('hide-game')
    //   console.log('there is a winner')
    // } else if (condition === false) {
    // gameCondition()

    if (currentPlayer === 'x') {
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }
    // }
  } else if ($(event.target).text() !== '') {
    $('#message').text('Invalid Move').show().removeClass().addClass('failure')
  }
}

const gameCondition = function () {
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2] && store.game.cells[0] !== '') {
    // console.log('Winner', store.game.cells[0]) REMOVE THE CONSOLE LOGS AFTER WIN CONDITION IS CONFIRMED FUNCTIONAL
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[0]} is the winner!!`).show()
    return true
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5] && store.game.cells[3] !== '') {
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[3]} is the winner!!`).show()
    return true
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8] && store.game.cells[6] !== '') {
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[6]} is the winner!!`).show()
    return true
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6] && store.game.cells[0] !== '') {
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[0]} is the winner!!`).show()
    return true
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7] && store.game.cells[1] !== '') {
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[1]} is the winner!!`).show()
    return true
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8] && store.game.cells[2] !== '') {
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[2]} is the winner!!`).show()
    return true
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8] && store.game.cells[0] !== '') {
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[0]} is the winner!!`).show()
    return true
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6] && store.game.cells[2] !== '') {
    $('#win-message').text(`We have a winner!! Congratulations, ${store.game.cells[2]} is the winner!!`).show()
    return true
  // } else if (gameBoard.every(??) !== '') {
  //   console.log('Tie')
  //   store.game.over = true

  // In the event of a TIE...
  } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '' && store.game.cells[3] !== '' && store.game.cells[4] !== '' && store.game.cells[5] !== '' && store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8] !== '') {
    // console.log('Tie!')
    $('#win-message').text(`We have a tie!! Nobody wins, everybody loses!!`).show()
    return true
  } else {
    // if none of these conditions are true, return false and keep playing
    return false
  }
}


module.exports = {
  onNewGame,
  onGameIndex,
  onUpdateGame
}
