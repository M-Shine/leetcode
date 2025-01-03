/**
 * 找区间交集
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort((a, b) => a[0] - b[0]);
  
  const result = [];

  let target = points[0];
  for (let i = 1; i < points.length; i++) {
    if (target[1] < points[i][0]) {
      result.push(target);
      target = points[i];
    } else {
      target = [Math.max(target[0], points[i][0]), Math.min(target[1], points[i][1])];
    }
  }
  result.push(target);

  return result.length;
};

const points = [[10,16],[2,8],[1,6],[7,12]];
console.log(findMinArrowShots(points));

const points2 = [[1,2],[3,4],[5,6],[7,8]];
console.log(findMinArrowShots(points2));

const points3 = [[1,2],[2,3],[3,4],[4,5]];
console.log(findMinArrowShots(points3));