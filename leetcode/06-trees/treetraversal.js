inorderTraversal =
function(root) {
const res = [l;
function
inorder (node) {
if (!node) {
return;

inorder(node.left);
res.push(node.val);
inorder (node.right);
} inorder (root);
return res;