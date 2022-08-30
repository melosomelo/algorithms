# Tree traversals

A tree is not a linear data structure. This means that its elements are not
arranged sequentially, with one coming after the other as it is in an array or
linked list. Therefore, there are multiple ways to traverse a tree, all very
simple to understand and implement.

Consider the following tree, which we'll use in the following examples:

```
        1
      /   \
     2     3
    / \
   4   5

```

For clarification purposes, to "visit a node" is to access its value.

## Preorder traversal

Preorder traversal visits an node _before_ (hence pre) traversing its child
subtrees (from left to right). With our example, this would result in the
following order: `1 2 4 5 3`.

## Inorder traversal

Inorder traversal traverses the left subtree, then it visits node itself and
then it traverses the right subtree. The name inorder is due to the node being
in the "middle". With our example, this would result in the following order:
`4 2 5 1 3`.

## Postorder traversal

To no surpise, postorder traversal visits the node _after_ traversing both its
subtrees (left and then right). With our example, this would results in the
following order: `4 5 2 3 1`.
