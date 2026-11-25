var largestAltitude = function (gain) {
  let n = gain.length;

  let prefixSum = new Array(n + 1);

  prefixSum[0] = 0;

  for (let i = 1; i <= gain.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + gain[i - 1];
  }

  return Math.max(...prefixSum);
};

console.log(largestAltitude([-5, 1, 5, 0, -7])); 