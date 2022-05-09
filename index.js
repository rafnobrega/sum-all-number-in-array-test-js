function sumItems(array) {
  let total = 0;
  // RECURSIVE CASE: Sum all the numbers in the array
  for (let ele of array) {
    if (Array.isArray(ele)) {
      total += sumItems(ele);
    } else {
    total += ele;
  }}
  return total;
}

module.exports = sumItems;
