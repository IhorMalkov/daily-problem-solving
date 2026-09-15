var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;

  while (left < right) {
    res = Math.max(res, (right - left) * Math.min(height[left], height[right]));

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));