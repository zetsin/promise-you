const Then = Promise.prototype.then

function promiseYou (name = 'then') {
  Promise.prototype[name] = function (scb, fcb) {
    return Then.call(this, (arg) => {
      return new Promise((resolve, reject) => {
        return scb(arg, resolve, reject)
      })
    }, fcb)
  }

  Promise.YOU = name
  return promiseYou
}

module.exports = promiseYou
