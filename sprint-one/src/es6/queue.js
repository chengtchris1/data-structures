class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.currentSize = 0;
  }

  enqueue(value) {
    this.currentSize++;
    this.storage[this.currentSize] = value;
  }

  dequeue() {
    var toReturn = this.storage[1];
    for (var key in this.storage) {
      this.storage[Number(key) - 1] = this.storage[key];
    }
    delete this.storage[0];
    delete this.storage[this.currentSize];

    this.currentSize !== 0 ? this.currentSize-- : null;

    return toReturn;
  }

  size() {
    return this.currentSize;
  }

}
