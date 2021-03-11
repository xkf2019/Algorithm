/**
 * assign-cookies
 * 分发饼干
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a,b) => a - b)
    s = s.sort((a,b) => a - b)
    let i = 0
    let j = 0
    let ans = 0
    while(i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            ans++
            i++
            j++
            continue
        }
        j++
    }
    return ans
};