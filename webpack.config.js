var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
    context: path.join(__dirname, 'src/css'),
    entry: {
        style: './src/scss/style.scss'
    },
    output: {
        path: path.join(__dirname, 'dist/css'),
        filename: '[name].css'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-url&minimize&sourceMap!sass-loader')
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}];