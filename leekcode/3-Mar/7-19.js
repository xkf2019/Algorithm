/**
 * 19. 删除链表的倒数第 N 个结点
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let ret = new ListNode(null, head), p = ret,q = ret
  while(n--) q = q.next
  while(q.next) {
      p = p.next
      q = q.next
  }
  p.next = p.next.next

  return ret.next
};