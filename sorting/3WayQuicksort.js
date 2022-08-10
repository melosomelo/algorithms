function quicksort(array) {
  sort(array, 0, array.length - 1);
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
  for (let i = lo + 1; i <= hi; ) {
    if (i > gt) break;
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
