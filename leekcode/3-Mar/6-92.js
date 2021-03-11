/**
 * 92. 反转链表 II
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if (!head) return head
  let ret = new ListNode(-1, head), pre = ret
  const times = right - left + 1
  while(--left) pre = pre.next
  pre.next = reverseN(pre.next ,times)
  return ret.next
};

function reverseN (head, n) {
  let pre = null, cur = head
  while(n--) {
      let temp = cur.next
      cur.next = pre
      pre = cur
      cur = temp
  }
  head.next = cur
  return pre
}