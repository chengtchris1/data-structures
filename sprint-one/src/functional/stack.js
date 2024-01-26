var Stack = function() {
  var someInstance = {};
  var currentSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    currentSize++;
    storage[currentSize] = value;
  };

  someInstance.pop = function() {
    var toReturn = storage[currentSize];
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
