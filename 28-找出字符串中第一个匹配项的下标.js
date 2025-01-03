/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.length) === needle) {
        return i;
      }
    }
  }
  
  return -1;
};

const haystack = 'sadbutsad';
const needle = 'sad';
console.log(strStr(haystack, needle));

const haystack2 ='leetcode';
const needle2 ='leeto';
console.log(strStr(haystack2, needle2));

const haystack3 ='leetcodeGood';
const needle3 ='code';
console.log(strStr(haystack3, needle3));

const haystack4 ='leetcod';
const needle4 ='code';
console.log(strStr(haystack4, needle4));