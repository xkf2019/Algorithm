/**
 * 22. 括号生成
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const dp = [[""],["()"]]
  for (let i = 2; i <= n; i++) {
      dp[i] = []
      for (let j = 0; j < i; j++) {
          for (let p of dp[j]) {
              for (let q of dp[i - j - 1]) {
                  dp[i].push('(' + p + ')' + q)
              }
          }
      }
  }
  return dp[n]
};
