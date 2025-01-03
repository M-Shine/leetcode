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
 */
var BSTIterator = function(root) {
  this.arr = [];
  this.index = 0;
  const inOrder = (root) => {
    if (!root) return;
    inOrder(root.left);
    this.arr.push(root.val);
    inOrder(root.right);
  }
  inOrder(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.arr[this.index++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.index < this.arr.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */