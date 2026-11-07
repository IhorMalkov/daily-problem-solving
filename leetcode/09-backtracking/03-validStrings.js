var validStrings = function (n) {
  const ans = [];

  function solve(ans, n, temp) {
    if (temp.length === n) {
      ans.push(temp);
      return;
    }

    if (temp.length === 0 || temp[temp.length - 1] !== "0")
      solve(ans, n, temp + "0");

    solve(ans, n, temp + "1");
  }

  solve(ans, n, "");
  return ans;
};

console.log(validStrings(3));