function insertionSort(array) {
  let aux;
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      aux = array[j - 1];
      array[j - 1] = array[j];
      array[j] = aux;
      j -= 1;
    }
  }
}
