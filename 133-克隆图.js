/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
  const map = new Map();

  function dfs(node) {
    if (!node) return null;
    if (map.has(node.val)) return map.get(node.val);
    const newNode = new _Node(node.val);
    map.set(node.val, newNode);
    for (let i = 0; i < node.neighbors.length; i++) {
      newNode.neighbors.push(dfs(node.neighbors[i]));
    }
    return newNode;
  }

  return dfs(node);
};