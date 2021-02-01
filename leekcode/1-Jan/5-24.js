/**
 * swap-nodes-in-pairs
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
// 迭代
var swapPairs = function(head) {
  const dummyNode = new ListNode(0)
  dummyNode.next = head
  let tmp = dummyNode
  while(tmp.next !== null && tmp.next.next !== null) {
    const node1 = tmp.next
    const node2 = tmp.next.next
    node1.next = node2.next
    node2.next = node1
    tmp.next = node2
    tmp = node1
  }
  return dummyNode.next
};

// 递归
var swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head
  } 
  const newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
};