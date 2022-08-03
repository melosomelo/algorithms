# Linear data structures

Linear data structures resemble (as the name suggests) straight lines. They
arrange their elements sequentially, with each element being connected to their
predecessor and successor.

## Queues

Queues are like regular queues we see in real life in places such as the movies,
checkouts, etc. The first element to enter the queue is the first to exit it.
This is what's called a FIFO (First In First Out) policy. As a data structure,
its two main operators are `enqueue`, which inserts an element at the end of the
queue, and `dequeue`, which removes the first element.

## Stacks

Stacks are like piles of books or stacks of papers. In these scenarios, we
_stack_ elements on top of each other, and the last element to be put onto the
stack is the first to leave. Contrary to the queue, the stack has a LIFO (Last
In First Out) policy. Its two main operators are `push` (insert an element) and
`pop` (remove the top of the stack).

## Implementations

- [x] Queue
  - [x] Resizing queue
  - [x] Linked list queue
- [x] Stack
  - [x] Resizing stack
  - [x] Linked list stack
- [ ] Linked lists
  - [x] Simple linked list
  - [ ] Double linked list
