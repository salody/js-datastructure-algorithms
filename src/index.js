/**
 * 功能描述:
 * 2017/7/26
 * 作者：liuguanbang
 */

const arr = [-1, 1, 2, -4];

const threeSumClosest = (arr, target) => {
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


//const b = [-1, [2, 3], 1, 2, -1];
const result = threeSumClosest(arr, 1);
console.log(result);
