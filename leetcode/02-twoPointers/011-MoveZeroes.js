var moveZeroes = function (nums) {
  let l = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] != 0) {
      let temp = nums[right];
      nums[right] = nums[l];
      nums[l] = temp;
      l++
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));