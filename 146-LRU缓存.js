/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.createNode = (k, v) => ({k, v, prev: null, next: null});
  this.head = this.createNode(null, null);
  this.tail = this.createNode(null, null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.addToHead = node => {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
  this.addToTail = node => {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
  }
  this.removeNode = node => {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    // 把node移到头部
    const node = this.map.get(key);
    // 1.先把node从链表中删除
    this.removeNode(node);
    // 2.再把node插入到头部
    this.addToHead(node);
    return node.v;
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.v = value;
    this.removeNode(node);
    this.addToHead(node);
    return;
  }

  if (this.map.size === this.capacity) {
    const node = this.tail.prev;
    this.removeNode(node);
    this.map.delete(node.k);
  }
  const node = this.createNode(key, value);
  this.addToHead(node);
  this.map.set(key, node);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const cache = new LRUCache( 2 /* 缓存容量 */ );
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));    // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
console.log(cache.get(1));       // 返回 -1 (未找到)
console.log(cache.get(3));       // 返回  3
console.log(cache.get(4));       // 返回  4
