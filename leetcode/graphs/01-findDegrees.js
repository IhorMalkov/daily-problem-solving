var findDegrees = function (matrix) {
  let ans = new Array(matrix.length).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    let degree = 0;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 1) {
        degree++;
      }
    }
    ans[i] = degree;
  }
  return ans;
};

console.log(findDegrees([[0, 1, 0], [1, 0, 1], [0, 1, 0]]));