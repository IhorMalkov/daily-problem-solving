var pivotArray = function (nums, pivot) {
  const less = [],
    equal = [],
    greater = [];
  for (const num of nums) {
    if (num < pivot) less.push(num);
    else if (num === pivot) equal.push(num);
    else greater.push(num);
  }
  return [...less, ...equal, ...greater];
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));