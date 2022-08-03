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
      current = current.next;
    }
    return current;
  }

  private void insertAtStart(T val) {
    Node<T> newElement = new Node<>();
    newElement.value = val;
    newElement.next = this.head;
    this.head = newElement;
    this.size += 1;
  }

  public void insert(int index, T val) {
    if (index == 0 || this.size == 0) {
      insertAtStart(val);
      return;
    }
    Node<T> prev = this.at(Math.min(index - 1, this.size - 1));
    Node<T> newEl = new Node<>();
    newEl.value = val;
    newEl.next = prev.next;
    prev.next = newEl;
    this.size += 1;
  }

  public void append(T val) {
    this.insert(this.size, val);
  }

  public void printList() {
    String s = "[ ";
    Node<T> current = this.head;
    for (int i = 0; i < this.size; i++) {
      s += current.value.toString() + " ";
      current = current.next;
    }
    s += "]";
    System.out.println(s);
  }

  public void remove(int index) {
    if (this.size == 0) {
      return;
    }

    if (index == 0 || this.size == 1) {
      this.head = this.head.next;
      this.size -= 1;
      return;
    }

    Node<T> prev = this.at(Math.min(index - 1, this.size - 2));
    prev.next = prev.next.next;
    this.size -= 1;
  }

}