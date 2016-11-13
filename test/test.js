const PromiseYou = require('../')

// overwrite 'then' by default
PromiseYou()

new Promise((resolve, reject) => {
  resolve(1)
})
.then((arg, resolve, reject) => {
  console.log(arg)

  setTimeout(() => resolve(2), 1000)
})
.then((arg, resolve, reject) => {
  console.log(arg)

  setTimeout(() => resolve(3), 1000)
})
.then(arg => {
  console.log(arg)
})
.catch(err => {
  console.log(err)
})

// use a new function name
PromiseYou('promise')

new Promise((resolve, reject) => {
  resolve(4)
})
.promise((arg, resolve, reject) => {
  console.log(arg)

  setTimeout(() => resolve(5), 1000)
})
.promise((arg, resolve, reject) => {
  console.log(arg)

  setTimeout(() => resolve(6), 1000)
})
.then(arg => {
  console.log(arg)
})
.catch(err => {
  console.log(err)
})
