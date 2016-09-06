# setval
write values to a nested object like to a flat key value store

# usage
`npm install setval`

```js
var setval = require('setval')
// setval(state, path, value, [delimiter]) => returns path
var state = { a: { b: [5,6,7] }, '': 3 }
setval(state, undefined, { x: 5}) // => { a: { b: [5,6,7] }, '': 3 }
setval(state) // => { a: { b: [5,6,7] }, '': 3 }
setval(state, '') // => { a: { b: [5,6,7] } }
setval(state, '', 6) // => { a: { b: [5,6,7] }, '': 6 }
setval(state, '/') // => { '': 6, a: { b: [5,6,7] } }
setval(state, '/', 'yay') // => { a: { b: [5,6,7] }, '': { '': 'yay' } }

var state = { a: { b: [5,6,7] }, '': 3 }
setval(state, 'a', 'm3h') // => { '': 3, a: 'm3h' }
setval(state, 'a') // => { '': 3 }
setval(state, '/a', { b: 5 }) // => { '': { a: { b: 5 } } }
setval(state, '/a/', 123 ) // => { '': { a: { b: 5, '': 123 } } }
setval(state, '//', 'yay' ) // => { '':{ a: { b:5,'':123 }, '':{'':'yay'}}}
setval(state, 'a/', { x: 5} )
// => { '': { a: { b: 5,'': 123 }, '': { '': 'yay' } }, a: { '': { x: 5 } } }

var state = { }
setval(state, ['a','b'], 'hello world') // => { a: { b: 'hello world' } }
setval(state, ['a','b']) // => { a: {} }

setval(state, 'a/b', 'hello world') // => { a: { b: 'hello world' } }
setval(state, 'a/c', 'foobar') // => { a: { b: 'hello world', c: 'foobar' } }
setval(state, 'a/c', null) // => { a: { b: 'hello world', c: null } }
setval(state, 'a/c') // =>  { a: { b: 'hello world' } }
setval(state, 'a/b/c', true) // => { a: { b: { c: true } } }

var state = { }
setval(state, 'a/b', 'hello world') // => { a: { b: 'hello world' } }
setval(state, 'a', [5,6,7]) // => { a: [5,6,7] }
setval(state, 'b', { y: 2 }) // => { a: [5,6,7], b: { y: 2} }
setval(state, 'b/0', { x: 2 }) // => { a: [5,6,7], b: { y: 2, 0: { x: 2 } } }
setval(state, 'b/y') // => { a: [5,6,7], b: { 0: { x: 2 } } }
setval(state, 'a/1', { x: 1 }) // => { a: [5,{ x: 1 },7], b: { 0: { x: 2 } } }

var x = { a: [5,{ x: 1 },7], b: { 0: { x: 2 } } }
x.a.y = { foo: 'bar' }
// works, but state is not JSON.stringifiable
setval(state, 'a/y', { foo: 'bar' }) // => x

var state = { }
setval(state, 'a.b', 'hello world', '.') // => { a: { b: 'hello world' } }
```

# Related
* see [getval](https://www.npmjs.com/package/getval)
