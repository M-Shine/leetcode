/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let result = '';
  let continueCount = 0;
  const stack = path.split('/');
  while (stack.length) {
    const item = stack.pop();
    if (item === '' || item === '.') {
      continue;
    } else if (item === '..') {
      continueCount++;
    } else {
      if (continueCount > 0) {
        continueCount--;
        continue;
      } else {
        result = `/${item}${result}`;
      }
    }
  }
  return result || '/';
};

const path = '/home//foo/';
console.log(simplifyPath(path));

const path2 = '/a/./b/../../c/';
console.log(simplifyPath(path2));

const path3 = '/a/../../b/../c//.//';
console.log(simplifyPath(path3));

const path4 = '/home/';