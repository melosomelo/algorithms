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
resizable array or we can use linked lists. Each one has its advantages and
disadvantages.

### Resizable arrays

Using resizable arrays means that under the hood of our implementation, we
actually use a regular array to store elements. A general point of concern with
this strategy is memory management; we need to resize the array as it gets full
and as it gets too empty. A good rule of thumb is to double the array's capacity
once it gets full and to halve its capacity when it's a quarter full.

You may be asking: _why halve the array when it's one quarter full? Why not
halve it when it's half full?_ Well, that would make the array 100% full. If we
were to insert a new element just after shrinking it (which can happen quite a
lot), we'd make the operation a lot slower.

We'll see the specifics of implementing stacks and queues with resizable arrays.

#### Stacks as resizable arrays

Using arrays to implement stacks is really simple. We just need to keep track of
the amount of elements in the stack (`size`) and the `capacity` of the array.
With that, _pushing_ an element onto the stack boils down to perform an
assignment in the array and incrementing `size`. _Popping_ the top element of
the stacks translates to decrementing `size` and freeing the memory of the
removed element.

remember to place some image here.

#### Queues as resizable arrays

Queues as resizable array get a bit trickier. Since queues have a FIFO policy,
we may need to remove elements from the beginning of the queue, which means that
we need to keep track of both the beginning and end of the queue inside the
array.

As an example, imagine that this is how our queue looks like inside an array:
`[1 2 3 4]`. The array is completely full and the queue has four elements, with
`1` being at the start of the queue. If we perform a dequeue, we need to remove
`1`, which will leave the array like `[- 2 3 4]`. Now, what if we want to
enqueue another element? The array isn't full, but the position of the elements
is not adequate. To preserve the FIFO policy, we need to _shift_ all of the
elements to the start of the array, so we end up with `[2 3 4 -]`. Now we can
add elements as we did with stacks.
