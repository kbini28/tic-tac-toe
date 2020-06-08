const store = require('./../store')

const signUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign up successful! Welcome ' + response.user.email + '!').show()
}

const signUpFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed.').show()
}

const signInSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Welcome back ' + response.user.email + '!').show()
  store.user = response.user
}

const signInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign in failed. Try again.').show()
}

const changePassSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password updated!').show()
  store.user.password = response.user.password
}

const changePassFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Change password failed.').show()
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Goodbye!').show()
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign out failed. You are stuck here with us!').show
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePassSuccess,
  changePassFailure,
  signOutSuccess,
  signOutFailure
}
