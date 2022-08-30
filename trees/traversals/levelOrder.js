function levelOrderTraversal(root) {
  const queue = [root];
  while (queue.length > 0) {
    let current = queue[0];
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
    console.log(queue.shift().value);
  }
}
