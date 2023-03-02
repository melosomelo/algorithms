# Tree rotations

A tree rotation is an operation performed on a node of a binary (search) tree in
which that node will "go down" and one of its children will take its place.
There are two types of rotation. If it's a _left rotation_, the right child will
become the parent, and if it's a _right rotation_, the left child becomes the
parent.

This operation changes the structure of the tree and it changes subtrees'
heights, but it does not invalidate its order , meaning if the tree is a binary
search tree _before_ the rotation, it will continue to be so _after_ the
rotation.

The effects of o a rotation are shown in the following diagram. Notice how the
order is maintained. Also, subtrees `a`, `b` and `c` can be empty, while `X` and
`Y` cannot.

```plaintext
        |                               |
        X                               Y
      /   \       right rotate        /   \
    Y      c      ------------>      a     X
  /   \           <-----------            / \
  a    b           left rotate           b   c
```

Another good diagram to see the effects of a rotation (and to see why it's
called that) is
[this one](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Tree_rotation.png/540px-Tree_rotation.png)
taken from the Wikipedia article on tree rotation.
