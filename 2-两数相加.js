/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const result = new ListNode();
  let overflow = 0;
  let p = result;
  let p1 = l1;
  let p2 = l2;
  while (p1 && p2) {
    let sum = p1.val + p2.val + overflow;
    p.next = new ListNode(sum % 10);
    overflow = Math.floor(sum / 10);
    p = p.next;
    p1 = p1.next;
    p2 = p2.next;
  }
  while (p1) {
    let sum = p1.val + overflow;
    p.next = new ListNode(sum % 10);
    overflow = Math.floor(sum / 10);
    p = p.next;
    p1 = p1.next;
  }
  while (p2) {
    let sum = p2.val + overflow;
    p.next = new ListNode(sum % 10);
    overflow = Math.floor(sum / 10);
    p = p.next;
    p2 = p2.next;
  }
  if (overflow) {
    p.next = new ListNode(overflow);
  }
  return result.next;
};
