const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

};

module.exports = {
    // ... другие настройки ...
    module: {
        rules: [
            // ... другие правила ...
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                }
            }
        ]
    }
};

module.exports = {
    // ... другие настройки ...
    module: {
        rules: [
            // ... другие правила ...
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                include: /src/
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx','.css', '.scss'],
    },
    plugins: [
    ],
    devServer: {
        port: 8001,
        hot: true,
    },
    mode: 'development',
};

