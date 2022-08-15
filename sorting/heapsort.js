function heapsort(array) {
  let N = array.length;
  // Constructing the initial heap
  for (let i = Math.floor(N / 2); i >= 1; i--) {
    sink(array, i, N);
  }
  // Sorting the array
  while (N > 0) {
    swap(a, 0, --N);
    sink(a, 1, N);
  }
}

function sink(array, i, n) {
  while (left(i) <= n) {
    let j = left(i);
    if (j < n && a[j - 1] < a[j]) j++;
    if (a[i - 1] > a[j - 1]) break;
    swap(array, i - 1, j - 1);
    i = j;
  }
}

function left(i) {
  return i * 2;
}

function swap(array, i, j) {
  let aux = array[i];
  array[i] = array[j];
  array[j] = aux;
}
