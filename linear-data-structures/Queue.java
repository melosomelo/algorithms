public class Queue {
  public static class ResizingQueue<T> {
    private int left = 0;
    private int right = -1;
    private T[] array = (T[]) new Object[1];

    public void print() {
      String result = "[ ";
      for (int i = 0; i < array.length; i++) {
        if (array[i] == null) {
          result += "- ";
        } else {
          result += array[i] + " ";
        }
      }
      result += "]";
      System.out.println(result);
    }

    private void resize(int newCapacity) {
      T[] newArray = (T[]) new Object[newCapacity];
      int size = size();
      for (int i = 0; i < size; i++) {
        newArray[i] = array[i + left];
      }
      array = newArray;
      left = 0;
      right = size - 1;
    }

    private void shiftLeft() {
      // The `size` depends on both `left` and `right`.
      // We need to store it as we change left and right at the end of this method.
      int actualSize = size();
      for (int i = 0; i < actualSize; i++) {
        array[i] = array[i + left];
      }
      for (int i = actualSize; i < array.length; i++) {
        array[i] = null;
      }
      left = 0;
      right = actualSize - 1;
    }

    public void enqueue(T item) {
      if (size() == array.length) {
        resize(array.length * 2);
      }
      if (right == array.length - 1) {
        shiftLeft();
      }
      array[++right] = item;
    }

    public T dequeue() throws Exception {
      int size = size();
      if (size == 0) {
        throw new Exception("Cannot call dequeue on an empty queue!");
      }
      T item = array[left];
      array[left++] = null;
      if (size() == array.length / 4) {
        resize(array.length / 2);
      }
      return item;
    }

    public boolean isEmpty() {
      return size() == 0;
    }

    public int size() {
      return right - left + 1;
    }
  }

  public static class LinkedListQueue<T> {

    private class Node<T> {
      public T value;
      public Node<T> next;
    }

    private int size = 0;
    private Node<T> head = null;
    private Node<T> tail = null;

    public int size() {
      return this.size;
    }

    public boolean isEmpty() {
      return this.size == 0;
    }

    public void enqueue(T val) {
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

    public T dequeue() throws Exception {
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
  }
}
