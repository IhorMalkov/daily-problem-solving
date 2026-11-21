var maxAreaOfIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let maxIsland = 0;

  const dfs = (r, c) => {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      visited.has(`${r}, ${c}`) ||
      grid[r][c] === 0
    ) {
      return 0;
    }

    visited.add(`${r}, ${c}`);

    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1 && !visited.has(`${r},${c}`)) {
        maxIsland = Math.max(maxIsland, dfs(r, c));
      }
    }
  }

  return maxIsland;
};

console.log(maxAreaOfIsland([[0, 1], [1, 1]]));