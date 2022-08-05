function mergesort(array) {
  const aux = [...array];
  sort(array, 0, array.length - 1, aux);
}

function sort(array, lo, hi, aux) {
  if (hi - lo + 1 <= 1) {
    return;
  }
  const mid = Math.floor((hi - lo + 1) / 2) + lo;
  sort(array, lo, mid - 1, aux);
  sort(array, mid, hi, aux);
  merge(array, lo, mid, hi, aux);
}

function merge(array, lo, mid, hi, aux) {
  let i = lo;
  let j = mid;
  for (let k = lo; k <= hi; k++) {
    if (j > hi) array[k] = aux[i++];
    else if (i >= mid) array[k] = aux[j++];
    else if (aux[i] <= aux[j]) array[k] = aux[i++];
    else array[k] = aux[j++];
  }
  for (let k = lo; k <= hi; k++) {
    aux[k] = array[k];
  }
}
