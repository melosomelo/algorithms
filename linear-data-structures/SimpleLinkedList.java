public class SimpleLinkedList<T> {
  private class Node<T> {
    public T value;
    public Node<T> next;
  }

  private int size = 0;
  private Node<T> head = null;
  private Node<T> tail = null;

  public void prepend(T val) {
    Node<T> newNode = new Node<>();
    newNode.value = val;
    newNode.next = this.head;
    this.head = newNode;
    if (this.size == 0) {
      this.tail = newNode;
    }
    this.size += 1;
  }

  public void append(T val) {
    Node<T> newNode = new Node<>();
    newNode.value = val;
    if (this.size == 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size += 1;
  }

  public int size() {
    return this.size;
  }

  public void print() {
    String s = "[ ";
    Node<T> current = this.head;
    for (int i = 0; i < this.size; i++) {
      s += current.value.toString() + " ";
      current = current.next;
    }
    s += "]";
    System.out.println(s);
  }

  public T removeFirst() throws Exception {
    if (this.size == 0) {
      throw new Exception("Cannot remove last from an empty array!");
    }
    Node<T> oldHead = this.head;
    this.head = this.head.next;
    if (this.size == 1) {
      this.tail = null;
    }
    this.size -= 1;
    return oldHead.value;
  }

  public static void main(String[] args) throws Exception {
    SimpleLinkedList<Integer> lint = new SimpleLinkedList<>();
  }
}