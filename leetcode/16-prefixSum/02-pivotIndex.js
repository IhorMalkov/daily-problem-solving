var pivotIndex = function (nums) {
  let total = nums.reduce((acc, curr) => acc + curr);
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum = total - leftSum - nums[i];

    if (rightSum === leftSum) {
      return i;
    }
    leftSum = leftSum + nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));