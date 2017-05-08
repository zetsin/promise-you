# promise-you - a extened wrapper of es6's Promise.then function
===========================

Install with:

    npm install --save promise-you
    
## Usage Example

* overwrite `.then` by default
```js
const PromiseYou = require('../')

new Promise((resolve, reject) => {
  resolve(1)
})
.then((arg, you) => {
  // with argument 'you', it's wrapped in another Promise
  // must call 'you.resolve' to be continued
  console.log(arg, you)
  you.test = 1

  setTimeout(() => you.resolve(2), 1000)
})
.then((arg, you) => {
  // or return a new Promise to be continued
  console.log(arg, you)

  return Promise.resolve(3)
})
.then((arg) => {
  // without argument 'you', it's like in a normal 'then'
  console.log(arg)
})
.then((arg, you) => {
  // also can call 'you.reject'
  console.log(arg, you)
  you.reject(4)
})
.catch((err, you) => {
  // after catch, we can resolve again
  console.log(err, you)
  you.resolve(5)
})
.then((arg, you) => {
  // read all 'arg' values in 'you.args' array
  console.log('end', you.args)
})
```
