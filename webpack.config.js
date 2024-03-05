const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        filename: path.resolve(__dirname, './src/index.js'),
    },
    module: {
        rules:[
            {
                test:/\.(jpg|jpeg)$/i,
                type: 'assets/resource'
            }
        ]
    },
    plugins:[
        
        new CopyPlugin({
            patterns: [
              { from: "src", to: "dest" },
            ],
        }),
    ],
}