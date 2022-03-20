/**
 * @desc webpack打包入口文件
 * @example 自动引入子目录下所有js文件
 */
let moduleExports = {};

// require.context执行后，返回一个方法webpackContext，
// 这个方法又返回一个__webpack_require__，这个__webpack_require__就相当于require或者import。
// 同时webpackContext还有二个静态方法keys与resolve，一个id属性。
const r = require.context('./', true, /^\.\/.+\/.+\.js$/);
// console.log(3333333, r);
// keys: 返回匹配成功模块的名字组成的数组
// resolve: 接受一个参数request，request为test文件夹下面匹配文件的相对路径，返回这个匹配文件相对于整个工程的相对路径
// id: 执行环境的id，返回的是一个字符串，主要用在module.hot.accept，应该是热加载
r.keys().forEach((key) => {
	let attr = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
	moduleExports[attr] = r(key);
});

module.exports = moduleExports;
