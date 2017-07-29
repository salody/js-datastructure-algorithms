/**
 * 功能描述:
 * Follow up for "Remove Duplicates": What if duplicates are allowed at most twice?
 * For example, given sorted array A = [1,1,1,2,2,3], your function should return length = 5, and A is now [1,1,2,2,3]
 * 2017/7/26
 * 作者：liuguanbang
 */

const removeDuplicates = (arrIn) => {
	if (arrIn.length <= 2) return arrIn.length;

	let index = 2;

	for (let i = 2; i < arrIn.length; i++) {
		if(arrIn[i] !== arrIn[index - 2]) {
			arrIn[index++] = arrIn[i];
		}
	}

	//arrIn = arrIn.slice(0, index);
	return index;
};