public class LinkedList<T> {
  private class Node<T> {
    public T value;
    public Node<T> next;
  }

  int size = 0;
  Node<T> head = null;
  Node<T> tail = null;
}