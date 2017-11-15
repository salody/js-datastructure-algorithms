/**
 * BinartSearchTree  BST  二叉查找树
 *
 * 二叉树的特点
	1）每个结点最多有两棵子树
	2）左子树和右子树是有顺序的，不能颠倒次序
	3）即使树中只有一棵子树，也要区分是左子树 还是右子树
 */

// 先定义节点类
class Node {
	constructor(data) {
		this.data = data;
		this.left = this.right = null;
		this.show = this.show.bind(this);
	}

	// 显示保存在节点中的数据
	show() {
		return this.data;
	}
}

class BinarySearchTree {
	constructor() {
		// 根节点，初始化为null
		this.root = null;
		this.insert = this.insert.bind(this);
	}

	// 向树中插入新节点.使得左边的值永远小于右边的值
	insert(data) {
		let node = new Node(data);

		// 如果是新树，则创建树
		if (this.root === null) {
			this.root = node;
		} else {
			let current = this.root;
			let parent;
			while (true) {
				parent = current;
				if (data < current.data) {
					current = current.left;
					if (current === null) {
						parent.left = node;
						break;
					}
				} else {
					current = current.right;
					if (current === null) {
						parent.right = node;
						break;
					}
				}
			}
		}
	}

	// 中序遍历 以升序访问BST上的所有节点
	static inOrder(node) {
		if (node !== null) {
    	this.inOrder(node.left);
    	console.log(node.show());
    	this.inOrder(node.right);
    }
  }

  // 前序遍历
  static preOrder(node) {
    if (node !== null) {
      console.log(node.show());
      this.inOrder(node.left);
      this.inOrder(node.right);
    }
  }

  // 后序遍历
  static postOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      this.inOrder(node.right);
      console.log(node.show());
    }
  }
}


const nums = new BinarySearchTree();
nums.insert(12);
nums.insert(232);
nums.insert(1);
nums.insert(122);
nums.insert(42);
nums.insert(85);
nums.insert(24);
nums.insert(224);
nums.insert(27);
nums.insert(128);
nums.insert(36);
nums.insert(72);
nums.insert(81);
nums.insert(33);

/**
 *                   12
 *               1            232
 *                         122
 *                       42
 *                         85
 */

// 从二叉树的根节点开始访问二叉树
//BinarySearchTree.inOrder(nums.root);
BinarySearchTree.preOrder(nums.root);
BinarySearchTree.postOrder(nums.root);
