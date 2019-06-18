function isBalanced(tree) {
  if (!tree.parent && !tree.left && !tree.right) {
    return true
  }

  if (!tree.left && !tree.right) {
    return 1
  }

  let depth = 1

  if (tree.left && tree.right) {
    let left = isBalanced(tree.left)
    let right = isBalanced(tree.right)

    if (left === false || right === false) {
      return false
    }

    if (Math.abs(left - right) > 1) {
      return false
    } else if (left > right) {
      depth += left
    } else {
      depth += right
    }
  } else if (tree.left) {
    let left = isBalanced(tree.left)

    if (left === false) {
      return false
    } else {
      depth += left
    }
  } else {
    let right = isBalanced(tree.right)

    if (right === false) {
      return false
    } else {
      depth += right
    }
  }

  if(!tree.parent) {
    return true
  } else {
    return depth
  }
}

module.exports = isBalanced
