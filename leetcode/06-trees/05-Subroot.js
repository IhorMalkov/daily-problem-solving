class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let p = new TreeNode(4);

p.left = new TreeNode(2);

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

var isSubtree = function (root, subRoot) {
  const sort = (node) => {
    if (!node) return ",#";
    return `,${node.val}` + sort(node.left) + sort(node.right);
  };

  const rootStr = sort(root);
  const subStr = sort(subRoot);
  return rootStr.includes(subStr);
};

console.log(isSubtree(p, p));