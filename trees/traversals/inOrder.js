function inOrderTraversal(node) {
  if (node === null) return;
  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

function iterativeInOrderTraversal(root) {
  let current = root;
  const checkpoints = [];
  outer: while (true) {
    while (current.left != null) {
      checkpoints.push(current);
      current = current.left;
    }
    console.log(current.value);
    while (current.right == null) {
      if (checkpoints.length === 0) break outer;
      current = checkpoints.pop();
      console.log(current.value);
    }
    current = current.right;
  }
}
