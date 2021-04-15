/**
 * 12. 整数转罗马数字
 * @param {number} num
 * @return {string}
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let lev = 0
  const syms = [
      ['I','V','X'],
      ['X','L','C'],
      ['C','D','M'],
      ['M','','']
  ]
  ans = ''
  while(num) {
      let mod = num % 10
      const [fir, sec, thi] = syms[lev]
      if (mod < 4) {
          while(mod--) ans = fir + ans 
      } else if (mod === 4) {
          ans = fir + sec + ans
      } else if (mod === 5) {
          ans = sec + ans
      } else if (mod < 9) {
          let n = mod -5 
          while(n--) ans = fir + ans 
          ans = sec + ans
      } else if (mod === 9) {
          ans = fir + thi + ans
      }
      num = parseInt(num / 10)
      lev++
  }
  return ans
};
