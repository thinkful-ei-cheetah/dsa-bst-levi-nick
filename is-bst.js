function isBst(tree) {
  let result = true

  if(!tree.parent && !tree.left && !tree.right) {
    return true
  }

  if(!tree.left && !tree.right) {
    return true
  }

  if(tree.left) {
    // console.log(`left: ${tree.left.key}, me: ${tree.key}`)
    if(tree.left.key >= tree.key) {
      return false
    } else {
      result = isBst(tree.left)
    }
  }
  
  if(tree.right) {
    // console.log(`right: ${tree.right.key}, me: ${tree.key}`)
    if(tree.right.key <= tree.key) {
      return false
    } else {
      result = isBst(tree.right)
    }
  }

  return result
}

module.exports = isBst