const PENDING = Symbol('pending')
const FULFILED = Symbol('fulfiled')
const REJECTED = Symbol('rejected')
const isFunction = fn => typeof fn === 'function'

class MyPromise {
  constructor(handle) {
    if (!isFunction(handle)) {
      throw new Error('Promise must accept function as a parameter')
    }
    this._status = PENDING
    this._value = undefined
    this._resolvedQueue = []
    this._rejectedQueue = []
    try {
      handle(this._resolve.bind(this), this._reject.bind(this))
    } catch (e) {
      this._reject(e)
    }
  }
  _resolve(val) {
    // console.log('val',val)
    if (this._status !== PENDING) return
    const run = () => {
      const onResolved = value => {
        this._status = FULFILED
        this._value = value
        let cb 
        // console.log('value', value)
        while (cb = this._resolvedQueue.shift()) {
          cb(value)
        }
      }
      const onRejected = err => {
        this._status = REJECTED
        this._value = err
        let cb
        while (cb = this._rejectedQueue.shift()) {
          cb(err)
        }
      }
      if (val instanceof MyPromise) {
        // 如果 resolve 的值是一个 Promise
        val.then(value => onResolved(value), err => onRejected(err))
      } else {
        onResolved(val)
      }
    }
    setTimeout(run, 0)
  }
  _reject(err) {
    if (this._status !== PENDING) return
    const run = () => {
      this._status = REJECTED
      this._value = err
      let cb
      while (cb = this._rejectedQueue.shift()) {
        cb(err)
      }
    }
    setTimeout(run, 0)
  }
  then(onResolved, onRejected) {
    const {_status, _value} = this
    return new MyPromise((resolveNext, rejectNext) => {
      const resolved = value => {
        try {
          if (!isFunction(onResolved)) {
            resolveNext(value)
          } else {
            const res = onResolved(value)
            if (res instanceof MyPromise) {
              res.then(resolveNext, rejectNext)
            } else {
              resolveNext(value)
            }
          }
        } catch (err) {
          rejectNext(err)
        }
        
      }
      const rejected = err => {
        try {
          if (!isFunction(onRejected)) {
            rejectNext(err)
          } else {
            // console.log('res', res)
            const res = onRejected(err)
            if (res instanceof MyPromise) {
              res.then(resolveNext, rejectNext)
            } else {
              resolveNext(err)
            }
          }
        } catch (err) {
          rejectNext(err)
        }
      }
      // console.log(_status)
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
      }
    })
  }
  static resolve(val) {
    return new MyPromise((resolve) => resolve(val))
  }
  static reject(err) {
    return new MyPromise((undefined, reject) => reject(err))
  }
  static all(list) {
    return new MyPromise((resolve, reject) => {
      let values = []
      let count = 0
      for(let [i, p] of list.entries()) {
        this.resolve(p).then(value => {
          values[i] = value
          count++
          if(count === list.length) resolve(values)
        }, err => {
          reject(err)
        })
      }
    })
  }
  static race(list) {
    return new MyPromise((resolve, reject) => {
      for (let p of list) {
        this.resolve(p).then(value => {
          resolve(value)
        }, err => {
          reject(err)
        })
      }
    })
  }
  finally(cb) {
    return this.then(value => MyPromise.resolve(cb()).then(() => value), reason => MyPromise.resolve(cb()).then(() => { throw reason }) )
  }
}

module.exports = MyPromise