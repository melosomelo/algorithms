# Sorting

To sort is to organize a collection of elements with regards to a specific
order. This order may very well be the standard numerical relation of
greater/smaller, but the use cases of these algorithms certainly aren't limited
to it.

# Implementations

- [x] Selection sort
- [x] Insertion sort
- [ ] Bubble sort
- [ ] Merge sort
- [ ] Quicksort

# Analysis

## Selection sort

Selection sort is very easy to understand and to implement, but it's also very
slow. Pretty much any selection sort implementation has two loops, with one
being nested:

```javascript
  for(i = 0; i < n; i++) // n times
    for(j = i + 1; j < n; j++) // will run n - j times, for each value of j
    ...
```

The code within the inner loop always runs to its full completion, meaning that
any code within it will run `n-i+1` times, for each value of `i`. This is
equivalent to an arithmetic progression with common difference of `1`, first
element `0` (when `i` equals `4` and `j` equals `5`) and last element `n - 1`.
By using the formula for the sum of an AP, we get that any code within the inner
loop will run `n² - n` times. Therefore, selection sort has a time complexity of
`O(n²)`.

With regards to memory complexity, it is constant, as we only need to create
some auxiliary variables.

Finally, selection sort can be made stable if the comparison within the inner
loop is only valid for elements strictly greater.

## Insertion sort

Insertion sort is also a very simple algorithm. It is also slow for a lot of
cases, but not as much as selection sort.

Much like selection sort, insertion sort divides the array into two parts, one
sorted and one unsorted. The main difference is that insertion sort does not
seek to put each element immediately into its final position, as does selection
sort, which translates into not needing to scan the whole array.

Given an array `[a1, a2, ..., b1, b2]`, with the `a`'s being the sorted part of
the array, we will choose an element from the `b`'s and **insert** it into the
`a` part, in the position that makes the `a` part remain sorted. We repeat this
for each element of `b`.

So, if we had an array such as `[3,1,2]`, we can say that the `a` part is `[3]`
and `b` is `[1,2]`. Correctly inserting `1` into the `a` part, we get `[1,3]`
and `[2]`. Finally, we do it with `2` and get `[1,2,3]` and `[]`.

With regards to time complexity, it's very clear that insertion sort is
sensitive to its input. For example, if the array (the best case) is already
sorted, then we will not need to correctly insert any element from `b` into `a`,
making it `O(n)`. However, if we consider an array in descending order, we still
get a `O(n²)` time running time. In this case, the inner loop will run very much
like the inner loop in selection sort, and we can work that time complexity by
using the AP sum formula.

Insertion sort also has a constant memory complexity, as we only need to create
some auxiliary variables.

As with selection sort, insertion sort can be made stable if we maintain the
comparisons to strictly greater.
