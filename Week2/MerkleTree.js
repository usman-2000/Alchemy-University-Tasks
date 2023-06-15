// Your Goal: Root of Two Leaves
// First, let's write a constructor for the MerkleTree class. This constructor will take two arguments passed in this order:

// An array of leaf nodes
// A combination function used to concatenate and hash two leaves together

class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }
  getRoot() {
    return this.concat(this.leaves[0], this.leaves[1]);
  }
}

module.exports = MerkleTree;
