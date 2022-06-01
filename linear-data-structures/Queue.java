public class Queue {

  public static class ResizingQueue<T> {
    private int left = 0;
    private int right = -1;
    private T[] array = (T[]) new Object[1];

  }
}
