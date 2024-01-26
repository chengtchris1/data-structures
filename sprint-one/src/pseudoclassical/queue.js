var Queue = function() {
  this.storage = {};
  this.currentSize = 0;
};

Queue.prototype.enqueue = function(value) {
  this.currentSize++;
  this.storage[this.currentSize] = value;
};

Queue.prototype.dequeue = function() {

  var toReturn = this.storage[1];

  for (key in this.storage) {
    this.storage[Number(key) - 1] = this.storage[key];
  }

  delete this.storage[0];
  delete this.storage[this.currentSize];
  if (this.currentSize !== 0) {
    this.currentSize--;
  }
  return toReturn;
};

Queue.prototype.size = function() {
  return this.currentSize;
};



