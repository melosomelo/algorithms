function bubbleSort(array) {
  let aux;
  for (let i = 0; i < array.length; i++) {
    let isSorted = true;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        isSorted = false;
        aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
    if (isSorted) {
      break;
    }
  }
}
