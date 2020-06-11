const store = require('./../store')
const gameEvents = require('./events')

const newGameSuccess = function (response) {
  $('#game-board').trigger('reset')
  $('.box').text('')
  $('.hide-game').removeClass('hide-game')
  $('#message').text('Good luck!').show().delay(5000).fadeOut().removeClass().addClass('success')
  store.game = response.game
}

const newGameFailure = function () {
  $('#message').text('New game failed to load. Try again!').show()
}

const gameIndexSuccess = function (response) {
  let gameIndexHtml = ''
  response.game.forEach(game => {
    const oneGame = response.game.id
    gameIndexHtml += oneGame
  })

  $('game-index').html(gameIndexHtml)
  console.log(gameIndexHtml)
}

const gameIndexFailure = function () {
  $('#message').text('Game index failed to load.').show()
}

const updateGameSuccess = function (response) {
  // console.log('response is ', response)

  $('#message').text('Update successful.').show().delay(5000).fadeOut().removeClass().addClass('success')
  store.game = response.game
}

const updateGameFailure = function () {
  $('#message').text('Update failed.').show().removeClass().addClass('failure')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure,
  gameIndexSuccess,
  gameIndexFailure
  // checkWinner
}
