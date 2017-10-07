/**
 * 功能描述:
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array,
 * and it should return false if every element is distinct.
 *
 * @param {Array} nums
 * @return {boolean}
 *
 * 2017/9/12
 * 作者：liuguanbang
 */

const containsDuplicate = (nums) => {
	const set = new Set(nums);
	const length = set.size;
	return !(nums.length === length);
};

const nums1 = [1,2,3,4,5,6];
const nums2 = [1,1,2,3,1,4,3];

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
