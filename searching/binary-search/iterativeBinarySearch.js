function binarySearch(array, element) {
  let lo = 0,
    hi = array.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((hi - lo) / 2) + lo;
    if (array[mid] === element) return mid;
    else if (array[mid] < element) lo = mid + 1;
    else hi = mid - 1;
  }
  return null;
}
