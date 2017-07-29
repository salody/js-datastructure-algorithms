/**
 * 功能描述:
 * 2017/7/26
 * 作者：liuguanbang
 */

const arr = [100, 4, 200, 1, 3, 2, 2, 0];

const twoSum = (arr, target) => {
	const myMap = new Map();

	for (let i = 0; i < arr.length; i++) {
		myMap.set(arr[i], i);
	}

	for (let i = 0; i < arr.length; i++) {
		const v = myMap.get(target - arr[i]);
		if (v !== null && v > i){
			return [i, v];
		}
	}

	return null;
};

const result = twoSum(arr, 4);
console.log(result);

const m = new Map();
console.log(m.get('w')===null);