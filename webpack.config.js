const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const devServer = require('./devServer');
const autoprefixer = require('autoprefixer');

const src_dir          = './src/';
const test_dir         = './test/';
const node_modules_dir = './node_modules';
const res_dir          = './build/';


module.exports = (env) =>  {
    return {
        entry: {
            test: path.join(__dirname, test_dir, 'js', 'test-src.js'),
        },
        output: {
            path: path.join(__dirname, res_dir),
            filename: 'js/[name].[chunkhash].js',
            chunkFilename: 'js/[name].[chunkhash].js',
            publicPath: '/',
        },
        resolve: {
            alias: {
                'jquery': path.join(__dirname, 'node_modules/jquery/dist/jquery'),
                //'mdlp2-scrollbar': path.join(__dirname, 'node_modules/react-scrollbar/dist/no-css.js'),
                //'inputmask.dependencyLib': path.join(__dirname, 'node_modules/jquery.inputmask/dist/inputmask/inputmask.dependencyLib'),
                //'inputmask': path.join(__dirname, 'node_modules/jquery.inputmask/dist/inputmask/inputmask'),
                //'jquery.inputmask': path.join(__dirname, 'node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask'),
                //'inputmask.numeric.extensions': path.join(__dirname, 'node_modules/jquery.inputmask/dist/inputmask/inputmask.numeric.extensions'),
                //'inputmask.extensions': path.join(__dirname, 'node_modules/jquery.inputmask/dist/inputmask/inputmask.extensions'),
                //'inputmask.date.extensions': path.join(__dirname, 'node_modules/jquery.inputmask/dist/inputmask/inputmask.date.extensions'),
                //'json.viewer': path.join(__dirname, 'node_modules/jquery.json-viewer/json-viewer/jquery.json-viewer')
            },
            extensions: ['.js', '.jsx'],
        },
        plugins: [
            new webpack.DefinePlugin({
                'NODE_ENV': JSON.stringify(env.NODE_ENV)
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.ProgressPlugin(),
            new HTMLWebpackPlugin({
                template: path.resolve(test_dir, 'pug/test-src.pug'),
                filename: 'test.html',
                inject: 'body',
                chunks: ['test']
            }),
            new ExtractTextPlugin({
                filename: 'css/test.css'
            }),
            new CopyWebpackPlugin([
                {
                    from: path.resolve(test_dir, 'json/'),
                    to: path.resolve(res_dir, 'json')
                }
            ]),
            //new FaviconsWebpackPlugin({
            //    logo: path.resolve(test_dir, 'css', 'img', 'favicon.png'),
            //    inject: true,
            //    icons: {
            //        android: false,
            //        appleIcon: false,
            //        appleStartup: false,
            //        coast: false,
            //        favicons: true,
            //        firefox: false,
            //        opengraph: false,
            //        twitter: false,
            //        yandex: false,
            //        windows: false
            //    }
            //})
        ],
        devtool: 'source-map',
        devServer: {
            contentBase: path.resolve(res_dir),
            publicPath: '/',
            host: '0.0.0.0',
            port: 5000,
            index: 'test.html',
            before: devServer,
            clientLogLevel: "error",
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/env", "@babel/react", ["@babel/stage-1", { "decoratorsLegacy": true }]],
                            plugins: [
                                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                                ["@babel/plugin-proposal-class-properties", { loose: true }],
                                ['babel-plugin-dynamic-import-webpack']
                            ],
                            babelrc: false
                        }
                    },
                    include: [
                        path.resolve(src_dir),
                        path.resolve(node_modules_dir, 'crypto-pro'),
                        path.resolve(test_dir, 'js'),
                    ]
                },
                {
                    test: /\.(jpe?g|png|ttf|gif|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                    use: 'base64-inline-loader?name=[name].[ext]',
                },
                {
                    test: /\.css?$/,
                    use: ['style-loader', 'css-loader'],
                    include: [
                        path.resolve(src_dir),
                        path.resolve(node_modules_dir, 'codemirror'),
                        path.resolve(test_dir, 'js'),
                    ]
                },
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            'css-loader?sourceMap=true',
                            {
                                loader: 'less-loader',
                                options: {
                                    relativeUrls: false,
                                    paths: [path.resolve(node_modules_dir)]
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: function () {
                                        return [autoprefixer('last 2 versions', 'ie 10')]
                                    }
                                }
                            }
                        ]
                    }),
                    include: [
                        path.resolve(src_dir),
                        path.resolve(test_dir, 'js'),
                    ]
                },
                {
                    test: /\.pug$/,
                    use: {
                        loader: 'pug-loader',
                        options: {},
                    },
                    include: [
                        path.resolve(test_dir, 'pug')
                    ]
                }
            ]
        },
        stats: {
            colors: true,
            warnings: false,
            timings: true,
            children: false,
        }
    };
}