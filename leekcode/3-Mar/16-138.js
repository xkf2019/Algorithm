/**
 * 138. 复制带随机指针的链表
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null
  let p = head, q
  while(p) {
      q = new ListNode(p.val)
      q.random = p.random
      q.next = p.next
      p.next = q
      p = q.next
  }
  p = head.next
  while(p) {
      p.random && (p.random = p.random.next);
      (p = p.next) && (p = p.next)
  }
  p = q = head.next
  while(q.next) {
      head.next = head.next.next
      q.next = q.next.next
      head = head.next
      q = q.next
  }
  head.next = null
  return p
};