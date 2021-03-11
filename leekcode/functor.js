const Maybe = function(val) {
  this.val = val
}
Maybe.of = function(val) {
  return new Maybe(val)
}
Maybe.Prototype.map = function(fn) {
  return this.isNothing ? Maybe.of(null) : Maybe.of(fn(this.val))
}
Maybe.Prototype.isNothing = function(fn) {
  return this.val === null || this.val === undefined
}
Maybe.Prototype.join = function() {
  return this.isNothing ? Maybe.of(null) : this.val
}
Maybe.Prototype.chain = function(fn) {
  return this.map(fn).join()
}
