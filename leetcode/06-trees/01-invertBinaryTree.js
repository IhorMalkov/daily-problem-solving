class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var invertTree = function (root) {
  if (root === null) {
    return null;
  }

  let temp = root.right;
  root.right = root.left;
  root.left = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

let root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

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

console.log("BEFORE:");
printTree(root);

invertTree(root);

console.log("AFTER:");
printTree(root);
