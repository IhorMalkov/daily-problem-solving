class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.left.right = new TreeNode(2);
root.right = new TreeNode(4);

var kthSmallest = function (root, k) {
  const inorder = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    inorder.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  return inorder[k - 1];
};

console.log(kthSmallest(root, 3));