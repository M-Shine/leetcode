/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const n = gas.length;
  let i = 0;
  while (i < n) {
    let remain = 0;
    let j = 0;
    while (j < n) {
      const index = (i + j) % n;
      remain += gas[index] - cost[index];
      if (remain < 0) {
        break;
      }
      j++;
    }
    if (j === n) {
      return i;
    } else {
      i = i + j + 1;
    }
  }
  return -1;
};

const gas = [1,2,3,4,5], cost = [3,4,5,1,2];
console.log(canCompleteCircuit(gas, cost));

const gas2 = [2], cost2 = [2];
console.log(canCompleteCircuit(gas2, cost2));

const gas3 = [2,3,4], cost3 = [3,4,3];
console.log(canCompleteCircuit(gas3, cost3));

const gas4 = [1,2,3,4,3,2,4,1,5,3,2,4], cost4 = [1,1,1,3,2,4,3,6,7,4,3,1];
console.log(canCompleteCircuit(gas4, cost4));