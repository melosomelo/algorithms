# Binary search tree

![geeks for geeks example](https://media.geeksforgeeks.org/wp-content/uploads/BSTSearch.png)

A binary search tree (BST) is a specialized version of a tree, in which each
node has at most two children and the value of any particular node must be
greater than that of its left child and smaller than that of its right child.

In general, a BST is a structure that enables fast insertion, lookup and removal
of elements.

## Search operation

To search for a value `x` in a BST is very similar to perform a
[binary search](../../searching/binary-search/). Given that we're at a node `N`,
we have a few scenarios:

- The value of `N` is equal to `x`. If this is the case, then we're done.
- The value of `N` is greater than `x`. Therefore, we must look look in the left
  subtree of `N`.
- The value of `N` is smaller than `x`. In this case, we look in the right
  subtree.
- `N` is an empty node. In this case, `x` is not in the tree.

Since trees are recursive data structures, so are a lot of their algorithms, and
this one is no exception. This makes for short and elegant code:

```
search(key,root):
  if root == null then
    return null
  if root.value == key then
    return root
  else if root.value > key then
    return search(key,root.left)
  else if root.value < key then
    return search(key,root.right)
```

## Insert operation

The insert operation is also very simple, much like the search operation. It is
also naturally recursive. Imagine that we want to insert a node `n` on a tree
with root `r`. The possible cases for this algorithm mirror exactly the ones
that we considered for the search operation:

- If `n.value == r.value`, then we do nothing, as the value is already in the
  tree.
- If `n.value < r.value`, then we insert `n` in `r`'s left subtree.
- If `n.value > r.value`, then we insert `n` in `r`'s right subtree.
- If `r` is an empty node, then `n` becomes the root of the tree.

The pseudocode for this operation is also very simple:

```
insert(n,root):
  if root == null then
    return n
  if n.value < root.value then
    root.left = insert(n,root.left)
  else if n.value > r.value then
    root.right = insert(n,root.right)

  return root
```

## Remove operation
