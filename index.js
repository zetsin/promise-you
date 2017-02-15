const Then = Promise.prototype.then

function promiseYou (name = 'then') {
  Promise.prototype[name] = function (scb, fcb) {
    return Then.call(this, (arg) => {
      return new Promise((resolve, reject) => {
        let cb = scb(arg, resolve, reject)
        if(cb instanceof Promise) {
        	cb.then(resolve).catch(reject)
        }
        else {
        	return cb
        }
      })
    }, fcb)
  }

  Promise.YOU = name
  return promiseYou
}

module.exports = promiseYou
