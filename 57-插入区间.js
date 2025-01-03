/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const result = [];

  let i = 0;

  for (; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
    } else {
      break;
    }
  }

  if (i === intervals.length) {
    result.push(newInterval);
    return result;
  }

  if (intervals[i][0] > newInterval[1]) {
    result.push(newInterval);
    result.push(...intervals.slice(i));
    return result;
  }

  const start = Math.min(intervals[i][0], newInterval[0]);
  for (; i < intervals.length; i++) {
    if (intervals[i][0] > newInterval[1]) {
      break;
    }
  }
  const end = Math.max(intervals[i - 1][1], newInterval[1]);
  result.push([start, end]);

  result.push(...intervals.slice(i));

  return result;
};

const intervals = [[1, 3], [6, 9]];
const newInterval = [2, 5];
console.log(insert(intervals, newInterval));

const intervals2 = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
const newInterval2 = [4, 8];
console.log(insert(intervals2, newInterval2));