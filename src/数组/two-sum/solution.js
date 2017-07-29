/**
 * 功能描述:Given an array of integers, find two numbers such that they add up to a specific target number.
 The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
 You may assume that each input would have exactly one solution.
 Input: numbers=[2, 7, 11, 15], target=9
 Output: index1=1, index2=2
 * 2017/7/29
 * 作者：liuguanbang
 */

const twoSum = (arr, target) => {
	const myMap = new Map();

	// hash。用一个哈希表，存储每个数对应的下标
	for (let i = 0; i < arr.length; i++) {
		myMap.set(arr[i], i);
	}

	for (let i = 0; i < arr.length; i++) {
		const v = myMap.get(target - arr[i]);

		if (v !== undefined && v > i){
			return [i, v];
		}
	}

	return null;
};