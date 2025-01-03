/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
  let queue = [];
  let nextQueue = [];
  let nextNode = null;
  root && queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    node.right && nextQueue.push(node.right);
    node.left && nextQueue.push(node.left);
    node.next = nextNode;
    nextNode = node;
    if (queue.length === 0) {
      nextNode = null;
      queue = nextQueue;
      nextQueue = [];
    }
  }
  return root;
};


function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node7;
console.log(connect(node1));