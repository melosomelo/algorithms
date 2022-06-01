# Linear data structures

Linear data structures resemble (as the name suggests) straight lines. They
arrange their elements sequentially, with each element being connected to their
predecessor and successor.

## Stacks

A stack is very similar to a pile of books. You can put new books on top of it
and remove the book that's on top (you could remove the one in the middle, but
that's not really practical, is it?).

As data structures, stacks do just that: insert elements on its "top" and remove
the last inserted element. We say that stacks have the _last in, first out_
(LIFO) policy, as in the last element that came in will be the next to leave.

There are two main ways of implementing a stack: with a resizable array or with
[linked lists](#linked-lists).
