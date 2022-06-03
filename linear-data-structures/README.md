# Linear data structures

Linear data structures resemble (as the name suggests) straight lines. They
arrange their elements sequentially, with each element being connected to their
predecessor and successor.

## Stacks

A stack is very similar to a pile of books (or a _stack_ of papers). You can put
a book on top or you can remove and do something with that book (you could
remove a book from the middle, but that's not really practical, is it?).

As data structures, a stack is just that, a linear collection whose two main
operations are pushing an element to its top and accessing the element currently
at the top.

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

Implementing a stack is really easy, as we only need to keep track of the amount
of elements in the stack (`size`) and the capacity of the array. To `push` an
element on top of the stack, we simply increment assign `array[size]` to the new
element and then increment `size`. To `pop` an element is equally simple, we
just have to decrement `size` and signal that `array[size]` is now empty (or
not, your choice).

Using a resizable array to implement a queue is a little bit tricker, but
nothing complicated.
