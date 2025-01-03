/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
  const map = new Map();
  const h = new _Node();
  let p = h;
  let cur = head;
  while (cur) {
    const newNode = new _Node(cur.val);
    p.next = newNode;
    map.set(cur, newNode);
    p = p.next;
    cur = cur.next;
  }
  cur = head;
  p = h.next;
  while (cur) {
    p.random = map.get(cur.random) || null;
    p = p.next;
    cur = cur.next;
  }
  return h.next;
};