var isSubsequence = function (s, t) {
  let sRight = s.length - 1;
  let tRight = t.length - 1;
  let tArr = [...t];

  while (tRight >= 0) {
    if (s[sRight] === tArr[tRight]) {
      tRight--;
      sRight--;
    } else {
      tRight--;
    }
  }

  return sRight === -1;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc")); 