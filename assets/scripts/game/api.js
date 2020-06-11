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

const gameIndex = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateGame = function (position, currentPlayer) {
  console.log('what is data', position, currentPlayer)

  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: position,
          value: currentPlayer
        },
        over: false
      }
    }
  })
}

module.exports = {
  newGame,
  gameIndex,
  updateGame
}
