var characterReplacement = function (s, k) {
  let map = new Map();
  let totalLength = 0;
  let l = 0;
  let res = 0;

  for (let r = 0; r < s.length; r++) {
    map.set(s[r], (map.get(s[r]) || 0) + 1);

    totalLength = Math.max(totalLength, map.get(s[r]));

    while (r - l + 1 - totalLength > k) {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }

    res = Math.max(res, r - l + 1);
  }
  return res;
};

console.log(characterReplacement("AABABBA", 1)); // 4
console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABBBBA", 2)); // 5