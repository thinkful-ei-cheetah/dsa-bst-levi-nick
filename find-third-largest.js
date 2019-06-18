function findThirdLargest(tree){
  if(!tree){
    return false
  }
  while(tree.right !== null){
    tree = tree.right
  }
  // tree = largest
  if(tree.left){
    tree = tree.left
    while(tree.right !== null){
      tree = tree.right
    }
    // tree = 2nd largest
    if(tree.left){
      tree = tree.left
      while(tree.right !== null){
        tree = tree.right
      }
    }
    else{
      if(tree.key < tree.parent.key){
        tree = tree.parent.parent
      }
      else{
        tree = tree.parent
      }
    }
  }
  // largest doesn't have children
  else{
    tree = tree.parent
    // tree = 2nd largest
    if(tree.left){
      tree = tree.left
      while(tree.right !== null){
        tree = tree.right
      }
    }
    else{
      tree = tree.parent
    }
  }
  return tree.key
}

module.exports = findThirdLargest