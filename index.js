var xObject = require('x-is-object')
var dsplit = require('dsplit')
var djoin = require('djoin')
module.exports = setval
function setval (root, path, value, delimiter) {
  // (obj,str,any,str) -> str|undef
  var t = root, /*arr<str>*/keys = dsplit(path, delimiter)
  var path = djoin(keys, delimiter), /*str|undef*/last = keys.pop()
  if (last !== undefined) {
    for (idx in keys) {
      var k=keys[idx], o, n;
      if (o) o[k] = {}
      else
        if (xObject(t[k])) t = t[k]
        else (o = {}, n = k)
    }
    if (value !== undefined) {
      if (o) (t[n] = o, t = o)
      t[last] = value
      return path
    }
    else if (!o && last in t) return (delete t[last], path)
  }
}
