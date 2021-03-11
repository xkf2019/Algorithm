/**
 * 25. K 个一组翻转链表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head || !head.next) return head
  let ret = new ListNode(null, head), p = ret, count = 0
  while (p.next) {
      p = p.next
      count++
  }
  p = ret
  // console.log(count)
  while(count >= k) {
      p.next = reverseN(p.next, k)
      let times = k
      while(times--) p = p.next
      count -= k
  }

  return ret.next
};

function reverseN(head, n) {
  // console.log(head)
  let pre = null, cur = head
  while(n--) {
      // let temp = cur.next
      // cur.next = pre
      // pre = cur
      // cur = temp
      [cur.next, pre, cur] = [pre, cur, cur.next]
  }
  head.next = cur
  return pre
}