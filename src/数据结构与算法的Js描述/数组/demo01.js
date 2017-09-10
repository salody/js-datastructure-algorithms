/**
 * 功能描述:
 * 2017/9/4
 * 作者：liuguanbang
 */

const arr = [0, 'a', {"sa": 1}, [1,2,3]];

console.log(arr["0"]);
console.log(arr["1"]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr['1.5']);

const info = {
	status: 200,
	msg: {
		user:{
			name: 'Peter',
			country: 'Japan',
			company: {
				name: '全球无限皮包公司',
				ceo: {
					name: 'Lucy'
				}
			}
		}
	}
}

// node中console.log只能查看最多三层嵌套,后面的显示为object
console.log(info);
