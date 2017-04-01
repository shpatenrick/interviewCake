var merge_ranges = (array) => {
  var sorted = array.sort();
  var result = [];
  var prev_start = sorted[0][0];
  var prev_end = sorted[0][1];
  for (var i = 1; i < array.length; i++) {
    if (array[i][0] <= prev_end) {
      // merge curr start into prev
      // set prev end to max of prev end and curr end
      prev_end = Math.max(prev_end, array[i][1]);
    } else {
      result.push([prev_start, prev_end]);
      prev_end = array[i][1];
      prev_start = array[i][0];
    }
  }
  result.push([prev_start, prev_end]);
};