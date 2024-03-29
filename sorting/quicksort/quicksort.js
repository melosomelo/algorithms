function quicksort(array) {
  shuffle(array);
  sort(array, 0, array.length - 1);
}

function shuffle(array) {
  let j;
  for (let i = 1; i < array.length; i++) {
    j = Math.floor(Math.random() * (i + 1));
    swap(array, i, j);
  }
}

function sort(array, lo, hi) {
  if (lo >= hi) return;
  const pIndex = partition(array, lo, hi);
  sort(array, lo, pIndex - 1);
  sort(array, pIndex + 1, hi);
}

function partition(array, lo, hi) {
  const pivot = array[hi];
  let pIndex = lo;
  for (let i = lo; i < hi; i++) {
    if (array[i] < pivot) {
      swap(array, i, pIndex);
      pIndex += 1;
    }
  }
  swap(array, pIndex, hi);
  return pIndex;
}

function swap(array, i, j) {
  let aux = array[i];
  array[i] = array[j];
  array[j] = aux;
}
