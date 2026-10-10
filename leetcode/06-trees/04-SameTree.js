class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let p = new TreeNode(4);

p.left = new TreeNode(2);

let q = new TreeNode(4);
q.left = new TreeNode(2);

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

var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }

  if (p && q && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  return false;
};

console.log("Tree");
printTree(p);
console.log("Tree2");
printTree(q);

console.log(isSameTree(p,q))