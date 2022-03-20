/**
 *
 * @desc   对象序列化
 * @param  {Object} obj
 * @return {String}     将对象序列化为url参数字符串
 */
function stringfyQueryString(obj) {
	// 没传对象直接返回
	if (!obj) return '';

	const pairs = [];

	for (let key in obj) {
		let value = obj[key];
		// 数组特殊处理
		if (value instanceof Array) {
			for (let i = 0; i < value.length; ++i) {
				pairs.push(
					encodeURIComponent(key + '[' + i + ']') +
						'=' +
						encodeURIComponent(value[i])
				);
			}
			continue;
		}
		// 属性为字符串
		pairs.push(
			encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
		);
	}

	return pairs.join('&');
}
// console.log(stringfyQueryString({ a: 1, b: 2 })); // a=1&b=2

module.exports = stringfyQueryString;
