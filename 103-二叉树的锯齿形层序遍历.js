/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const result = [];
  let vals = [];
  let isOdd = true;
  let queue = [];
  let nextQueue = [];
  root && queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    isOdd ? vals.push(node.val) : vals.unshift(node.val);
    node.left && nextQueue.push(node.left);
    node.right && nextQueue.push(node.right);
    if (queue.length === 0) {
      result.push(vals);
      vals = [];
      queue = nextQueue;
      nextQueue = [];
      isOdd = !isOdd;
    }
  }
  return result;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node3.right = node5;

console.log(zigzagLevelOrder(node1));