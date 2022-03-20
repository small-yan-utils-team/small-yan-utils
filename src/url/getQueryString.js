/**
 * url 获取值   获取?和&的值
 * @param {*} search url 非必传，不传用loction.href
 * @param {*} name url参数名
 */
function getQueryString(search, name) {
	if (!search) search = window.location.href;
	var reg = new RegExp('(^|&?)' + name + '=([^&]*)(&|$)', 'i');
	var r = search.substr(1).match(reg);
	if (r != null) return decodeURIComponent(r[2]);
	return null;
}

// console.log(getQueryString('https://www.baidu.com/login?a=1', 'a')); // 1
// console.log(getQueryString('https://www.baidu.com/login?a=1&b=2', 'b')); // 2
// console.log(getQueryString('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10', 'wd')); // 百度

https: module.exports = getQueryString;
