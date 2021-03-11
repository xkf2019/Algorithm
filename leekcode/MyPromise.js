const isFunction = fn => typeof fn === 'function'

const PENDING = Symbol('pending')
const FULFILED = Symbol('fulfiled')
const REJECTED = Symbol('rejected')

class MyPromise {
  constructor(handle) {
    if (!isFunction(handle)) {
      throw new Error('Promise must accept function as a parameter')
    }
    this._status = PENDING
    this._resolvedQueue = []
    this._rejectedQueue = []
    try {
      handle(this._resolve.bind(this), this._reject.bind(this))
    } catch(e) {
      this._reject(e)
    }
  }

  _resolve(val) {
    if (this._status !== PENDING) return
    const run = () => {
      const resolved = (value) => {
        this._status = FULFILED
        this._value = value
        let cb
        while (cb = this._resolvedQueue.shift()) {
          cb(value)
        }
      }
      const rejected = (err) => {
        this._status = REJECTED
        this._value = err
        let cb
        while (cb = this._rejectedQueue.shift()) {
          cb(value)
        }
      }

      if (val instanceof MyPromise) {
        val.then(value => resolved(value), err => rejected(err))
      } else {
        resolved(val)
      }
    }
    setTimeout(run, 0)
  }

  _reject(err) {
    if (this._status !== PENDING) return
    const run = () => {
      this._status = REJECTED
      this._value = err
      console.log(err)
      let cb
      while (cb = this._rejectedQueue.shift()) {
        cb(err)
      }
    }
    setTimeout(run, 0)
  }

  then(onResolved, onRejected) {
    const {_status, _value} = this
    return new MyPromise((resolvedNext, rejectedNext) => {
      const resolved = value => {
        try {
          if (!isFunction(onResolved)) {
            resolvedNext(value)
          } else {
            const res = onResolved(value)
            if (res instanceof MyPromise) {
              res.then(resolvedNext, rejectedNext)
            } else {
              resolvedNext(res)
            }
          }
        } catch (err) {
          rejectedNext(err)
        }
      }
      const rejected = err => {
        try {
          if (!isFunction(onRejected)) {
            rejectedNext(err)
          } else {
            const res = onRejected(err)
            if (res instanceof MyPromise) {
              res.then(resolvedNext, rejectedNext)
            } else {
              resolvedNext(res)
            }
          }
        } catch (err) {
          rejectedNext(err)
        }
      }
      switch(_status) {
        case PENDING:
          this._resolvedQueue.push(resolved)
          this._rejectedQueue.push(rejected)
          break
        case FULFILED:
          resolved(_value)
          break
        case REJECTED:
          rejected(_value)
          break
      }

    })
  }

  static resolve(val) {
    return new MyPromise(resolve => resolve(val))
  }

  static reject(val) {
    return new MyPromise((resolve, reject) => reject(val))
  }

  static all(list) {
    return new MyPromise((resolve, reject) => {
      let values = []
      let count = 0
      for (let [i, p] of list.entries()) {
        this.resolve(p).then(res => {
          values[i] = res
          count++
          if (count === list.length) resolve(values)
        }, err => {
          reject(err)
        })
      }
    })
  }

  static race(list) {
    return new MyPromise((resolve, rejected) => {
      for (let p of list) {
        this.resolve(p).then(res => {
          resolve(res)
        }, err => {
          rejected(err)
        })
      }
    })
  }

  finally(cb) {
    return this.then(value => MyPromise.resolve(cb()).then(() => value), reason => MyPromise.resolve(cb()).then(() => { throw reason }))
  }
}

module.exports = MyPromise