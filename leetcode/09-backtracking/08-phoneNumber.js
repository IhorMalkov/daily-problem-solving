var letterCombinations = function (digits) {
  if (!digits.length) {
    return [];
  }

  const digitToLetter = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];

  function backtrack(i, comb) {
    if (i === digits.length) {
      res.push(comb);
      return;
    }

    for (const letter of digitToLetter[digits[i]]) {
      backtrack(i + 1, comb + letter);
    }
  }

  backtrack(0, "");

  return res;
};

console.log(letterCombinations("23"));
