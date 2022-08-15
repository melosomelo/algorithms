function heapsort(array) {
  let N = array.length;
  for (let i = Math.floor(N / 2); i >= 1; i--) {
    sink(array, i, N);
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

const a = [1, 10, 25, 3, 8, 12];
heapsort(a);
console.log(a);
