var hIndex = function(citations) {
  citations.sort((a, b) => b - a);
  let h = 0;
  for (; h < citations.length; h++) {
    if (citations[h] < h + 1) {
      return h;
    }
  }
  return h;
};

console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1, 3, 1]));
console.log(hIndex([0]));
console.log(hIndex([3, 2]));

