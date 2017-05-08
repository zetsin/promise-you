const Then = Promise.prototype.then

Promise.prototype.then = function (scb, fcb) {
  let you = this.you || {}
  you.args = you.args || []

  let then = Then.call(this, scb && ((arg) => {
    you.args.push(arg)
    return scb.length === 1 ? scb.call(this, arg) : new Promise((resolve, reject) => {
      you.resolve = (...args) => resolve.apply(this, args)
      you.reject = (...args) => reject.apply(this, args)
      let result = scb.call(this, arg, you)
      return (result instanceof Promise) ? result.then(you.resolve).catch(you.reject) : result
    })
  }), fcb && ((arg) => {
    you.args.push(arg)
    return fcb.length === 1 ? fcb.call(this, arg) : new Promise((resolve, reject) => {
      you.resolve = (...args) => resolve.apply(this, args)
      you.reject = (...args) => reject.apply(this, args)
      let result = fcb.call(this, arg, you)
      return (result instanceof Promise) ? result.then(you.resolve).catch(you.reject) : result
    })
  }))

  then.you = you

  return then
}
