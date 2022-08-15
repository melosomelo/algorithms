# Sorting ⬆️

To sort is to organize a collection of elements with regards to a specific
order. This order may very well be the standard numerical relation of
greater/smaller, but the use cases of these algorithms certainly aren't limited
to it.

|             Algorithm             | Implemented |   Best case    |   Worst case   | Stable |                          Obs                           |
| :-------------------------------: | :---------: | :------------: | :------------: | :----: | :----------------------------------------------------: |
| [Selection sort](#selection-sort) |     ✅      |    `O(n²)`     |    `O(n²)`     |   ❌   |                           -                            |
| [Insertion sort](#insertion-sort) |     ✅      |     `O(n)`     |    `O(n²)`     |   ✅   |                           -                            |
|            Bubble sort            |     ✅      |     `O(n)`     |    `O(n²)`     |   ✅   |                           -                            |
|            Merge sort             |     ✅      | `O(n * log n)` | `O(n * log n)` |   ✅   |              Has `O(n)` space complexity               |
|             Quicksort             |     ✅      | `O(n * log n)` |    `O(n²)`     |   ❌   | Worst case can be easily avoided with randomized array |
|          3-way quicksort          |     ✅      | `O(n * log n)` |    `O(n²)`     |   ❌   |   Has better performance with lots of duplicate keys   |
|             Heapsort              |     ✅      | `O(n * log n)` | `O(n * log n)` |   ❌   |                           -                            |
|              Timsort              |     ❌      |       -        |       -        |   -    |                           -                            |

## Analysis

### Selection sort

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

### Insertion sort

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
