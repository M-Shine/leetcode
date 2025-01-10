/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  /**
   * 构建带权重的有向图
   */
  function Cell(key, value) {
    this.key = key;
    this.value = value;
  }
  const graph = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const value = values[i];
    const aCellList = graph.get(a) || [];
    const bCellList = graph.get(b) || [];
    // 根据条件 a / b = value，构建两条边 a -> b, b -> a, 边的权重分别为 value, 1/value
    aCellList.push(new Cell(b, value));
    bCellList.push(new Cell(a, 1 / value));
    graph.set(a, aCellList);
    graph.set(b, bCellList);
  }

  /**
   * 求值
   */
  const result = new Array(queries.length).fill(-1);
  function getResult(cur, target, resultIndex, curResult = 1, visited = new Set()) {
    // 分子或分母不在给定条件中，无法求值
    if (!graph.has(cur) || !graph.has(target)) {
      return;
    }
    // 访问过的节点，说明存在环
    if (visited.has(cur)) {
      return;
    }
    visited.add(cur);
    // cur === target，到达目标节点，记录结果
    if (cur === target) {
      result[resultIndex] = curResult;
      return;
    }
    // 遍历相邻节点
    const cellList = graph.get(cur);
    for (let i = 0; i < cellList.length; i++) {
      const cell = cellList[i];
      getResult(cell.key, target, resultIndex, curResult * cell.value, visited);
    }
  }
  for (let i = 0; i < queries.length; i++) {
    const [a, b] = queries[i];
    getResult(a, b, i);
  }

  return result;
}

const equations = [["a","b"],["b","c"]];
const values = [2.0,3.0];
const queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];
console.log(calcEquation(equations, values, queries));

const equations2 = [["a","b"],["b","c"],["bc","cd"]];
const values2 = [1.5,2.5,5.0];
const queries2 = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]];
console.log(calcEquation(equations2, values2, queries2));

const equations3 = [["a","b"]];
const values3 = [0.5];
const queries3 = [["a","b"],["b","a"],["a","c"],["x","y"]];
console.log(calcEquation(equations3, values3, queries3));