var subsetsWithDup = function (nums) {
  let res = [];
  let curr = [];
  let start = 0;

  function backtrack(start) {
    res.push([...curr]);

    nums.sort((a, b) => a - b);

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      curr.push(nums[i]);

      backtrack(i + 1);

      curr.pop();
    }
  }

  backtrack(0);
  return res;
};

console.log(subsetsWithDup([1, 2, 2]));