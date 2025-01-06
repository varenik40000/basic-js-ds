const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootTree = null
  }

  root() {
    return this.rootTree;щ
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootTree === null) {
      this.rootTree = newNode;
      return this;
    }
    let currentRoot = this.rootTree;
    while (currentRoot) {
      if (data < currentRoot.data) {
        if (currentRoot.left === null) {
          currentRoot.left = newNode;
          return currentRoot;
        }
        currentRoot = currentRoot.left;
      } else {
        if (currentRoot.right === null) {
          currentRoot.right = newNode;
          return currentRoot;
        }
        currentRoot = currentRoot.right;
      }
    }
  }

  has(data) {
    function hasData(rootTree, data) {
      if (rootTree === null) {
        return false;
      }
      else if (data === rootTree.data) {
        return true;
      }
      else if (data < rootTree.data) {
        return hasData(rootTree.left, data);
      }
      else if (data > rootTree.data) {
        return hasData(rootTree.right, data);
      };
    };
    return hasData(this.rootTree, data);
  }

  find(data) {
    if (!this.rootTree) return false;

    let currentRoot = this.rootTree;
    let result = false;

    while (currentRoot && !result) {
      if (data < currentRoot.data) {
        currentRoot = currentRoot.left;
      } else if (data > currentRoot.data) {
        currentRoot = currentRoot.right;
      } else {
        result = currentRoot;
      }
    }
    return (!result) ? null : result;
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(rootTree, data) {

      if (data > rootTree.data) {
        rootTree.right = removeNode(rootTree.right, data);
        return rootTree;
      } else if (data < rootTree.data) {
        rootTree.left = removeNode(rootTree.left, data);
        return rootTree;
      } else {
        if (!rootTree.left && !rootTree.right) return null;

        if (!rootTree.left) {
          return rootTree.right;
        }
        if (!rootTree.right) {
          return rootTree.left;
        }

        let minRight = rootTree.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        rootTree.data = minRight.data;
        rootTree.right = removeNode(rootTree.right, minRight.data);
        return rootTree;
      }
    }
  }

  min() {
    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }
  o
  max() {
    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};