/**
 * 86. 分隔链表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let r1 = new ListNode(null, null), r2 = new ListNode(null, null), p1 = r1, p2 = r2
  while(head) {
      if (head.val < x) {
          p1.next = head
          p1 = head
      } else {
          p2.next = head
          p2 = head
      }
      head = head.next
  }
  p1.next = r2.next
  p2.next = null
  return r1.next
};