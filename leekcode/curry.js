const curry = fn => {
  if (typeof fn !== 'function') {
    throw new Error('curry must accept function as a parameter')
  }
  const len = fn.length
  return function curriedFn(...args) {
    if (args.length < len) {
      return function() {
        return curriedFn.apply(null, args.concat(Array.from(arguments)))
      }
    } else {
      return fn.apply(null, args)
    }

  }
}

const addN = curry((a,b,c) => {
  return a + b + c
})
console.log(addN(1,1)(2))