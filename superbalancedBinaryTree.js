  function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
    this.maxLeaf = null;
    this.minLeaf = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

function isBalanced(root) {
  // tree is super balanced if ...
    // 2 leaf depths are not more than 1 apart
    // at max only 1 between leaf depths
  if (!treeRoot) {
    return true;
  }
  var depths = [];
  // node stores node and node's depth
  var nodes = [];
  nodes.push([root, 0]);

  while (nodes.length) {
    var nodePair = nodes.pop();
    var node = nodePair[0];
    var depth = nodePair[1];

    if (node.left !== null && node.right !== null) {
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        if ((depths.length > 2) || (Math.abs(depths[0] - depths[1]) > 1)) {
          return false;
        }
      }
    } else {
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  return true;

}