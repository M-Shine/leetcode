/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var sortList = function(head) {
//   const arr = [];
//   let p = head;
//   while (p) {
//     arr.push({ key: p.val, value: p });
//     p = p.next;
//   }
//   arr.sort((a, b) => a.key - b.key);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].value.next = arr[i + 1]?.value || null;
//   }
//   return arr[0]?.value || null;
// };

var sortList = function(head) {
  // 合并有序链表
  const mergeOrderedList = (l1, l2) => {
    const head = new ListNode(-1);
    let ph = head;
    let p1 = l1;
    let p2 = l2;
    while (p1 && p2) {
      if (p1.val < p2.val) {
        ph.next = p1;
        p1 = p1.next;
      } else {
        ph.next = p2;
        p2 = p2.next;
      }
      ph = ph.next;
    }
    ph.next = p1 || p2;
    return head.next;
  }

  // 找到中间节点
  const findMiddle = (l) => {
    let slow = l;
    let fast = l.next;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  const sort = (h) => {
    if (!h || !h.next) return h;
    const middle = findMiddle(h);
    const rightHead = middle.next;
    middle.next = null;
    const left = sort(h);
    const right = sort(rightHead);
    return mergeOrderedList(left, right);
  }

  return sort(head);
};