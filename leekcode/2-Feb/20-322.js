/**
 * coin-change
 * 零钱兑换
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (coins.length < 1) return -1
  const memo = [0]
  for (let i = 1; i <= amount; i++) {
      let min = Infinity
      for (let j = 0; j < coins.length; j++) {
          if (i - coins[j] >=0 && memo[i - coins[j]] < min) {
              min = memo[i - coins[j]] + 1
          }
      }
      memo[i] = min
  }
  return memo[amount] == Infinity ? -1 : memo[amount]
};