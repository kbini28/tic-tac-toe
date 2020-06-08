const store = require('./../store')

const signUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign up successful! Welcome ' + response.user.email + '!').show().delay(5000).fadeOut().removeClass().addClass('success')
  $('#logged-out-view').hide()
  $('.hidden').removeClass('hidden')
}

const signUpFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed.').show().removeClass().addClass('failure')
}

const signInSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Welcome back ' + response.user.email + '!').show().delay(5000).fadeOut().removeClass().addClass('success')
  $('#logged-out-view').hide()
  $('.hidden').removeClass('hidden')
  store.user = response.user
}

const signInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign in failed. Try again.').show().removeClass().addClass('failure')
}

const changePassSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password updated!').show().delay(5000).fadeOut().removeClass().addClass('success')
  store.user.password = response.user.password
}

const changePassFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Change password failed.').show().removeClass().addClass('failure')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Goodbye!').show().delay(5000).fadeOut().removeClass().addClass('success')
  $('#logged-out-view').show()
  $('main').addClass('hidden')
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign out failed. You are stuck here with us!').show().removeClass().addClass('failure')
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
