class BinaryHeap {
  #array = [null];

  #left(i) {
    return this.#array[i * 2];
  }

  #right(i) {
    return this.#array[i * 2 + 1];
  }

  #father(i) {
    return this.#array[Math.floor(i / 2)];
  }

  #swap(i, j) {
    let aux = this.#array[i];
    this.#array[i] = this.#array[j];
    this.#array[j] = aux;
  }

  insert(el) {
    this.#array.push(el);
    let i = this.#array.length - 1;
    while (this.#father(i) < this.#array[i] && this.#father(i) !== null) {
      this.#swap(i, Math.floor(i / 2));
      i = Math.floor(i / 2);
    }
  }

  size() {
    return this.#array.length - 1;
  }

  removeMax() {
    if (this.size() === 0) return;
    if (this.size() === 1) return this.#array.pop();

    this.#swap(1, this.size());
    const max = this.#array.pop();
    let i = 1;
    const N = this.size();
    while (i * 2 <= N) {
      let j = i * 2;
      if (j < N && this.#left(i) < this.#right(i)) j++;
      if (this.#array[i] > this.#array[j]) break;
      this.#swap(i, j);
      i = j;
    }
    return max;
  }
}
