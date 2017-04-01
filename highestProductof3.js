var highest_product = array => {
  var max_prod3 = array[0]*array[1]*array[2];
  var max_prod2 = array[0] * array[1];
  var min_prod2 = array[0] * array[1];
  var max = Math.max(array[0], array[1]);
  var min = Math.min(array[0], array[1]);
  for (var i = 2; i < array.length; i++) {
    curr = array[i];
    max_prod3 = Math.max(max_prod3, curr * max_prod2, curr * min_prod2);
    max_prod2 = Math.max(max_prod2, curr * max, curr * min);
    min_prod2 = Math.min(min_prod2, curr * max, curr * min);
    max = Math.max(max, curr);
    min = Math.min(min, curr);
  }
  return max_prod3;
}
  // // find max 3 times
  // var maxs = [];
  // var i = 0;
  // while (i < 3) {
  //   maxs.push(Math.max.apply(null, array));
  //   array[array.indexOf(maxs[i])] = -Infinity;
  //   i++;
  // }
  // return maxs[0] * maxs[1] * maxs[2];