var xObject = require('x-is-object')
var xString = require('x-is-string')
var xDTypeArray = require('x-is-ducktype-array')
var dsplit = require('dsplit')
var djoin = require('djoin')
module.exports = setval
function setval (root, path, value, delimiter) {
  var keys = xDTypeArray(xString,path) ? path : dsplit(path, delimiter)
  var last = keys[keys.length-1]
  if (last !== undefined) {
    for(var k,r,o,n,t=root,len=keys.length-1,idx=0; idx<len; idx++) {
      k = keys[idx]
      if (o) o = o[k] = {}
      else if (xObject(t[k])) t = t[k]
      else (r = o = {}, n = k)
    }
    if (value !== undefined) {
      if (r) (t[n] = r, t = o)
      t[last] = value
      return path
    }
    else if (!r && last in t) return (delete t[last], path)
  }
}
