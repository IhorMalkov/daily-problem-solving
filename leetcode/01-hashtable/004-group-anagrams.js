var groupAnagrams = function (strs) {
  let answ = {};

  for (const s of strs) {
    let key = s.split("").sort().join("");

    if (!answ[key]) {
      answ[key] = [];
    }
    answ[key].push(s);
  }

  return Object.values(answ);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));