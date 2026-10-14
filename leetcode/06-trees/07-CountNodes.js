class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var countNodes = function (root) {
  if (!root) {
    return 0;
  }

  let getDepth = (node) => {
    let depth = 0;
    while (node) {
      node = node.left;
      depth++;
    }
    return depth;
  };

  let leftDepth = getDepth(root.left);
  let rightDepth = getDepth(root.right);

  if (leftDepth === rightDepth) {
    return (1 << leftDepth) + countNodes(root.right);
  } else {
    return (1 << rightDepth) + countNodes(root.left);
  }
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(countNodes(root));