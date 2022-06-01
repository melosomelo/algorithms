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

    int size() {
      return size;
    }
  }

}
