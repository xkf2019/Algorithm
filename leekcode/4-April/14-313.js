/**
 * 313. 超级丑数
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  const dp = [1]
  const map = {}
  primes.forEach(v => map[v] = 0)
  for (let i = 1; i < n; i++) {
      
      dp[i] = Math.min(...primes.map(v => dp[map[v]] * v))
      for (let p = 0; p < primes.length; p++) {
          if (dp[i] === primes[p] * dp[map[primes[p]]]) {
              map[primes[p]]++
          }
      }
  }
  return dp[n - 1]
};