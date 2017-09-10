/**
 * 功能描述: List列表的Js实现
 * 2017/9/4
 * 作者：liuguanbang
 */

const List = function () {
	this.listSize = 0;          // 列表的元素个数
	this.pos = 0;           // 列表的当前位置
	this.dataSource = [];   // 初始化一个空数组，保存列表元素
};

List.prototype = {
	// 给列表添加元素
	append: function (element) {
		if (typeof element !== undefined) {
			this.dataSource.push(element);
			this.listSize++;
		}
		return this;
	},
	// 从列表删除元素
	remove: function (element) {
		this.dataSource = this.dataSource.filter((item) => {
			if (element === item) {
				this.listSize--;
			}
			return (element !== item);
		});
		return this;
	},
	// 查找给定元素，如果找到就返回元素在列表中的位置，否则返回-1
	find: function (element) {
		const arrayLength = this.listSize;
		for (let i = 0; i < arrayLength; i++) {
			if (this.dataSource[i] === element) {
				return i;
			}
		}
		return -1;
	}
};



const list = new List();
const a = [1,2,3,4,4];
list.append(1).append(2).append('dhud').append(a);
console.log(list.find(5));
console.log(list.find(a));
console.log(list.dataSource);
list.find(a);
