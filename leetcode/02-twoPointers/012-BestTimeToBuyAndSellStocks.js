var maxProfit = function (prices) {
  let result = 0;
  let lowestPrice = prices[0];

  for (let left = 0; left < prices.length; left++) {
    let profit = 0;
    lowestPrice = Math.min(prices[left], lowestPrice);
    profit = prices[left] - lowestPrice;

    result = Math.max(profit, result);
  }
  return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); 