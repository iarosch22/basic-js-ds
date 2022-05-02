const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.tree = null
  }

  root() {
    return this.tree;
  }

  add(data) {
    let newNode = new Node(data);
    if(this.tree === null){
        this.tree = newNode;
        return this;
    }
    let current = this.tree;
    while(current){
        if(data === current.data) return undefined;
        if(data < current.data){
            if(current.left === null){
                current.left = newNode;
                return this;
            }
            current = current.left;
        } else {
            if(current.right === null){
                current.right = newNode;
                return this;
            } 
            current = current.right;
        }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    if(!this.tree) return false
      
    let current = this.tree
    let found = false
    while(current && !found){
          if(data < current.data){
            current = current.left
            } else if(data > current.data){
              current = current.right
            } else {
                found = current
            } 
          
          }
  
      if(!found) return undefined;
      return found
  }

  remove(data) {
    
  }

  min() {
    let node = this.tree;

    while(!node.left === null) {
      node = node.left;
    }
        
    return node;
  }

  max() {
    let node = this.tree;

    while(!node.right === null) {
      node = node.right;
    }
        
    return node;
  }
}

module.exports = {
  BinarySearchTree
};