var isobject = require('isobject')
module.exports = function setval (root, path, value, delimiter) {
  var t = root, keys = (''+path).split(delimiter||'/'), last = keys.pop()
  keys.forEach(function(key) {
    t = t[key] = isobject(t[key]) ? t[key] : {}
  })
  t[last] = value
}
