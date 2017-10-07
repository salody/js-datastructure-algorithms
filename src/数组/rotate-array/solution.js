/**
 * 功能描述:
 * Rotate an array of n elements to the right by k steps.
 * For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4]
 *
 * @param {Array} nums
 * @param {int} k
 * @return {Array}
 *
 * 2017/9/12
 * 作者：liuguanbang
 */

const reverse = (nums, k) => {
	return [...nums.slice(k+1), ...nums.slice(0, k+1)]
};

console.log(reverse([1, 2, 3, 4, 5, 6, 7], 3));
