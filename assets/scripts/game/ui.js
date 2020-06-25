const store = require('./../store')
const e = require('./events')

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
  // console.log('here is the game data', data.games)

  let gameIndexHtml = ''
  let i = 0
  data.games.forEach(game => {
    const oneGame = (`
      <h4>Game ID: ${data.games[i]._id}</h4>
      <p>Game Over?: ${data.games[i].over}</p>
      <br>
      `)
    i++
    gameIndexHtml += oneGame
  })
  $('.game-index-qty').html(`Total number of games played: ${data.games.length}`)
  $('.game-index').html(gameIndexHtml)
  // console.log(gameIndexHtml)
  $('.hidden').toggle()
}

const gameIndexFailure = function () {
  $('#message').text('Game index failed to load.').show().removeClass().addClass('failure').delay(4000).fadeOut()
}

const updateGameSuccess = function (response, event) {
  // console.log('response is ', response)

  $('#message').text('Update successful.').removeClass().addClass('success') // .show().delay(5000).fadeOut() Unneccessary?
  store.game = response.game
  console.log('this is store.game', store.game)
  // let check = e.gameCondition()
  // console.log('check', check)

  // if ($(event.target).text() === '' && !store.game.over) {
  //   $('#win-message').hide()
  //   $(event.target).text(currentPlayer)
  // } else if
  // if (store.game.over === true) {
  //   $('#win-message').text(`We have a winner!! Congratulations,  is the winner!!`)
  // }
  // console.log(store.game.over)
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
