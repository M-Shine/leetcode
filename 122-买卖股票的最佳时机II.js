var maxProfit = function(prices) {
  const len = prices.length;
  if (len < 2) return 0;

  let count = 0;
  let i = 0, j = 1;
  for (; j < len; j++) {
    while (j < len && prices[j] > prices[j - 1]) {
      j++;
    }
    count += prices[j - 1] - prices[i];
    i = j;
  }
  return count;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));