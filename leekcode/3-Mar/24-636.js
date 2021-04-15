/**
 * 636. 函数的独占时间
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  const ids = []
  const ans = []
  let pre = 0
  for (let i = 0; i < logs.length; i++) {
      let [id, type, ts] = logs[i].split(':')
      ts = Number(ts)
      let topId = ids[ids.length - 1]
      if (ids.length) ans[topId] = (ans[topId] || 0) + ts - pre + (type === 'end')
      pre = ts + (type === 'end')
      if (type === 'start') ids.push(id)
      else ids.pop()
  }
  return ans
};