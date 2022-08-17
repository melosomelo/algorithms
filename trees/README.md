# Trees 🌳

A tree is an abstract data type that is widely used in computer science to
represent a collection of elements with a hierarchical relationship between
them. Each element of the tree is called a **node**, and each node (except the
root) has one parent, but can have many (or even zero) children, depending on
the type of the tree.

## Tree structures

|                    Tree                     | Implemented |     Insert op      |       Remove op        | Search op |
| :-----------------------------------------: | :---------: | :----------------: | :--------------------: | :-------: |
|           [Binary heap](./heap/)            |     ✅      |     `O(log n)`     |       `O(log n)`       |  `O(n)`   |
|            [d-ary heap](./heap/)            |     ✅      | `O(log n / log d)` | `O(d * log n / log d)` |  `O(n)`   |
| [Binary search tree](./binary-search-tree/) |     ❌      |         -          |           -            |     -     |
