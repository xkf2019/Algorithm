/**
 * best-time-to-buy-and-sell-stock
 * 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ans = 0
  let minPrice = Infinity
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
          minPrice = prices[i]
      } else {
          ans = Math.max(ans, prices[i] - minPrice)
      }
  }
  return ans
};