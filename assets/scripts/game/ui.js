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
  $('.hidden').toggle(true)
}

const gameIndexFailure = function () {
  $('#message').text('Game index failed to load.').show().removeClass().addClass('failure').delay(4000).fadeOut()
}

// const showGameSuccess = function (data) {
//   $('.game-index-qty').html(`Total number of games played: ${data.games.length}`)
//   $('.game-index').html(data)
// }
//
// const showGameFailure = function () {
//   $('#message').text('Invalid game ID').show().removeClass().addClass('failure').delay(4000).fadeOut()
// }

const updateGameSuccess = function (response, event) {
  // console.log('response is ', response)
  // only run this function if the game is still going, otherwise do not show success message
  if (store.game.over === false) {
    // don't need to show a success message every time the board updates (only need a failure)
    // $('#message').text('Update successful.').removeClass().addClass('success') // .show().delay(5000).fadeOut() Unneccessary?
    store.game = response.game
    // console.log('this is store.game', store.game)
  }
}

const updateGameFailure = function () {
  $('#message').text('Update failed.').show().removeClass().addClass('failure')
}

// when the game is over, "prevent" the spaces from being filled with x/o (at least until I find a better way)
const gameOver = function (event) {
  $('#message').text('Invalid Move').show().removeClass().addClass('failure')
  $(event.target).text(' ')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  gameIndexSuccess,
  gameIndexFailure,
  showGameSuccess,
  showGameFailure,
  updateGameSuccess,
  updateGameFailure,
  gameOver
}
