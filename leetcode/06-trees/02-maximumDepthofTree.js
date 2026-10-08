class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(3);

root.left = new TreeNode(9);
root.right = new TreeNode(20);

root.right.right = new TreeNode(15);
root.right.left = new TreeNode(7);

function printTree(root) {
  if (root === null) {
    return;
  }

  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();

    console.log(node.val);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
}

var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

console.log("Tree:");
printTree(root);

console.log("Max depth:");
console.log(maxDepth(root));