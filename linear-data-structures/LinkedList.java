public class LinkedList<T> {
  private class Node<T> {
    public T value;
    public Node<T> next;
  }

  int size = 0;
  Node<T> head = null;

  private Node<T> at(int index) {
    int i = 0;
    Node<T> current = this.head;
    while (i < index && current != null) {
      i += 1;
    }
    return current;
  }
}