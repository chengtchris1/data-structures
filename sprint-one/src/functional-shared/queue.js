var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  instance.storage = {};
  instance.currentSize = 0;

  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;
  instance.getStorage = queueMethods.getStorage;
  return instance;

};

var queueMethods = {

  enqueue: function(value) {
    this.currentSize++;
    this.storage[this.currentSize] = value;

  },
  dequeue: function() {
    var toReturn = this.storage['1'];
    for (var numericKey in this.storage) {
      currentKey = Number(numericKey);
      this.storage[currentKey - 1] = this.storage[currentKey];
    }
    delete this.storage[0];
    delete this.storage[this.currentSize];

    if (this.currentSize !== 0) {
      this.currentSize--;
    }
    return toReturn;
  },
  size: function() {
    return this.currentSize;
  },
  getStorage: function() {
    return this.storage;
  }
};


