var climbStairs = function (n) {
  let memo = new Map();

  function helper(n) {
    if (n <= 3) {
      return n;
    }

    if (memo.has(n)) {
      return memo.get(n);
    }
    let result = helper(n - 1) + helper(n - 2);
    memo.set(n, result);
    return result;
  }

  return helper(n);
};

console.log(climbStairs(6));