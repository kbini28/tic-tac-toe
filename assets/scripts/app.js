'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePass)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#game-index').on('click', gameEvents.onGameIndex)
  // $('#show-game').on('submit', gameEvents.onShowGame)
  $('.box').on('click', gameEvents.onUpdateGame)
  $('#settings').on('click', authEvents.onShowSettings)
})
