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
  let overflow = 0;
  let sumStr = '';
  do {
    const itemSum = l1.val + l2.val + overflow;
    overflow = itemSum > 9 ? 1 : 0;
    sumStr += itemSum % 10;
    l1 = l1.next;
    l2 = l2.next;
  } while (l1 && l2);

  while (l1) {
    const itemSum = l1.val + overflow;
    overflow = itemSum > 9 ? 1 : 0;
    sumStr += itemSum % 10;
    l1 = l1.next;
  }
  while (l2) {
    const itemSum = l2.val + overflow;
    overflow = itemSum > 9 ? 1 : 0;
    sumStr += itemSum % 10;
    l2 = l2.next;
  }
  if (overflow) {
    sumStr += overflow;
  }

  let lastNode;
  [...sumStr].reverse().forEach(str => {
    const val = parseInt(str, 10);
    lastNode = new ListNode(val, lastNode);
  });
  return lastNode;
};
