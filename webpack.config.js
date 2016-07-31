module.exports = {
	entry:	['./js/app.js','./js/selectrender.js'],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.html$/, loader: 'html?minimize' },
			{ test: /\.css$/, loader: 'style!css' }
		]
	}
};
