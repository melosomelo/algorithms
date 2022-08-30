# Binary search tree

![geeks for geeks example](https://media.geeksforgeeks.org/wp-content/uploads/BSTSearch.png)

A binary search tree (BST) is a specialized version of a tree, in which each
node has at most two children and the value of any particular node must be
greater than all of the values in its left subtree and smaller than all the
values in its right subtree.

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

The remove operation is the most difficult operation to implement in a BST. This
is mostly due to the possible cases we have and the adjustments we need to make
in order to preserve the order relation between the nodes.

To implement such an algorithm, it's again useful to think in cases. Given that
we have a tree with root `r` and we want to remove a value `x`, what are the
possible cases?

- If `r` is an empty node, then `x` is not in the tree.
- If `r.value > x`, then we need to look for `x` in `r`'s left subtree.
- If `r.value < x`, then we need to look for `x` in `r`'s right subtree.
- If `x == r.value`, then we have a few subcases:
  - If `r` has no children (i.e. is a leaf), then we simply remove `r`.
  - If `r` has only one child, then we remove `r` and put its child in its
    place. This maintains the order in the tree.
  - If `r` has two children, then we must remove `r` and place its **successor**
    in its place.

The last case is the most complicated and deserves further explanation. First,
what exactly is a successor of a node? For any node `n`, its successor is the
leftmost element of its right subtree, i.e., the smallest amongst the elements
that are larger than `n`.

If we want to remove a node `r` that has two children, the node that we put in
its stead must be greater than every node in `r.left` and smaller than every
node in`r.right`. The successor is greater than all in `r.left` (since it's in
the right subtree) and also smaller than any element in the right subtree (by
definition). Therefore, it is the perfect candidate for the replacement of the
removed node.

To find the successor is also very simple. Given a node `n`, to find its
successor we must first go to `n.right` and then go left as much as we can (up
until the point we reach a node that has no left subtree).

With all of this in mind, the code for the removal of a value `x` in a BST goes
something like this:

```remove(x,root):
if root == null then
  return null

if x > root.value then
  root.right = remove(x,root.right)
else if x < root.value then
  root.left = remove(x,root.left)
else
  if x.left == null then
    return x.right
  if x.right == null then
    return x.left
  succ = successor(root)
  succ.right = remove(succ.value,root.right)
  succ.left = root.left
  return succ
```
