/**
 * 功能描述:
 * 2017/9/11
 * 作者：liuguanbang
 */

const Stack = function () {
	this.dataSource = [];
};

Stack.prototype = {
	push: function (ele) {
		this.dataSource.push(ele);
	},
	pop: function () {
		this.dataSource.pop();
	},
	// 返回栈顶元素
	peek: function () {
		return this.dataSource[this.dataSource.length - 1];
	}
};
