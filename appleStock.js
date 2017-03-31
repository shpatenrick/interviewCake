let max_profit = (stock_prices_yesterday) => {
  var min = stock_prices_yesterday[0];
  var max = 0;
  var profit;
  for (var i = 0; i < stock_prices_yesterday[i].length; i++) {
    min = Math.min(min, stock_prices_yesterday[i]);
    profit = stock_prices_yesterday[i] - min;
    max = Math.max(max, profit);
  }
  return max;
}