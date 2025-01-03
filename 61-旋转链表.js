/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return head;
  
  let len = 1;
  let p = head;
  while (p.next) {
    p = p.next;
    len++;
  }
  p.next = head;
  k = len - k % len;
  
  while (k--) {
    p = p.next;
  }
  head = p.next;
  p.next = null;
  return head;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
let head = rotateRight(node1, 2);

// const node2 = new ListNode(2);
// const node1 = new ListNode(1, node2);
// const node0 = new ListNode(0, node1);
// let head = rotateRight(node0, 4);

// const node2 = new ListNode(2);
// const node1 = new ListNode(1, node2);
// let head = rotateRight(node1, 1);

while (head) {
  console.log(head.val);
  head = head.next;
}