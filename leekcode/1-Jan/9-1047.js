/**
 * remove-all-adjacent-duplicates-in-string
 * @param {string} S
 * @return {string}
 */
// var removeDuplicates = function(S) { 
//   if (S.length < 2) return S
//   var arr = S.split('')
//   let i = 1
//   while(i < arr.length) {
//       console.log(arr, i)
//       if (arr[i] === arr[i-1]) {
//           arr.splice(i-1, 2)
//           if (arr.length < 2) {
//               return arr.join('')
//           } else {
//               i = 0
//           }
//       }
//       i++
//   }
//   return arr.join('')
// };

var removeDuplicates = function(S) {
  if (S.length < 2) return S
  for (let i = 1; i < S.length; i++) {
      if (S[i] === S[i-1]) {
          S = S.replace(S[i] + S[i-1], '')
          i = 0
      }
  }
  return S
};

var removeDuplicates = function(S) {
  if (S.length < 2) return S
  var stack = []
  stack.push(S[0])
  let i = 1
  while(i < S.length) {
    if (S[i] === stack[stack.length -1]) {
      stack.pop()
    } else {
      stack.push(S[i])
    }
    
    i++
  }
  return stack.join('')
}

// 记录 [aa, bb, ...]
var removeDuplicates = function(S) {
  if (S.length < 2) return S
  var arr = []
  for (let i = 97; i <= 122; i++) {
      arr.push(String.fromCharCode(i) + String.fromCharCode(i))
  }
  
  while(true) {
      const s = S
      for (let i = 0; i < arr.length; i++) {
          S = S.replace(arr[i], '')
      }
      console.log(s,S)
      if (s === S) {
          return S
      }
  }
};