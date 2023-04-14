const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootSearchTree = null;
  }
  root() {
    return this.rootSearchTree;
  }

  add( data) {
    const newNode = new Node(data);
    if (this.rootSearchTree===null){
      this.rootSearchTree = newNode;
      return;
    }else {
      let currentRoot = this.rootSearchTree;
      while (currentRoot){
        if (newNode.data<currentRoot.data){
          if(currentRoot.left===null){
            currentRoot.left = newNode;
            return;
          }else {
            currentRoot =currentRoot.left;
          }
        }else {
          if(currentRoot.right===null){
            currentRoot.right = newNode;
            return;
          }else {
            currentRoot =currentRoot.right;
          }
        }
      }
    }

  }


  has(data) {
    let  currentRoot =this.rootSearchTree;
    while (currentRoot.data!==data){
      if(data<currentRoot.data){
        currentRoot = currentRoot.left;
      }else {
        currentRoot = currentRoot.right;
      }
      if (currentRoot===null){
        return false
      }
    }
    return true;
  }

  find(data) {
    let  currentRoot =this.rootSearchTree;
    while (currentRoot.data!==data){
      if(data<currentRoot.data){
        currentRoot = currentRoot.left;
      }else {
        currentRoot = currentRoot.right;
      }
      if (currentRoot===null){
        return null
      }
    }
    return currentRoot;
  }

  remove(data) {
    function removeNode (element, data) {
      // нет элементов
      if (element===null) {
        return null
      }
      if (element.data === data) {
        // если нет потомков
        if (element.left===null && element.right===null){
          return null
        }

        //1 потомок
        if (element.right===null) {
          element = element.left;
          return element;
        }
        if (element.left===null) {
          element = element.right;
          return element;
        }

        //2 потомка
        if (element.left && element.right) {
          let minRight = element.right;
          while(minRight.left) {
            minRight = minRight.left;
          }
          element.data = minRight.data;

          element.right = removeNode (element.right, minRight.data);
          return element;
        }

      }

      if ( element.data > data){
        element.left = removeNode(element.left, data);
      }else {
        element.right = removeNode(element.right, data);
      }
      return element;
    }
    this.rootSearchTree = removeNode(this.rootSearchTree, data);
  }

  min() {
    let  currentRoot =this.rootSearchTree;
    while (currentRoot.left!==null){
      currentRoot =currentRoot.left;
    }
    return currentRoot.data
  }

  max() {
    let  currentRoot =this.rootSearchTree;
    while (currentRoot.right!==null){
      currentRoot =currentRoot.right;
    }
    return currentRoot.data
  }
}

module.exports = {
  BinarySearchTree
};