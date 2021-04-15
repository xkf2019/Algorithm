/**
 * 82. 删除排序链表中的重复元素 II
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
  let ret = new ListNode(null, head), p = ret
  while(head && head.next) {
      if (head.val !== head.next.val) {
          p.next = head
          p = p.next
      }
      while(head.next && head.val === head.next.val) {
          head = head.next
      }
      head = head.next
  }
  p.next = head
  return ret.next
};