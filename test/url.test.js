const {
	getQueryString,
	parseQueryString,
	stringfyQueryString,
} = require('../src/url/index');

// https://www.jianshu.com/p/f9813da2322c       jest判断的api
test('getQueryString', () => {
	expect(getQueryString('https://www.baidu.com/s?wd=a', 'wd')).toEqual('a');
	expect(
		getQueryString(
			'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10',
			'wd'
		)
	).toEqual('百度');
});

test('parseQueryString', () => {
	expect(
		parseQueryString(
			'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'
		)
	).toEqual({
		wd: '百度',
		rsv_spt: '10',
	});
});

test('stringfyQueryString', () => {
	expect(stringfyQueryString({ a: 1, b: 2 })).toEqual('a=1&b=2');
});
