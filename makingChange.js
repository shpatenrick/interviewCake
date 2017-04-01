var makeChange = (amount, denom) => {
  var result = [1];
  // iterate through denominations
  // get combinations of all denoms that equal amount

  for (var i = 1; i <= amount; i++) {
    result[i] = 0;
  }
  for (var i = 0; i < denom.length; i++) {
    var coin = denom[i];
    for (var j = coin; j <= amount; j++) {
      amount_remaining = j - coin;
      result[j] += result[amount_remaining];
    }
  }
  return result[amount];
}