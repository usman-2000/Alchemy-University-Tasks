// Complete the constructor function on the node. Store the data inside a data property on the instance.

// Store null in properties left and right.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = Node;

// Your Goal: Store the Root
// Finish the constructor function on the Tree class in the new file Tree.js.

// All you need to do for now is store null on a root property.

class Tree {
  constructor() {
    this.root = null;
  }
}

module.exports = Tree;

// Create a new method addNode on Tree which will take a new node and add it to the tree.

// Assume that the tree is empty for this stage. Simply set the root to be the node passed into the method.

class Tree {
  constructor() {
    this.root = null;
  }
  addNode(node) {
    this.root = node;
  }
}

module.exports = Tree;
