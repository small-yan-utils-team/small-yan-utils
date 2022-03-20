/**
 *
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object} 将参数封装成对象
 */
function parseQueryString(url = window.location.href) {
	// 没有参数直接返回
	if (url.indexOf('?') === -1) return {};
	let search =
		url[0] === '?' ? url.slice(1) : url.slice(url.lastIndexOf('?') + 1);
	// ? 后面没有参数直接返回
	if (search === '') return {};
	// 以&分割获取参数数组
	search = search.split('&');
	// 初始化参数对象
	const query = {};
	for (const parm of search) {
		const [key, val] = parm.split('=');
		// 保存参数
		query[decodeURIComponent(key)] = decodeURIComponent(val || '');
	}
	return query;
}

// console.log(parseQueryString('https://www.baidu.com/login')); // {}
// console.log(parseQueryString('https://www.baidu.com/login?a=1')); // { a: '1' }
// console.log(parseQueryString('https://www.baidu.com/login?a=1&b=2')); // { a: '1', b: '2' }

module.exports = parseQueryString;
