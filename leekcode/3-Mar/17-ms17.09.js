/**
 * 面试题 17.09. 第 k 个数
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {
  let dp = [1]
  let p3 = 0
  let p5 = 0
  let p7 = 0
  let count = 0
  while(count < k ) {
      dp.push(Math.min(dp[p3] * 3, dp[p5] * 5, dp[p7] * 7))
      count++
      if (dp[p3] * 3 === dp[count]) p3++
      if (dp[p5] * 5 === dp[count]) p5++
      if (dp[p7] * 7 === dp[count]) p7++
  }
  return dp[k - 1]
};
