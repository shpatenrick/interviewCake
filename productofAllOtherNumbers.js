var get_products_of_all_ints_except_at_index = (array) => {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result[i] = 1;
  }
  // get prod of all ints before index
  var prod = 1;
  for (var i = 0; i < array.length; i++) {
    result[i] = prod;
    prod *= array[i];
  }
  // get prod of all ints after index
  for (var i = array.length - 1; i >= 0; i--) {
    result[i] *= prod;
    prod *= array[i];
  }
  return result;
}