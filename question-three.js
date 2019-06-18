const BinarySearchTree = require('./bst')
const height = require('./height')

function main() {
  const bst = new BinarySearchTree()

  const int = [
    3, 1, 4, 6, 9, 2, 5, 7
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
  console.log(bst)
  // console.log(tree(bst))
  console.log(height(bst))
  bst.remove('E')
  console.log(height(bst))
}

function tree(t){
  if(!t){
      return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}

main()
