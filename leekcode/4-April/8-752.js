/**
 * 752. 打开转盘锁
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const dead = new Set(deadends)
  const visited = new Set()
  let p1 = new Set(), p2 = new Set()
  visited.add('0000')
  p1.add('0000')
  p2.add(target)
  let step = 0
  while(p1.size || p2.size) {
      const temp = new Set()
      // if (p1.size > p2.size) {
      //     const t = p1
      //     p1 = p2
      //     p2 = t
      // }
      for (let cur of p1) {
          if (dead.has(cur)) continue
          if (p2.has(cur)) return step
          visited.add(cur)
          for (let i = 0; i < 4; i++) {
              const up = plusOne(cur, i)
              const down = minusOne(cur, i)
              if (!visited.has(up)) {
                  temp.add(up)
              }
              if (!visited.has(down)) {
                  temp.add(down)
              }
          }
      }
      p1 = p2
      p2 = temp
      step++
  }
  return -1
};

function plusOne(s, i) {
  s = s.split('')
  if (s[i] === '9') s[i] = '0'
  else s[i] = Number(s[i]) + 1 + ''
  return s.join('')
}
function minusOne(s, i) {
  s = s.split('')
  if (s[i] === '0') s[i] = '9'
  else s[i] = s[i] - 1 + ''
  return s.join('')
}