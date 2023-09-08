class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const node = new Node(val);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (node.val < currentNode.val && !currentNode.left) {
        currentNode.left = node;
        return this;
      } else if (node.val > currentNode.val && !currentNode.right) {
        currentNode.right = node;
        return this;
      } else {
        if (val < currentNode.val) {
          currentNode = currentNode.left;
        } else if (val > currentNode.val) {
          currentNode = currentNode.right;
        } else {
          return this;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    // check and see if val is less than currentNode value
    if (val < currentNode.val) {
      // if it is, check and see if there is a node to the left
      if (!currentNode.left) {
        // if there isn't then add a new Node and set it as left of current
        currentNode.left = new Node(val);
      } else {
        // if there is a node there, set it to currentNode and run function on it
        currentNode = currentNode.left;
        this.insertRecursively(val, currentNode);
      }
    }
    // check to see if val is greater than currentNode value
    if (val > currentNode.val) {
      // if it is, check and see if there is a node to the right
      if (!currentNode.right) {
        // if there isn't then add a new Node and set it as left of current
        currentNode.right = new Node(val);
      } else {
        // if there is a node there, set it to currentNode and run function on it
        currentNode = currentNode.right;
        this.insertRecursively(val, currentNode);
      }
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  // Note: I have some redundant checks in here to clean up! 

  find(val) {

    let currentNode = this.root;

    // as long as we have a current node, proceed
    while (currentNode) {
      // if the value is the currentNode value, we return it
      if (val === currentNode.val) {
        return currentNode;
      }
      // if the value is greater and a right node exists
      if (val > currentNode.val && currentNode.right) {
        if (val === currentNode.right.val) {
          return currentNode.right;
        }
        currentNode = currentNode.right;
      // otherwise if the value is greater and no node exists
      } else if (val > currentNode.val && !currentNode.right) {
        return undefined;
      }

      if (val < currentNode.val && currentNode.left) {
        if (val === currentNode.left.val) {
          return currentNode.left;
        }
        currentNode = currentNode.left;
      } else if (val < currentNode.val && !currentNode.left) {
        return undefined;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {

    if (val === currentNode.val) {
      return currentNode;
    }

    if (val < currentNode.val) {
      if(!currentNode.left) {
        return undefined;
      }
      return this.findRecursively(val, currentNode.left);
    }

    if (val > currentNode.val) {
      if(!currentNode.right) {
        return undefined;
      }
      return this.findRecursively(val, currentNode.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, travArray = []) {
    travArray.push(node.val);
    if(node.left) {
      this.dfsPreOrder(node.left, travArray);
    }
    if(node.right) {
      this.dfsPreOrder(node.right, travArray);
    }
    return travArray;
  } 

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, travArray = []) {
    if(node.left) {
      this.dfsInOrder(node.left, travArray);
    }
    travArray.push(node.val);
    if(node.right) {
      this.dfsInOrder(node.right, travArray);
    }
    return travArray;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, travArray = []) {
    if(node.left) {
      this.dfsPostOrder(node.left, travArray);
    }
    if(node.right) {
      this.dfsPostOrder(node.right, travArray);
    }
    travArray.push(node.val);
    return travArray;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(node = this.root) {

    if(!node) return [];

    let travArray = [];
    let toVisitQueue = [node];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      travArray.push(current.val);

     if(current.left) {
      toVisitQueue.push(current.left);
     }
     if(current.right) {
      toVisitQueue.push(current.right);
     }

  } return travArray;
}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  // remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  // findSecondHighest() {}
}

module.exports = BinarySearchTree;
