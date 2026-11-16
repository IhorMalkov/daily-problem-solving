class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const root1 = new TreeNode(1);
const root2 = new TreeNode(2);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);

var leafSimilar = function (root1, root2) {
  dfs = function (node, leaves) {
    if (node != null) {
      if (node.left == null && node.right == null) {
        leaves.push(node.val);
      }
      dfs(node.left, leaves);
      dfs(node.right, leaves);
    }
  };

  let leaves1 = [];
  let leaves2 = [];

  dfs(root1, leaves1);
  dfs(root2, leaves2);

  return (
    leaves1.length == leaves2.length &&
    leaves1.every((v, i) => v === leaves2[i])
  );
};

console.log(leafSimilar(root1, root2));