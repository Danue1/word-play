'use strict'

if (!(typeof Promise)) {
  require('promise/lib/rejection-tracking').enable()
  window.Promise = require('promise/lib/es6-extensions.js')
}

require('whatwg-fetch')

Object.assign = require('object-assign')
