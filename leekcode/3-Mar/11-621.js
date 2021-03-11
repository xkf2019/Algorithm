/**
 * 621. 任务调度器
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let ans = 0
  let map = {}
  tasks.forEach(v => map[v] = (map[v] || 0) + 1)
  const maxTimes = Math.max(...Object.values(map))
  let maxCout = 0
  Object.keys(map).forEach(v => {
      if (map[v] === maxTimes) {
          maxCout++
      }
  })
  return Math.max((maxTimes - 1) * (n + 1) + maxCout, tasks.length)
};