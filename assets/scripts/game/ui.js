const store = require('./../store')

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

const gameIndexSuccess = function (data) {
  console.log('here is the game data', data.game)
  let gameIndexHtml = ''
  data.game.forEach(game => {
    const oneGame = (`
      <h4>Game ID: ${data.game.id}</h4>
      <p>Game Over?: ${data.game.over}</p>
      <br>
      `)

    gameIndexHtml += oneGame
  })

  $('game-index').html(gameIndexHtml)
  console.log(gameIndexHtml)
}

const gameIndexFailure = function () {
  $('#message').text('Game index failed to load.').show().removeClass().addClass('failure').delay(4000).fadeOut()
}

const updateGameSuccess = function (response) {
  // console.log('response is ', response)

  $('#message').text('Update successful.') // .show().delay(5000).fadeOut().removeClass().addClass('success') Unneccessary?
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
}
