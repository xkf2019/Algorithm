/**
 * 7. 整数反转
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = 0
  while(x != 0) {
      let mod = x % 10
      if (res > 214748364 || (res === 214748364 && mod > 7) || res < -214748364 || (res === -214748364 && mod < -8)) return 0
      res = res * 10 + mod
      x = parseInt(x / 10)
  }
  return res
};