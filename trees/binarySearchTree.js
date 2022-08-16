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

  add(key, value) {
    this.#root = this.#insert(this.#root, key, value);
  }

  #insert(node, key, value) {
    if (node === null) return { key, value, left: null, right: null };
    if (key === node.key) node.value = value;
    else if (key > node.key) node.right = this.#insert(node.right, key, value);
    else node.left = this.#insert(node.left, key, value);

    return node;
  }

  print() {
    console.log(this.#root);
  }
}

const bst = new BST();
bst.add(32, 32);
bst.add(45, 45);
bst.add(10, 10);
bst.print();
