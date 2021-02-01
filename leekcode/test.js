function Ninja() {
  this.whoAmI = function() {
    return this
  }.bind(this)
}

var ninjia1 = new Ninja()
var ninjia2 = {
  whoAmI: ninjia1.whoAmI
}
console.log(ninjia1.whoAmI() === ninjia1)
console.log(ninjia2.whoAmI() === ninjia2)