public class Stack {
  public static class ResizingStack<T> {
    int size = 0;
    T[] array = (T[]) new Object[1];

    public ResizingStack() {
    }

    private void resize(int newCapacity) {
      T[] newArray = (T[]) new Object[newCapacity];
      for (int i = 0; i < size; i++) {
        newArray[i] = array[i];
      }
      this.array = newArray;
    }

    public void push(T item) {
      if (size == array.length) {
        resize(array.length * 2);
      }
      array[size++] = item;
    }

    public T pop() throws Exception {
      if (size == 0) {
        throw new Exception("Cannot call pop on an empty queue!");
      }
      T item = array[--size];
      array[size] = null;
      if (size == array.length / 4) {
        resize(array.length / 2);
      }
      return item;
    }

    public int size() {
      return size;
    }
  }

  public static class LinkedListStack<T> {
    private class Node<T> {
      public T value;
      public Node<T> next;
    }

    private int size = 0;
    private Node<T> head = null;

    public int size() {
      return this.size;
    }

    public void push(T val) {
      Node<T> newHead = new Node<>();
      newHead.value = val;
      newHead.next = this.head;
      this.head = newHead;
      this.size += 1;
    }

    public T pop() throws Exception {
      if (this.size == 0) {
        throw new Exception("Cannot call pop on an empty queue!");
      }
      Node<T> oldHead = this.head;
      this.head = this.head.next;
      this.size -= 1;
      return oldHead.value;
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
  }

}
