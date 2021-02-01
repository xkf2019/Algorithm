/**
 * Pow(x, n)
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  return n > 0 ? quickMul(x, n) : quickMul(x, -n)
};

function quickMul(x, n) {
  if (n === 0) return 1
  const y = quickMul(x, Math.floor(n/2))
  return n%2 === 0 ? y * y : y * y * x
}

console.log(myPow(2.00000, 10))