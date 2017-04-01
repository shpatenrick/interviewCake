var highest_product = array => {
  // find max 3 times
  var maxs = [];
  var i = 0;
  while (i < 3) {
    maxs.push(Math.max.apply(null, array));
    array.splice(array.indexOf(maxs[i]), 1);
    i++;
  }
  return maxs[0] * maxs[1] * maxs[2];
}