/**
 * 860. 柠檬水找零
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  const map = {}
  for (let i = 0; i < bills.length; i++) {
      let money = bills[i]
      if (money === 10) {
          if (map[5]) {
              map[5]--
          } else {
              return false
          }
      }
      if (money === 20) {
          if (map[10] && map[5]) {
              map[10]--
              map[5]--
          } else if (map[5] >= 3) {
              map[5] = map[5] - 3
          } else {
              return false
          }
      }
      map[money] ? map[money]++ : map[money] = 1
  }
  return true
};

var lemonadeChange = function(bills) {
    let fiveCoin = 0
    let tenCoin = 0
    for (let i = 0; i < bills.length; i++) {
        const price = bills[i]
        switch(price) {
             case 5:
                 fiveCoin++
                 break;
             case 10:
                 if (!fiveCoin) return false
                 tenCoin++
                 fiveCoin--
                 break;
             case 20:
                 if (!tenCoin && fiveCoin < 3 || !fiveCoin) return false
                 if (tenCoin) {
                     tenCoin--
                     fiveCoin--
                 } else {
                     fiveCoin -= 3
                 }
                 break;
        }
    }
    return true
 };