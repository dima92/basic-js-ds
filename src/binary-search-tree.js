const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

  constructor() {
    this.origin = null
  }

  root() {
    return this.origin;
  }

  add(data) {
    this.origin = addWithin(this.origin, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data == data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.origin, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data == data) {
        return true;
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
  }

  find(data) {
    return search(this.origin, data);

    function search(node, data) {
      if (!node) {
        return null;
      }

      if (node.data == data) {
        return node;
      }

      if (data < node.data) {
        return search(node.left, data);
      } else {
        return search(node.right, data);
      }
    }
  }

  remove(data) {
    this.origin = removeNode(this.origin, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else { //не больше, не меньше, а равно, то есть искомое, что нужно удалить
        if (!node.left && !node.right) { //лист - нет ни левого, ни правого, можно просто удалить (=null)
          return null;
        }

        if (!node.left) {
          node = node.right; //нет левого поддерева, значит просто вместо node кладем правое поддерево
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        // когда есть и левое и правое поддерево

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.origin) {
      return;
    }

    let node = this.origin;
    while (node.left) {
      node = node.left;
    }

    return node.data;

  }

  max() {
    if (!this.origin) {
      return
    }

    let node = this.origin;
    while (node.right) {
      node = node.right
    }

    return node.data
  }

}

module.exports = {
  BinarySearchTree
};
