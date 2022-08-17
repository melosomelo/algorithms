# Heap

|    Name     | Insert best case | Remove max/min best case | Insert average case | Remove max/min average case | Insert worst case | Remove max/min worst case | Obs |
| :---------: | :--------------: | :----------------------: | :-----------------: | :-------------------------: | :---------------: | :-----------------------: | :-: |
| Binary heap |        -         |            -             |          -          |              -              |         -         |             -             |  -  |
| d-ary heap  |        -         |            -             |          -          |              -              |         -         |             -             |  -  |

A heap is a tree structure that is widely used as an implementation of a
[priority queue](https://en.wikipedia.org/wiki/Priority_queue). Its main
characteristic is that each node must follow an order relation with regards to
its children. If it's a _max heap_, then each child's value must be smaller or
equal than its parent; likewise, if it's a _min heap_, then each child's value
must be greater or equal than that of its parent.

The most common form of a heap is a _binary heap_, which is nothing more than a
heap in which each node has at most two children. Nevertheless, the we can have
n-ary heaps, with n being any number greater or equal to 2.
