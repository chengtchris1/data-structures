var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.currentSize = 0;
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.currentSize++;
    this.storage[this.currentSize] = value;
  },
  dequeue: function() {
    toReturn = this.storage[1];
    for (var key in this.storage) {
      this.storage[Number(key) - 1] = this.storage[key];
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
  }
};


