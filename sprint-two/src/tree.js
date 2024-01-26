var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// O(1);
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};


treeMethods.contains = function(target) {
  /*
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      var result = this.children[i].contains(target);
      if (result) {
        return true;
      }
    }
  }
  return false;
  */

  var inner = function(node) {
    /*
    if (node.value === target) {
      return true;
    } else if (node.children === null) {
      return false;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        var value = inner(node.children[i]);
        if (value) {
          return true;
        }
      }
    }

    return false;

  };
  */
    for (var i = 0; i < node.children.length; i++) {
      if (node.children === null) {
        return false;
      } else if (node.children[i].value === target) {
        return true;
      } else {
        var value = inner(node.children[i]);
        if (value) {
          return true;
        }
      }
    }
    return false;
  };

  return inner(this);


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
