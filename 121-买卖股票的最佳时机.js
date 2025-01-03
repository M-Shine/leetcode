var maxProfit = function(prices) {
  const len = prices.length;
  if (len < 2) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < len; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));