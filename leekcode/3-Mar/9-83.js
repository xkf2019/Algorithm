/**
 * 83. 删除排序链表中的重复元素
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head
  let ret = new ListNode(null, head), p = ret, q = ret
  while(p.next) {
      p = p.next
      while(p.next && p.val == p.next.val) {
          p = p.next
      }
      q.next = p
      q = p
  }
  return ret.next
};

var deleteDuplicates = function(head) {
  let cur = head
  while(cur && cur.next) {
      if (cur.val === cur.next.val) {
          cur.next = cur.next.next
      } else {
          cur = cur.next
      }
  }
  return head
};