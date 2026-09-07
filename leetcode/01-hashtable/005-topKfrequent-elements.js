var topKFrequent = function (nums, k) {
  let map = new Map();
  let bucket = [];
  let answ = [];

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [num, freq] of map) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) answ.push(...bucket[i]);
    if (answ.length == k) break;
  }
  return answ;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));