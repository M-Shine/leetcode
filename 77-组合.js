/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = [];
  
  function backtrack(path = []) {
    let i = path.length > 0 ? path[path.length - 1] + 1 : 1;
    for (; i <= n; i++) {
      const p = [...path, i];
      if (p.length === k) {
        result.push(p);
        continue;
      }
      backtrack(p);
    }
  }

  backtrack();
  return result;
};

const n = 4, k = 2;
console.log(combine(n, k));

// const n = 1, k = 1;
// console.log(combine(n, k));