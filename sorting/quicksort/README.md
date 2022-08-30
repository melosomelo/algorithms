# Quicksort ⚡

## Overview

Quicksort is one of the most important and effective sorting algorithms we have
today. It is the go-to sorting algorithm for many default libraries of many
programming languages, as it performs in `O(log n)` time on average and has
constant memory complexity.

Very much like [merge sort](../merge-sort/README.md), quicksort is a
**divide-and-conquer** algorithm; it divides the problem of sorting an array
into smaller ones. The main difference of quicksort is that in conquers before
it divides.

Quicksort's main operation is called **partitioning**. To partition an array is
to do the following:

1. Choose an element of the array to be the **pivot**.
2. Arrange the array in a way such that every element smaller than the pivot is
   to its left and everything element greater than it is to its right.

So, given an array such as `[10,7,1,13,5]` and with `5` being the pivot, a
result of the partitioning could be `[1,5, 7, 13, 10]`. Note that the final
array doesn't need to be sorted.

Quicksort sorts the array by partitioning ever-decreasing sub-arrays, up until
the point that it reaches a sub-array that is already sorted (with 1 or 0
elements). Indeed, very much like merge sort.

In our previous example, quicksort would now apply the same partitioning method
to the sub-arrays `[1,5]` and `[13,10]`. Note that we ignore the pivot, since
it's already at its last position in the array.

Therefore, a pseudocode for quicksort would look something like:

```plaintext
quicksort(a):
  sort(a,0,length(a) - 1)

sort(a,lo,hi):
  if lo >= hi then
    return
  pIndex <- partition(a,lo,hi)
  sort(a,lo,pIndex - 1)
  sort(a,pIndex+1,hi)
```

The `partition` method returns the final position of the pivot, which we use to
determine the two new intervals in which we will need to operate.

## The `partition` method

Good enough, but how does partition actually work? There are many different ways
to implement a partitioning method, but the one I particularly think it's the
simplest goes something like this:

1. Choose the last element of the interval as the pivot. That is, the element at
   index `hi`.
2. Initialize a variable `pIndex` to `lo`. This variable will represent the
   pivot's final position.
3. Start a counter variable `i` and use it to iterate through the array. For
   each iteration, do:

   3.1 Check to see if the element at index `i` is smaller than the pivot. If it
   is, then swap it with the element at `pIndex` and increment `pIndex`. If not,
   continue.

4. Swap the elements at `pIndex` and `hi` (the pivot).

5. Return `pIndex`.

I personally find this method very intuitive. It simply iterates through the
array and "pushes" `pIndex` `s` positions to the right, with `s` being the
amount of elements smaller than the pivot. This makes total sense, as we want to
"make room" for these elements to the left of the pivot.

Given this understanding, we can write a pseudocode for the `partition` method
like this:

```plaintext
partition(a,lo,hi):
  pivot <- a[hi]
  pIndex <- lo
  for i <- lo to hi - 1
    if a[i] < pivot then
      swap(a,i,pIndex)
      pIndex <- pIndex + 1
  swap(a,pIndex,hi)
  return pIndex
```

To illustrate this with an example, consider the array `[10,16,1,13,7]`. We will
perform the `partition` method on the entire array. Thus, `pivot` will receive
`7`, and `pIndex` will initially be `0`. For the first two elements, the if
statement inside the loop is not satisfied, so nothing happens. When `i` equals
`2`, we get a truthful statement, so we swap `1` with `10` and increment
`pIndex`, giving the array `[1,16,10,13,7]`. The if statement will not evaluate
to true for any of the remaining elements, so we exit the loop with `pIndex`
equal to `1`. We swap `16` and `7`, resulting in the array `[1,7,10,13,16]`.
Finally, we return `pIndex`. By chance, the resulting array is sorted.

## Complexity
