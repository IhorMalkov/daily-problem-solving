var maxProductPair = function (nums, target) {
  let map = new Map();
  let res = [];
  let maxProduct = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let sum = target - nums[i];
    if (map.has(sum) && nums[map.get(sum)] > nums[i]) {
      let product = nums[i] * sum;

      if (product > maxProduct) {
        maxProduct = product;
        res = [map.get(sum), i];
      }
    }
  }

  return res.length > 0 ? res : [-1, -1];
};

console.log(maxProductPair([1, 2, 3, 4, 5], 9));