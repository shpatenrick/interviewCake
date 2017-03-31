let max_profit = (stock_prices_yesterday) => {
  if (stock_prices_yesterday.length < 2) {
    return "One 1 price from yesterday. Unable to make profit."
  }
  var min = stock_prices_yesterday[0];
  var max = stock_prices_yesterday[1] - stock_prices_yesterday[0];
  var profit;
  for (var i = 1; i < stock_prices_yesterday[i].length; i++) {
    min = Math.min(min, stock_prices_yesterday[i]);
    profit = stock_prices_yesterday[i] - min;
    max = Math.max(max, profit);
  }
  return max;
}