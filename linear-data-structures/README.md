# Linear data structures

Linear data structures resemble (as the name suggests) straight lines. They
arrange their elements sequentially, with each element being connected to their
predecessor and successor.

|     Structure      | Implemented | Insert op(s) | Remove op | Obs |
| :----------------: | :---------: | :----------: | :-------: | :-: |
|   Resizing queue   |     ✅      |   `O(1)`\*   | `O(1)`\*  |  -  |
| Linked list queue  |     ✅      |    `O(1)`    |  `O(1)`   |  -  |
|   Resizing stack   |     ✅      |   `O(1)`\*   | `O(1)`\*  |  -  |
| Linked list stack  |     ✅      |    `O(1)`    |  `O(1)`   |  -  |
| Simple linked list |     ✅      |    `O(1)`    |  `O(1)`   |  -  |
| Double linked list |     ❌      |      -       |     -     |  -  |

\*_Although sometimes this operation can take linear time (due to resizing and
shifting), if we make a
[different kind of analysis](https://en.wikipedia.org/wiki/Amortized_analysis),
we can see that it's constant overall._
