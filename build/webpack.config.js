// 引入node核心模块path模块
const path = require('path');

// 引入package.json文件
const pkg = require('../package.json');

// 根目录
const rootPath = path.resolve(__dirname, '../');

const config = {
	// 打包模式
	mode: 'none',
	// mode: 'development',
	// mode: 'production',
	// 入口文件(输入流)
	entry: path.resolve(rootPath, 'src', 'index.js'),
	// 输出文件(输出流)
	output: {
		filename: `${pkg.name}.min.js`,
		path: path.resolve(rootPath, 'min'),
		library: `${pkg.name}`,
		libraryTarget: 'umd',
	},
	// 对模块进行解析
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				// 将下面配置移动到babel.config.js文件中去了
				// use: [
				// 	{
				// 		// 配置bable-loader转换js
				// 		loader: 'babel-loader',
				// 		options: {
				// 			// 解析最新js的语法，预设是插件的集合
				// 			presets: [
				// 				[
				// 					'@babel/preset-env',
				// 					// { targets: 'chrome 91' }
				// 				],
				// 			],
				// 		},
				// 	},
				// ],
			},
		],
	},
};

module.exports = config;
