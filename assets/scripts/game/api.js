const config = require('./../config')
const store = require('./../store')

const newGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {}
    }
  })
}

module.exports = {
  newGame
}
