/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!word) return true;

  const row = board.length;
  if (!row) return false;
  const col = board[0].length;
  const visit = new Set();

  let direction = 1;
  
  function backtrack(rowIndex, colIndex, wordIndex = 0) {
    const key = `${rowIndex}-${colIndex}`;
    if (rowIndex < 0 || rowIndex >= row || colIndex < 0 || colIndex >= col) return false;
    if (visit.has(key)) return false;
    if (board[rowIndex][colIndex] !== word[wordIndex]) return false;
    if (
      (direction === 1 && wordIndex === word.length - 1)
      || (direction === -1 && wordIndex === 0)
    ) return true;
    visit.add(key);
    wordIndex += direction;
    const result = backtrack(rowIndex - 1, colIndex, wordIndex)
      || backtrack(rowIndex + 1, colIndex, wordIndex)
      || backtrack(rowIndex, colIndex - 1, wordIndex)
      || backtrack(rowIndex, colIndex + 1, wordIndex);
    visit.delete(key);
    return result;
  }

  // for (let i = 0; i < row; i++) {
  //   for (let j = 0; j < col; j++) {
  //     if (backtrack(i, j)) return true;
  //   }
  // }
  // return false;

  const charMap = new Map();
  const firstChar = word[0];
  const lastChar = word[word.length - 1];
  const firstCharIndexes = [];
  const lastCharIndexes = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const char = board[i][j];
      charMap.set(char, (charMap.get(char) || 0) + 1);
      if (char === firstChar) firstCharIndexes.push([i, j]);
      if (char === lastChar) lastCharIndexes.push([i, j]);
    }
  }
  // 检查word中每个字符在board中出现的次数是否大于等于word中该字符出现的次数
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!charMap.has(char)) return false;
    if (charMap.get(char) < word.split(char).length - 1) return false;
  }
  // 看两端的字符哪个出现的次数少就从少的那边开始遍历，以减少递归次数
  let indexes = firstCharIndexes;
  if (firstCharIndexes.length > lastCharIndexes.length) {
    direction = -1;
    indexes = lastCharIndexes;
  }
  for (let i = 0; i < indexes.length; i++) {
    const [rowIndex, colIndex] = indexes[i]
    if (backtrack(rowIndex, colIndex, direction === 1 ? 0 : word.length - 1)) return true;
  }
  return false;
};

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
const word = 'ABCCED';
console.log(exist(board, word));