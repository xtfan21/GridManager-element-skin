const path = require('path');
const genRules = require('./webpack-common.loader');
const buildPath = path.join(__dirname, '/');
const config = {
    mode: 'development',

    // map
    //  http://www.css88.com/doc/webpack2/configuration/devtool/
    devtool: 'cheap-eval-source-map',

	// 入口文件配置
	context: path.join(__dirname, "src/"),

	// 入口文件配置
	entry: {
		js: './demo/app.js'
	},

    // 文件导出的配置
    output:{
        // path: '/' ,
        filename: "js/app.js",
        // publicPath 对于热替换（HMR）是必须的，让webpack知道在哪里载入热更新的模块（chunk）
        publicPath: "/"
    },

    // 处理项目中的不同类型的模块
	module: {
		rules: genRules('src', true)
	}
};

module.exports = config;
