/**
 * 功能描述: Remove Duplicates from Sorted Array(已经排好序的数组去重)
 * 2017/7/26
 * 作者：liuguanbang
 */


/**
 * 返回的是去重后的数组的长度
*/
const removeDuplicates = (inputArr) => {
	if (inputArr.length === 0) {
		return 0;
	}

	let index = 1;

	for(let i = 1; i < inputArr.length; i++) {
		if (inputArr[i] !== inputArr[index-1]) {
			inputArr[index++] = inputArr[i];
		}
	}

	return index;
};

/**
 * 返回去重后的数组
 */
const removeDuplicatesArr = (inputArr) => {
	const length = removeDuplicates(inputArr);
	return inputArr.slice(0, length);
};

/**
 * ES6简易去重
 */
const newArr = (inputArr) => [...new Set(inputArr)];
