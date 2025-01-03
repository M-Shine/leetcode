/**
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
  if (!head) {
    return null;
  }

  let l = head;
  let r = head;
  while (n--) {
    r = r.next;
  }
  if (!r) {
    return head.next;
  }

  while (r && r.next) {
    r = r.next;
    l = l.next;
  }
  l.next = l.next.next;
  return head;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const node2 = new ListNode(2);
const node1 = new ListNode(1, node2);
console.log(removeNthFromEnd(node1, 2));