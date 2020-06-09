const config = require('./../config')
const store = require('./../store')

const newGame = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateMoves = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: '',
          value: ''
        },
        over: false
      }
    }
  })
}

module.exports = {
  newGame,
  updateMoves
}
