/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  function findNode(h, l, r) {
    let pNode, lNode, rNode;
    let p = h;
    let i = 1;
    while (i <= r) {
      if (i === l - 1) {
        pNode = p;
      }
      if (i === l) {
        lNode = p;
      }
      if (i === r) {
        rNode = p;
      }
      p = p.next;
      i++;
    }
    return { pNode, lNode, rNode };
  }

  function reverse(lNode, rNode) {
    let p = lNode;
    let temp = rNode.next;
    while (p !== rNode) {
      const next = p.next;
      p.next = temp;
      temp = p;
      p = next;
    }
    rNode.next = temp;
  }

  const { pNode, lNode, rNode } = findNode(head, left, right);
  reverse(lNode, rNode);
  if (pNode) {
    pNode.next = rNode;
  } else {
    head = rNode;
  }
  return head;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

const node5 = new ListNode(5, null);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
const head = reverseBetween(node1, 2, 4)

let p = head;
while (p) {
  console.log(p.val);
  p = p.next;
}