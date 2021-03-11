/**
 * count-sorted-vowel-strings
 * 统计字典序元音字符串的数目
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  const dp = [[1,1,1,1,1]]

  for (let i = 1;  i < n; i++) {
      dp[i] = []
      dp[i][0] = dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3] + dp[i - 1][4]
      dp[i][1] = dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3] + dp[i - 1][4]
      dp[i][2] = dp[i - 1][2] + dp[i - 1][3] + dp[i - 1][4]
      dp[i][3] = dp[i - 1][3] + dp[i - 1][4]
      dp[i][4] = dp[i - 1][4]
  }
  return dp[n - 1][0] + dp[n - 1][1] + dp[n - 1][2] + dp[n - 1][3] + dp[n - 1][4]
};