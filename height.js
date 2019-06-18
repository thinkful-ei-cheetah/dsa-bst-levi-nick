function height(tree){
  if(!tree.left && !tree.right){
    return 1
  }

  let depth = 1

  if(tree.left && tree.right){
    let left = height(tree.left)
    let right = height(tree.right)
    if(left > right){
      depth += left
    }
    else{
      depth += right
    }
  }
  else if(tree.left){
    depth += height(tree.left)
  }
  else{
    depth += height(tree.right)
  }
  return depth
}

module.exports = height