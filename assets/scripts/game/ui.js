const store = require('./../store')

const newGameSuccess = function (response) {
  $('#message').text('Good luck!').show().delay(5000).fadeOut()
  store.user = response.user
}

const newGameFailure = function () {
  $('#message').text('New game failed to load. Try again!')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
