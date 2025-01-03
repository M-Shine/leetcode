/**
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
  if (!head) {
    return head;
  }

  let pre = null;
  let cur = head;
  let next = null;
  while (cur) {
    next = cur.next;
    if (!next) {
      break;
    }
    if (cur.val === next.val) {
      while (next && cur.val === next.val) {
        next = next.next;
      }
      if (pre) {
        pre.next = next;
      } else {
        head = next;
      }
    } else {
      pre = cur;
    }
    cur = next;
  }
  return head;
};