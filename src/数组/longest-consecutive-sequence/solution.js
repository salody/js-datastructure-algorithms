/**
 * 功能描述: Given [100, 4, 200, 1, 3, 2], The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
 * 2017/7/29
 * 作者：liuguanbang
 */

const longestConsecutiveSequence = (arr) => {
	// 数组去重,并变为Set数据结构
	const mySet = new Set(arr);
	let longest = 0;

	// 用一个哈希表存储所有出现过的元素，对每个元素，以该元素为中心，往左右扩张，直到不连续为止，记录下最长的长度。
	for (let i of mySet) {
		let length = 1;
		for (let j = i - 1; mySet.has(j); j--) {
			mySet.delete(j);
			++length;
		}
		for (let j = i + 1; mySet.has(j); j++) {
			mySet.delete(j);
			++length;
		}
		longest = Math.max(longest, length);
	}

	return longest;
};