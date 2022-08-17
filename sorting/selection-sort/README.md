# Selection sort

Selection sort works by dividing the array into two parts: a sorted and unsorted
one. It will traverse the unsorted part `n` times (with `n` being the size of
the original array) to find its smallest element, to then insert said element at
the tail of the sorted part.

Consider the array `[4,1,3,2,5]`. We shall call the sorted part `a` and the
unsorted part `b`.

- Initially, `a` = `[]` and `b` = `[4,1,3,2,5]`.
- `b`'s smallest element is `1`. It gets inserted into `a`, resulting in `a` =
  `[1]` and `b` = `[4,3,2,5]`.
- `b`'s smallest element now is `2`. It gets inserted into `a`, resulting in `a`
  = `[1,2]` and `b` = `[4,3,5]`. This happens until `b` is empty.

Although a high-level overview of selection sort uses terms like "dividing the
array" and "inserting" elements into subparts of the array,
[the actual implementation](./selectionSort.js) of selection sort only revolves
around swapping elements of the array in-place.

When it comes to time complexity, selection sort is very inefficient. It is
unsensible to input, meaning that its both its loops will always run to
completion, regardless of the distribution of the elements. We can see that the
instructions inside the inner loop will run `(n-1)`, `(n-2)`, `(n-3)`, ..., 0
times, for each value of `i`. This is a simple AP with a common difference of 1.
If we use the
[AP sum formula](https://en.wikipedia.org/wiki/Arithmetic_progression#Sum), it's
clear that the running time will always be `O(n²)`.
