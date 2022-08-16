class BST {
  #root = null;

  get(key) {
    return this.#search(this.#root, key);
  }

  #search(node, key) {
    if (node === null) return null;

    if (key === node.key) return node.value;
    else if (key < node.key) return this.#search(node.left, key);
    else if (key > node.key) return this.#search(node.right, key);
  }
}
