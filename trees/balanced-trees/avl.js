class AVLNode {
  constructor(value) {
    this.value = value;
    this.bf = 0; // balance factor
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  #root = null;

  add(value) {
    this.#root = this.#insert(this.#root, null, value);
  }

  #insert(node, parent, value) {
    if (node === null) {
      node = new AVLNode(value);
      if (parent !== null) {
        if (value > parent.value) parent.bf += 1;
        else parent.bf -= 1;
      }
      return node;
    }

    let prevBf = node.bf;
    if (value > node.value) {
      node.right = this.#insert(node.right, node, value);
      if (parent !== null && prevBf >= 0 && node.bf > prevBf) {
        if (node.value > parent.value) parent.bf += 1;
        else parent.bf -= 1;
      }

      if (node.bf === 2) {
        let w = node.right;
        if (value > w.value) node = this.#rotateLeft(node, parent);
        else node = this.#rotateRightLeft(node, parent);
      }
    } else if (value < node.value) {
      node.left = this.#insert(node.left, node, value);
      if (parent !== null && prevBf <= 0 && node.bf < prevBf) {
        if (node.value > parent.value) parent.bf += 1;
        else parent.bf -= 1;
      }
      if (node.bf === -2) {
        let w = node.left;
        if (value < w.value) node = this.#rotateRight(node, parent);
        else node = this.#rotateLeftRight(node, parent);
      }
    }
    return node;
  }

  delete(value) {
    this.#root = this.#remove(this.#root, null, value);
  }

  #remove(node, parent, value) {
    if (node === null) return null;
    let prevBf = node.bf;
    if (value > node.value) {
      node.right = this.#remove(node.right, node, value);
      if (parent !== null && prevBf === 1 && node.bf === 0) {
        if (node.value > parent.value) parent.bf -= 1;
        else parent.bf += 1;
      }

      if (node.bf === -2) {
        let w = node.left;
        if (w.bf <= 0) node = this.#rotateRight(node, parent);
        else node = this.#rotateLeftRight(node, left);
      }
    } else if (value < node.value) {
      node.left = this.#remove(node.left, node, value);
      if (parent !== null && prevBf === -1 && node.bf === 0) {
        if (node.value > parent.value) parent.bf -= 1;
        else parent.bf += 1;
      }

      if (node.bf === 2) {
        let w = node.right;
        if (w.bf >= 0) node = this.#rotateLeft(node, parent);
        else node = this.#rotateRightLeft(node, parent);
      }
    } else {
      if (parent !== null && node.value > parent.value) parent.bf -= 1;
      else if (parent !== null) parent.bf += 1;

      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      const succ = this.#successor(node);
      succ.right = this.#remove(node.right, node, succ.value);
      succ.left = node.left;
      succ.bf = node.bf;
      return succ;
    }
    return node;
  }

  #successor(node) {
    let current = node.right;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  #rotateLeft(v, parent) {
    const w = v.right;
    const t2 = w.left;
    w.left = v;
    v.right = t2;
    if (parent !== null) {
      if (v.value > parent.value) parent.right = w;
      else parent.left = w;
    }

    if (w.bf === 0) {
      w.bf = -1;
      v.bf = 1;
    } else {
      v.bf = 0;
      w.bf = 0;
    }

    return w;
  }

  #rotateRightLeft(v, parent) {
    const w = v.right;
    const x = w.left;
    w.left = x.right;
    x.right = w;
    v.right = x;
    v.right = x.left;
    x.left = v;
    if (parent !== null) {
      if (v.value > parent.value) parent.right = x;
      else parent.left = x;
    }

    if (x.bf === 0) {
      v.bf = 0;
      w.bf = 0;
    } else if (x.bf === 1) {
      v.bf = -1;
      w.bf = 0;
    } else {
      v.bf = 0;
      w.bf = 1;
    }
    x.bf = 0;
    return x;
  }

  #rotateRight(v, parent) {
    const w = v.left;
    const t2 = w.right;
    w.right = v;
    v.left = t2;
    if (parent !== null) {
      if (v.value > parent.value) parent.right = w;
      else parent.left = w;
    }

    if (w.bf === 0) {
      w.bf = 1;
      v.bf = -1;
    } else {
      v.bf = 0;
      w.bf = 0;
    }

    return w;
  }

  #rotateLeftRight(v, parent) {
    const w = v.left;
    const x = w.right;
    x.left = w;
    w.right = x.left;
    v.left = x;
    v.left = x.right;
    x.right = v;
    if (parent !== null) {
      if (v.value > parent.value) parent.right = x;
      else parent.left = x;
    }

    if (x.bf === 0) {
      v.bf = 0;
      w.bf = 0;
    } else if (x.bf === 1) {
      v.bf = 0;
      w.bf = -1;
    } else {
      v.bf = 1;
      w.bf = 0;
    }
    x.bf = 0;
    return x;
  }

  print() {
    const queue = [this.#root];
    while (queue.length > 0) {
      let current = queue[0];
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
      const first = queue.shift();
      console.log(`value ${first.value} with bf ${first.bf}`);
    }
  }
}

const T = new AVLTree();
T.add(1);
T.add(2);
T.add(3);
T.add(4);
T.delete(1);
T.print();
