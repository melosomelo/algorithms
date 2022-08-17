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
  const pivot = array[lo];
  let lt = lo,
    gt = hi;
  let i = lt + 1;
  while (i <= gt) {
    if (array[i] < pivot) {
      swap(array, i, lt);
      lt += 1;
      i += 1;
    } else if (array[i] > pivot) {
      swap(array, i, gt);
      gt -= 1;
    } else {
      i += 1;
    }
  }
  return lt;
}

function swap(array, i, j) {
  let aux = array[i];
  array[i] = array[j];
  array[j] = aux;
}
