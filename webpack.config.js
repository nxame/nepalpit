const path = require('path');

module.exports = (env) => {
	return {
		entry: './src/index.js',
		output: {
			filename: 'danfebooks.pit.js',
			path: path.resolve(__dirname, env.outputPath),
			library: 'danfebooks',
			libraryTarget: 'umd',
			globalObject: 'this',
			umdNamedDefine: true,
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				},
			],
		},
	};
};
