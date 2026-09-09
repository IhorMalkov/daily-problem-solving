var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let longestSeq = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentSeq = 1;
      let currNum = num;

      while (set.has(currNum + 1)) {
        currentSeq++;
        currNum++;
      }
      longestSeq = Math.max(longestSeq, currentSeq);
    }
  }
  return longestSeq;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));