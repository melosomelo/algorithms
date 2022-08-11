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
    this.print();
  }
}
