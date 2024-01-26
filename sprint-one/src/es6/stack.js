class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.currentSize = 0;
  }

  pop() {
    var toReturn = this.storage[this.currentSize];
    delete this.storage[this.currentSize];
    this.currentSize !== 0 ? this.currentSize-- : null;
    return toReturn;
  }

  push(value) {
    this.currentSize++;
    this.storage[this.currentSize] = value;
  }

  size() {
    return this.currentSize;
  }

}