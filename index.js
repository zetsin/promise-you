function promiseYou (name = 'promise') {
  delete Promise.prototype[Promise.YOU]

  Promise.prototype[name] = function (scb, fcb) {
    return this.then((arg) => {
      return new Promise((resolve, reject) => {
        return scb(arg, resolve, reject)
      })
    }, fcb)
  }

  Promise.YOU = name
}
promiseYou()

module.exports = promiseYou
