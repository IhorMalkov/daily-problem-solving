class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(4);

root.left = new TreeNode(2);
root.right = new TreeNode(7);

root.left.right = new TreeNode(3);
root.left.left = new TreeNode(1);

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

var searchBST = function (root, val) {
  if (root === null) {
    return null;
  }

  if (root.val === val) {
    return root;
  }

  if (val < root.val) {
    return searchBST(root.left, val);
  }

  if (val > root.val) {
    return searchBST(root.right, val);
  }
};

console.log("Tree");
printTree(root);

let result = searchBST(root, 3);

if (result !== null) {
  console.log("Found:", result.val);
} else {
  console.log("Value not found");
}