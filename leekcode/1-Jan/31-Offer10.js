/**
 * 剑指 Offer 10- II. 青蛙跳台阶问题
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  if (n === 0 || n === 1) return 1
  let dp = [1, 1,2]
  for (let i = 3; i <= n; i++) {
      dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
  }
  return dp[n]
};

var numWays = function(n) {
  if (n === 0 || n === 1) return 1
  let prev = 1
  let cur = 2
  for (let i = 3; i <= n; i++) {
      let tmp = cur
      cur = (prev + cur) % 1000000007
      prev = tmp
  }
  return cur
};