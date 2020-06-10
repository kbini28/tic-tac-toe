const store = require('./../store')

const newGameSuccess = function (response) {
  $('#game-board').trigger('reset')
  $('.box').text('')
  $('.hide-game').removeClass('hide-game')
  $('#message').text('Good luck!').show().delay(5000).fadeOut()
  store.game = response.game
}

const newGameFailure = function () {
  $('#message').text('New game failed to load. Try again!').show()
}

const gameIndexSuccess = function (response) {
  let gameIndexHtml = ''
  response.games.forEach(game => {
    const oneGame = (`
      <h4>Game</h4>
      <br>
      `)
    gameIndexHtml += oneGame
  })

  $('game-index').html(gameIndexHtml)
  console.log(gameIndexHtml)
}

const gameIndexFailure = function () {
  $('#message').text('Game index failed to load.').show()
}

const updateGameSuccess = function (event) {
  $('#message').text('updated').show()
}

const updateGameFailure = function () {
  $('#message').text('Invalid Move').show().removeClass().addClass('failure')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure,
  gameIndexSuccess,
  gameIndexFailure
}
