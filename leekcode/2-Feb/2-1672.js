/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let ans = 0
  for (let i = 0; i < accounts.length; i++) {
      let c = accounts[i]
      let sum = 0
      for (let j = 0; j < c.length; j++) {
          sum += c[j]
      }
      ans = Math.max(ans, sum)
  }
  return ans
};