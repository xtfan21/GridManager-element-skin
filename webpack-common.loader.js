const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (srcCodeDir, idDev) => {
    return [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        },
		{
			test: /\.html?$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeComments: false,
                    collapseWhitespace: false
                }
            }],
			exclude: /(node_modules|bower_components)/,
			include: [path.join(__dirname, srcCodeDir)]
		}, {
            test: /\.(le|c)ss/,
            use: [
                {
                    loader: idDev ? 'style-loader' : MiniCssExtractPlugin.loader
                },
                {
                    loader: 'css-loader',
                    options: {
                        url: true, // 启用/禁用 url() 处理
                        sourceMap: false // 启用/禁用 Sourcemaps
                    }
                },

                {
                    loader: 'resolve-url-loader'
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: false // 启用/禁用 Sourcemaps
                    }
                }
            ],
		}
	]
};



