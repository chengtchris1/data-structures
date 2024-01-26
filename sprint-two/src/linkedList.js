var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  // O(1)
  list.addToTail = function (value) {
    if (!list.head && !list.tail) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  // O(1)
  list.removeHead = function () {
    var toReturn = list.head.value;
    list.head = list.head.next;
    return toReturn;
  };

  // O(n) - will need to search through the nodes
  list.contains = function (target) {
    var inner = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return inner(node.next);
      }
    };

    return inner(list.head);
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
