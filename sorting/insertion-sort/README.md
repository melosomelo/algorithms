### Insertion sort

![insertion sort](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

Insertion sort is a bit like selection sort, in the sense that it also divides
the array into sorted and unsorted parts. Unlike selection sort however,
insertion sort does not seek the smallest element within the unsorted part to
insert it into its final position, but rather it only attempts to correctly
insert the **first element** of the unsorted part into the sorted one.

Let's use the same example as with selection sort, with the array being
`[4,1,3,2,5]` and `a` and `b` referring, respectively, to the unsorted and
sorted parts of the array.

- Initially, `a` = `[4]` and `b` = `[1,3,2,5]`. We take `b`'s first element
  (which is `1`), and insert into `a` so that `a` remains sorted. This results
  in `a` = `[1,4]` and `b` = `[3,2,5]`.
- We repeat this process with `3`, resulting in `a` = `[1,3,4]` and `b` =
  `[2,5]`.
- And we repeat this until the array is completely sorted.

As with selection sort, the terminology of "dividing" the array and "inserting"
into its subparts is merely syntactic sugar.
[Actual implementations](./insertionSort.js) merely swap the elements of the
array.

Insertion sort is faster than selection sort, but it's still slow. Unlike
selection sort, it is sensible to input, meaning that it will perform better on
some distribution of elements. When the array is completely sorted, its running
time is `O(n)`. However, its worst case scenario is still `O(n²)`, which happens
when the array is in descending order. To prove this, we can use the same
rationale as with selection sort. The instructions within the inner loop will
run 1, 2, ...,`n-1` times, which is again an AP with common difference of 1. By
using the AP sum formula, it becomes clear that its running time is indeed
`O(n²)`.
