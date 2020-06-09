const store = require('./../store')

const newGameSuccess = function (response) {
  $('#game-board').trigger('reset')
  $('.hide-game').removeClass('hide-game')
  $('#message').text('Good luck!').show().delay(5000).fadeOut()
  store.game = response.game
}

const newGameFailure = function () {
  $('#message').text('New game failed to load. Try again!')
}

const updateMovesSuccess = function (response) {
  // $(event.target).on('click', 'x')
}

const updateMovesFailure = function () {
  $('#message').text('Invalid Move')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateMovesSuccess,
  updateMovesFailure
}
