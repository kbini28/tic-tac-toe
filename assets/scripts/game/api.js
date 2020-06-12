const config = require('./../config')
const store = require('./../store')

const newGame = function (data) {
  // console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const gameIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (position, currentPlayer, condition) {
  console.log('what is data', position, currentPlayer, condition)

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
        over: condition
      }
    }
  })
}

module.exports = {
  newGame,
  gameIndex,
  updateGame
}
