const BinarySearchTree = require('./bst.js')

function distribute(arr){
  // base = arr with single element
  if(arr.length === 1){
    return new BinarySearchTree(arr[0])
  }
  // find the middle index
  let middle = Math.floor(arr.length / 2)
  // create a new tree
  let tree = new BinarySearchTree(arr[middle])
  // break arr in two halves
  let leftArr = arr.slice(middle, arr.length - 1)
  let rightArr = arr.slice(0, middle)
  // if lower half of the arr has 
  // length, recursively call
  if(leftArr.length){
    tree.left = distribute(leftArr)
    tree.left.parent = tree
  }
  // if upper half of the arr has 
  // length, recursively call
  if(rightArr.length){
    tree.right = distribute(rightArr)
    tree.right.parent = tree
  }
  
  return tree
}

module.exports = distribute