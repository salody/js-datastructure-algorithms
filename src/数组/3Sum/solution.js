/**
 * 功能描述:Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.+

 Note:
 Elements in a triplet (a,b,c) must be in non-descending order. (ie, a≤b≤c)
 The solution set must not contain duplicate triplets.
 For example, given array S = {-1 0 1 2 -1 -4}.
 A solution set is:
 (-1, 0, 1)
 (-1, -1, 2)
 * 2017/7/29
 * 作者：liuguanbang
 */

const  _ = require('lodash');

const threeSum = (arr) => {
	// 先排序
	const sortArr = arr.sort();
	let result = [];

	for (let i = 0; i < sortArr.length; i++) {
		for (let j = i + 1; j < sortArr.length; j ++) {
			const v = 0 - sortArr[i] - sortArr[j];
			if (sortArr.indexOf(v) > j) {
				result.push([sortArr[i], sortArr[j], v]);
			}
		}
	}

	// 使用Lodash库，对数组进行深度去重
	return _.uniqWith(result, _.isEqual);
};
