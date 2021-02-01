/**
 * arranging-coins
 * @param {number} n
 * @return {number}
 */

var arrangeCoins = function(n) {
  let i = 0
  while (n >= i) {
      n = n - i
      i++
  }
  return i - 1
}

// 数学
// var arrangeCoins = function(n) {
//   return Math.floor(-0.5+ Math.sqrt(2*n+0.25));
// }

// 二分查找
var arrangeCoins = function(n) {
  let st = 0
  let en = n
  while (st <= en) {
      let mid = Math.floor((en - st)/2 + st)
      console.log(mid)
      let cost = mid * (mid + 1) / 2
      if (cost === n) {
          return mid
      } else if (cost > n) {
          en = mid - 1
      } else {
          st = mid + 1
      }
  }
  return en
}
console.log(arrangeCoins(11))