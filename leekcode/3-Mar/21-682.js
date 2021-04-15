/**
 * 682. 棒球比赛
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let ans = []
  for(let score of ops) {
      switch(score) {
          case 'C':
              ans.pop()
              break;
          case 'D':
              ans.push(2 * Number(ans[ans.length - 1]))
              break;
          case '+': 
              ans.push(Number(ans[ans.length - 1]) + Number(ans[ans.length - 2] ))
              break;
          default:
              ans.push(Number(score))
      }
  }
  return ans.reduce((sum, v) => sum + v)
};