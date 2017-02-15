const PromiseYou = require('../')

// overwrite 'then' by default
PromiseYou()

new Promise((resolve, reject) => {
  resolve(1)
})
.then((arg, resolve, reject) => {
  console.log(arg)

  return Promise.resolve(2)
})
.then((arg, resolve, reject) => {
  console.log(arg)

  setTimeout(() => resolve(3), 1000)
})
.then((arg, resolve, reject) => {
  console.log(arg)

  setTimeout(() => resolve(4), 1000)
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
  resolve(5)
})
.then((arg, resolve, reject) => {
  console.log(arg)

  return Promise.resolve(6)
})
.promise((arg, resolve, reject) => {
  console.log(arg)

  setTimeout(() => resolve(7), 1000)
})
.promise((arg, resolve, reject) => {
  console.log(arg)

  setTimeout(() => resolve(8), 1000)
})
.then(arg => {
  console.log(arg)
})
.catch(err => {
  console.log(err)
})
