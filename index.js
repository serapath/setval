var isobject = require('isobject')
module.exports = function setval (root, path, value) {
  var t = root, keys = (''+path).split('.'), last = keys.pop()
  keys.forEach(function(key) {
    t = t[key] = t[key] !== isobject(t[key]) ? {} : t[key]
  })
  t[last] = value
}
