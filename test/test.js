const PromiseYou = require('../')

new Promise((resolve, reject) => {
  resolve(1)
})
.promise((arg, resolve, reject) => {
  console.log(arg)

  setTimeout(() => resolve(2), 1000)
})
.promise((arg, resolve, reject) => {
  console.log(arg)

  setTimeout(() => resolve(3), 1000)
})
.then(arg => {
  console.log(arg)
})
.catch(err => {
  console.log(err)
})