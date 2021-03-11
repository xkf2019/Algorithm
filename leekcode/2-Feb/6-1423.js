/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  const len = cardPoints.length
  const winSize = len - k
  let total = 0
  let sum = 0
  let minSum = 0
  for (let i = 0; i < len; i++) {
      total += cardPoints[i]
  }
  for (let i = 0; i < winSize; i++) {
      sum += cardPoints[i]
  }
  minSum = sum
  for (let i = winSize; i < len; i++) {
      sum = sum + cardPoints[i] - cardPoints[i - winSize]
      minSum = Math.min(minSum, sum)
  }

  return total - minSum
};