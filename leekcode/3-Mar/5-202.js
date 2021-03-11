/**
 * 202. 快乐数
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n === 1) return true
  let s = n
  let f = getSum(n)
  while(f != 1 && f !== s) {
      f = getSum(getSum(f))
      s = getSum(s)
  }
  return f == 1
};

function getSum(n) {
  let sum = 0
  while(n) {
      sum += (n % 10) * (n % 10)
      n = Math.floor(n / 10)
  }
  return sum
}

let sum = 0
for (let i = 0; i <= 100000; i++) {
  if (isHappy(i)) {
    sum += i
  }
}

console.log(sum)