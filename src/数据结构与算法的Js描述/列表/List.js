/**
 * 功能描述: List列表的Js实现
 * 2017/9/4
 * 作者：liuguanbang
 */

const List = function () {
	this.listSize = 0;          // 列表的元素个数
	this.pos = -1;           // 列表的当前位置
	this.dataSource = [];   // 初始化一个空数组，保存列表元素
};

List.prototype = {
	// append 给列表添加元素
	append: function (element) {
		if (typeof element !== 'undefined') {
			this.dataSource.push(element);
			this.listSize++;
		}
		return this;
	},
	// remove 从列表删除元素
	remove: function (element) {
		this.dataSource = this.dataSource.filter((item) => {
			if (element === item) {
				this.listSize--;
			}
			return (element !== item);
		});
		return this;
	},
	// find 查找给定元素，如果找到就返回元素在列表中的位置，否则返回-1
	find: function (element) {
		const arrayLength = this.listSize;
		for (let i = 0; i < arrayLength; i++) {
			if (this.dataSource[i] === element) {
				return i;
			}
		}
		return -1;
	},
	// length 列表中有多少元素
	length: function () {
		return this.listSize;
	},
	// toString 显示列表中的元素
	toString: function () {
		return this.dataSource;
	},
	// insert 向列表中插入一个元素,返回boolean
	insert: function (element, after) {
		const insetPos = this.find(element);
		if (insetPos > -1) {
			this.dataSource.splice(insetPos + 1, 0, element);
			this.listSize++;
			return true;
		}
		return false;
	},
	// clear 情况所有元素
	clear: function () {
		this.dataSource = [];
		this.listSize = 0;
		this.pos = 0;
	},
	// contains 判断给定值是否在表中。对于引用数据来说，比较的是内存
	contains: function (element) {
		for (let i = 0; i < this.listSize; i++) {
			if (this.dataSource[i] === element) {
				return true
			}
		}
		return false;
	},
	// 遍历数组
	front: function () {
		this.pos = 0
	},
	end: function () {
		this.pos = this.listSize - 1;
	},
	prev: function () {
		if (this.pos > 0) {
			this.pos--;
		}
		this.pos = 0;
	},
	next: function () {
		if (this.pos < this.listSize) {
			this.pos++;
		}
	},
	currPos: function () {
		return this.pos;
	},
	moveTo: function (position) {
		this.pos = position;
	},
	getElement: function () {
		return this.dataSource[this.pos];
	},
	hasNext: function () {
		return this.pos < this.listSize - 1;
	},
	hasPrev: function () {
		return this.pos > 0;
	}
};


/*
* 迭代器的概念
* front()、end()、prev()、next()和currPos实现了一个类的迭代器。
* 使用迭代器时：
* 不用关心底层的数据存储结构
* 可以用不同类型的数据结构存储方式实现类，迭代器为访问列表里的元素提供了一种统一的方式
* */

// 使用迭代器遍历列表
// for (front(); hasNext(); next()){
// 	getElement()
// }

// 从后向前遍历
// for (end(), hasPrev(); prev()) {
// 	getElement()
// }






const list = new List();
const a = [1, 2, 3, 4, 4];
list.append(1).append(2).append('dhud').append(a);
list.front();
//list.prev();
list.next();

console.log(list.pos);


