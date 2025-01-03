/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let start = intervals[0][0];
  let end = intervals[0][1];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= start && intervals[i][0] <= end) {
      end = Math.max(end, intervals[i][1]);
    } else {
      result.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
    }
    if (i === intervals.length - 1) {
      result.push([start, end]);
    }
  }
  return result;
};

const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals));