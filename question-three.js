const BinarySearchTree = require('./bst')
const height = require('./height')
const isBst = require('./is-bst')
const isBalanced = require('./is-balanced')
const findThirdLargest = require('./find-third-largest')

function main() {
  const bst = new BinarySearchTree()

  const int = [
    3, 1, 4, 6, 9, 2, 5, 7, 8
  ]
  const str = [
    'E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'
  ]

  // int.forEach(i => {
  //   bst.insert(i, i)
  // })
  str.forEach(l => {
    bst.insert(l, l)
  })

  // Binary Search Tree
  // console.log(bst)
  
  // Checking tree(t)
  // console.log(tree(bst))

  // Checking height(tree)
  // console.log(height(bst))
  // bst.remove('E')
  // console.log(height(bst))

  // Checking isBst(tree)
  // console.log(isBst(bst))

  // Checking isBalanced(tree)
  // console.log(isBalanced(bst))

  // Checking find third largest
  console.log(findThirdLargest(bst)) 
}

function tree(t){
  if(!t){
      return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}

main()
