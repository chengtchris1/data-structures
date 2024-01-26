var Stack = function() {
  var stackInstance = Object.create(stackMethods);
  stackInstance.currentSize = 0;
  stackInstance.storage = {};
  return stackInstance;
};

var stackMethods = {
  push: function(value) {
    this.currentSize++;
    this.storage[this.currentSize] = value;
  },
  pop: function() {
    var toReturn = this.storage[this.currentSize];
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


