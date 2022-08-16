function binarySearch(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, lo, hi) {
  if (lo > hi) return null;
  const mid = Math.floor((hi - lo + 1) / 2) + lo;
  if (array[mid] === target) return mid;
  else if (array[mid] < target) return search(array, target, mid + 1, hi);
  else return search(array, target, lo, mid - 1);
}
