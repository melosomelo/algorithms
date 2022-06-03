# Linear data structures

Linear data structures resemble (as the name suggests) straight lines. They
arrange their elements sequentially, with each element being connected to their
predecessor and successor.

## Stacks

A stack is very similar to a pile of books (or a _stack_ of papers). You can put
a book on top or you can remove and do something with that book (you could
remove a book from the middle, but that's not really practical, is it?).

As data structures, a stack is just that, a linear collection whose two main
operations are pushing an element to its top and removing the top element.

We say that a stack has a _LIFO(Last In First Out)_ policy, as the last inserted
element is the next element in line to be pushed out.

## Queues

Queues are also very simple; they are identical to the queues that we see in
everyday life in places like the movies, checkout counters, you name it. In
these places, you enter the queue and then wait to leave it.

Queues as data structures are also like that. They are a linear collection whose
two main operations are enqueuing and dequeuing elements.

As opposed to stacks, queues have a _FIFO(First In First Out)_ policy, since the
element that first came in will be the first to leave the queue, just like a
regular queue in real life.

## Implementations

There are two main ways to implement linear data structures: we can use a
resizable array or we can use linked lists.

### Resizable arrays

A resizable array is pretty straightforward. Underneath our implementation, we
will store our elements in a regular array. If the array gets too big (or to
small), we can resize it.

With this strategy, adding, removing and accessing elements is very simple and
efficient (except when we need to resize the array). In general, we will only
need to keep track of the amount of elements in the structure (`size`) and the
`capacity` of the array. If when inserting an element, `size` equals `capacity`,
then we just create a new array with double the capacity. If `size` is one
quarter of `capacity`, then we create a new array with half the original
capacity.

You may be asking yourself: _why shrink the array when it's one quarter of the
capacity? Why don't we shrink it to one half when the array is half full?_ Well,
that would be very inefficient. What if we had another insertion just after
shrinking it? We'd have to resize the array all over again. If we shrink it only
when it's one quarter full, we the new array will still be half full and we will
be able to delay resizing it.
