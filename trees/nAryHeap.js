function nAryHeap(n) {
  if (n < 2) throw new Error("parameter `n` must be greater or equal than 2!");
  return class {
    #array = [null];
    #n = n;

    // get the array index of the jth child of the element at index i
    #getChildIndex(i, j) {
      return this.#n * i - this.#n + 2 + j - 1;
    }

    // get the value of the jth child of the element at index i
    #getChild(i, j) {
      return this.#array[this.#getChildIndex(i, j)];
    }

    #getFather(i) {
      return this.#array[this.#getFatherIndex(i)];
    }

    #getFatherIndex(i) {
      return Math.floor((i + this.#n - 2) / this.#n);
    }

    #swap(i, j) {
      let aux = this.#array[i];
      this.#array[i] = this.#array[j];
      this.#array[j] = aux;
    }

    insert(el) {
      this.#array.push(el);
      let i = this.#array.length - 1;
      while (
        this.#getFather(i) < this.#array[i] &&
        this.#getFather(i) !== null
      ) {
        this.#swap(i, this.#getFatherIndex(i));
        i = this.#getFatherIndex(i);
      }
    }

    size() {
      return this.#array.length - 1;
    }

    print() {
      console.log(this.#array);
    }

    removeMax() {
      if (this.size() === 0) return;
      if (this.size() === 1) return this.#array.pop();

      this.#swap(1, this.size());
      const max = this.#array.pop();
      let i = 1;
      const N = this.size();
      while (this.#getChildIndex(i, 1) < N) {
        let j = this.#getChildIndex(i, 1);
        for (let k = 2; k <= this.#n; k++) {
          const kthChild = this.#getChild(i, k);
          if (kthChild === undefined) break;
          if (kthChild > this.#array[j]) {
            j = this.#getChildIndex(i, k);
          }
        }
        if (this.#array[i] > this.#array[j]) break;
        this.#swap(i, j);
        i = j;
      }
      return max;
    }
  };
}
