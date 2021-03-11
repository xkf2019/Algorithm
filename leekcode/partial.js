const partial = function(fn, ...restParam) {
   
  return function(...args) {
    let j = 0
    for (let i = 0; i < restParam.length && j < args.length; i++) {
      if (restParam[i] === undefined) {
        restParam[i] = args[j++]
      }
    }
    return fn.apply(null, restParam)
  }
}

const tenTimeout = partial(setInterval, undefined, 1000)
tenTimeout(function() {
  console.log('ten')
})
