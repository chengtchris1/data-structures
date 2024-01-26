var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.currentSize = 0;
  //instance.size = stackMethods.size;
  instance.pop = stackMethods.pop;
  instance.push = stackMethods.push;
  instance.size = stackMethods.size;
  return instance;
};

var stackMethods = {
  pop: function() {
    var toReturn = this.storage[this.currentSize];
    if (this.currentSize !== 0) {
      this.currentSize--;
    }
    return toReturn;
  },
  push: function(value) {
    this.currentSize++;
    this.storage[this.currentSize] = value;
  },
  size: function() {
    return this.currentSize;
  }
};


