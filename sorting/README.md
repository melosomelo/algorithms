# Sorting ⬆️

To sort is to organize a collection of elements with regards to a specific
order. This order may very well be the standard numerical relation of
greater/smaller, but the use cases of these algorithms certainly aren't limited
to it.

|    Algorithm    | Implemented |   Best case    |   Worst case   | Stable |                        Obs                         |
| :-------------: | :---------: | :------------: | :------------: | :----: | :------------------------------------------------: |
| Selection sort  |     ✅      |    `O(n²)`     |    `O(n²)`     |   ❌   |                         -                          |
| Insertion sort  |     ✅      |     `O(n)`     |    `O(n²)`     |   ✅   |                         -                          |
|   Bubble sort   |     ✅      |     `O(n)`     |    `O(n²)`     |   ✅   |                         -                          |
|   Merge sort    |     ✅      | `O(n * log n)` | `O(n * log n)` |   ✅   |            Has `O(n)` space complexity             |
|    Quicksort    |     ✅      | `O(n * log n)` |    `O(n²)`     |   ❌   |          Worst case can be easily avoided          |
| 3-way quicksort |     ✅      | `O(n * log n)` |    `O(n²)`     |   ❌   | Has better performance with lots of duplicate keys |
