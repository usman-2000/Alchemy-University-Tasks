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

// Your Goal: Handle Bigger Trees
// Update the getRoot function to handle merkle trees with more than two leaf nodes.

// When breaking down the logic of merkle trees, first we hash together A and B, then we hash together C and D. Then we hash together the combination of A and B (AB) with the combination of C and D (CD). Something like this:

//     ABCD
//     /  \
//    AB  CD
//   / \  / \
//   A B  C D
// Writing the code you will likely find it useful to think of the tree as having multiple layers:

// The first layer is the leaves (A, B, C, D)
// The second is the combination of both of those combinations (AB, CD)
// The last layer is the final combination: the merkle root (ABCD)
// In each layer, we'll need to combine elements two-at-a-time until we reach a layer with just a single element. At that point we can stop, knowing we've found the root.

// For this stage you'll need to handle a single leaf node, two leaf nodes, four leaf nodes and eight leaf nodes.

class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }
  // getRoot() {
  //     // return this.concat(this.leaves[0],this.leaves[1])

  //     let newArr = []
  //     function makeHash(){
  //         while(this.leaves){
  //         newArr.push(this.concat(this.leaves[0], this.leaves[1]))
  //         this.leaves.splice(0,2)
  //         }
  //         if(newArr.length !== 1){
  //             this.leaves = newArr
  //             makeHash()
  //         }else{
  //             break
  //         }
  //     }
  //     return newArr[0]

  // }

  getRoot(leaves = this.leaves) {
    if (leaves.length === 1) {
      return leaves[0];
    }

    let layer = [];

    for (let i = 0; i < leaves.length; i += 2) {
      layer.push(this.concat(leaves[i], leaves[i + 1]));
    }
    return this.getRoot(layer);
  }
}

module.exports = MerkleTree;

// Odd Leaves
// Trees are great! We  trees

// Even when those trees happen to be a bit... odd.

//  Your Goal: Handle Odd Number of Leaves
// Let's consider what happens in the case of an odd number of leaves in a tree.

// Any time that there is no right pair to an element, we're just going to want to carry that leaf one layer up:

//     Root
//     / \
//    AB  C
//   / \  |
//   A B  C
//  In this case we don't use the C node until we combine it with AB to create the Merkle Root. Let's handle this in our getRoot function.

class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }

  getRoot(leaves = this.leaves) {
    if (leaves.length === 1) {
      return leaves[0];
    }

    let layer = [];

    for (let i = 0; i < leaves.length; i += 2) {
      const left = leaves[i];
      const right = leaves[i + 1];
      if (right) {
        layer.push(this.concat(left, right));
      } else {
        layer.push(left);
      }
    }
    return this.getRoot(layer);
  }
}

module.exports = MerkleTree;

// Add the getProof Method
// Let's add a getProof method to our MerkleTree class. This function will take in an index of a leaf node and return a Merkle Proof.

// The Merkle Proof will be an array of objects with the properties data (the hash) and left (a boolean indicating if the hash is on the left).

class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }

  getRoot(leaves = this.leaves) {
    if (leaves.length === 1) {
      return leaves[0];
    }

    let layer = [];

    for (let i = 0; i < leaves.length; i += 2) {
      const left = leaves[i];
      const right = leaves[i + 1];
      if (right) {
        layer.push(this.concat(left, right));
      } else {
        layer.push(left);
      }
    }
    return this.getRoot(layer);
  }

  getProof(index) {
    let arr = [];
    if (index % 2 === 0) {
      arr.push({
        data: this.leaves[index],
        left: true,
      });
    } else {
      arr.push({
        data: this.leaves[index],
        left: false,
      });
    }
    return arr;
  }
}

module.exports = MerkleTree;
