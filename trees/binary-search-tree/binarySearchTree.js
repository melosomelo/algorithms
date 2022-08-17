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
    if (node === null)
      return { key, value: value ?? key, left: null, right: null };
    if (key === node.key) node.value = value;
    else if (key > node.key) node.right = this.#insert(node.right, key, value);
    else node.left = this.#insert(node.left, key, value);

    return node;
  }

  delete(key) {
    this.#root = this.#del(this.#root, key);
  }

  #del(node, key) {
    if (node === null) return null;
    if (node.key > key) node.left = this.#del(node.left, key);
    else if (node.key < key) node.right = this.#del(node.right, key);
    else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;
      const succ = this.#sucessor(node);
      succ.right = this.#del(node.right, succ.key);
      succ.left = node.left;
      return succ;
    }
    return node;
  }

  #sucessor(node) {
    let current = node.right;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  print() {
    console.log(this.#root);
  }
}
