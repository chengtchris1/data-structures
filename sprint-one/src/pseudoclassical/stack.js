var Stack = function() {
  this.storage = {};
  this.currentSize = 0;
};

Stack.prototype.push = function(value) {
  this.currentSize++;
  this.storage[this.currentSize] = value;
};

Stack.prototype.pop = function() {
  var storage = this.storage;
  var cs = this.currentSize;

  var toReturn = storage[cs];
  delete storage[cs];

  if (cs !== 0) {
    this.currentSize--;
  }

  return toReturn;
};

Stack.prototype.size = function() {
  return this.currentSize;
};

