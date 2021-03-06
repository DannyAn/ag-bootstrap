const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');
const os = require('os');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const sourcePath = path.join(__dirname, '../web');
const nodeModules = path.resolve(__dirname, '../node_modules');
const isDev =  !!(process.env.NODE_ENV != 'production');
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
function createHappyPlugin(id, loaders) {
    return new HappyPack({
        id: id,
        loaders: loaders,
        // threadPool: happyThreadPool,
    });
}
const cssLoader = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
        'happypack/loader?id=happy-css'
    ]
});
const lessLoader = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
        'happypack/loader?id=happy-less'
    ]
})
module.exports = {
    context: sourcePath,
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: nodeModules,
            include: sourcePath,
            use: ['happypack/loader?id=happy-babel-js'],
        }, {
            test: /\.css$/,
            exclude: nodeModules,
            use: isDev ? ['style-loader', 'happypack/loader?id=happy-css'] : cssLoader,
        }, {
            test: /\.less$/,
            use: isDev ? ['style-loader', 'happypack/loader?id=happy-less'] : lessLoader,
        }, {
            test: /.(gif|jpg|png)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'images/[name].[hash:8].[ext]'
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            // use: ['happypack/loader?id=happy-font']
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    name: 'font/[name].[hash:8].[ext]'
                }
            }
            ]
        }, {
            // test: require.resolve('jquery'),
            // use: [{
            //     loader: 'expose-loader',
            //     options: '$'
            // }, {
            //     loader: 'expose-loader',
            //     options: 'Zepto'
            // }]
        }],
        noParse: /node_modules\/(jquey|js\-cookie\.js)/
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            sourcePath,
            nodeModules
        ],
        alias: {
            Components: path.join(__dirname, '../web/components/')
        },
    },
    externals: {
        jquery: "$"
    },
    plugins: [
        new ExtractTextPlugin('css/[name].[contenthash:8].css'),
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, "../"),
            manifest: require('./vendor-manifest.json'),
        }),
        createHappyPlugin('happy-babel-js', [{
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                presets: ['react-hmre']
            }
        }]),
        createHappyPlugin('happy-css', [{
            loader: 'css-loader',
            query: {
                minimize: true,
            }
        }, {
            loader: 'postcss-loader',
            query: {
                config: {
                    path: path.join(__dirname, './postcss.config.js')
                },
            }
        }]),
        createHappyPlugin('happy-less', [{
            loader: 'css-loader',
            query: {
                minimize: true,
            }
        }, {
            loader: 'postcss-loader',
            query: {
                config: {
                    path: path.join(__dirname, './postcss.config.js')
                },
            }
        }, {
            loader: 'less-loader', 
            query: {
            }
        }]),
        new webpack.NamedModulesPlugin(),
        new LodashModuleReplacementPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'js/[name].js' })
    ]
};