var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentSize = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    currentSize++;
    storage[currentSize] = value;
  };

  someInstance.dequeue = function() {
    var toReturn = storage['1'];

    for (var numericKey in storage) {
      var currentKey = Number(numericKey);
      storage[currentKey - 1] = storage[numericKey];
    }

    delete storage[0];
    delete storage[currentSize];

    if (currentSize !== 0) {
      currentSize--;
    }

    return toReturn;

  };

  someInstance.size = function() {
    return currentSize;
  };

  return someInstance;
};
