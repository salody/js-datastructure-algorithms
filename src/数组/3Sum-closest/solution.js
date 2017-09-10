/**
 * 功能描述:Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
 For example, given array S = {-1 2 1 -4}, and target = 1.
 The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 2017/7/31
 * 作者：liuguanbang
 */

const threeSumClosest = (arr, target) => {
	// 先排序
	const sortArr = arr.sort();
	let result = 0;
	let minGap = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < sortArr.length; i++) {
		let j = i + 1;
		let k = sortArr.length - 1;

		while (j < k) {
			const sum = sortArr[i] + sortArr[j] + sortArr[k];
			const gap = Math.abs(sum - target);

			if (gap < minGap) {
				result = sum;
				minGap = gap;
			}
			// 左右夹逼
			if (sum < target) {
				j = j + 1;
			} else {
				k = k - 1;
			}
		}
	}
	return result;
};
