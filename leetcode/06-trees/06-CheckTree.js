class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
var checkTree = function (root) {
  if (root.left.val + root.right.val === root.val) {
    return true;
  }
  return false;
};

let p = new TreeNode(4);
p.left = new TreeNode(2);
p.right = new TreeNode(2);

console.log(checkTree(p));