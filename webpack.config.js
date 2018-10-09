const Webpack = require('Webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');   //复制插件
//打包样式文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //压缩样式文件插件
//构建前删除dist目录
const CleanWebpackPlugin = require('clean-webpack-plugin'); //删除插件
const HtmlWebpackPlugin = require('html-webpack-plugin');   //自动生成html插件
const Htmlwithimg = require('html-withimg-loader');         //HTML中img标签引用图片 

module.exports = {
    entry:{     // 多入口文件
        bundle: ['./src/js/index.js',],
        newsindex: ['./src/js/newsindex.js']
    },
    output: {   //出口文件
        filename: '[name].[hash:4].js',      // 添加hash可以防止文件缓存，每次都会生成4位的hash串
        chunkFilename: "[name].[hash:4].js",
        path: path.resolve(__dirname, './dist')
    },
    module: {                    // 处理对应模块
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "css-loader",
                        options: {sourceMap: true},
                    },
                    "style-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: true},
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "css-loader",
                        options: {sourceMap: true},
                    },
                    'scss-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, //匹配时忽略的目录，提高打包速度
                include: path.resolve(__dirname, 'src'),    // 匹配时查找的范围,只转化src目录下的js
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true//缓存
                    }
                }
            },
            {   //打包css里的图片,并处理引用路径
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,  //小于8KB,就base64编码
                            //outputPath: 'src/images/',   // 图片打包后存放的目录
                            name: 'src/images/[name].[ext]',  //在哪里生成
                            publicPath: '../'    //在生成的文件引用,前面加
                        }
                    }
                ]
            },
            {   //页面中经常会用到img标签，img引用的图片地址也需要一个loader来帮我们处理好
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
            },
            {   //字体图标和svg图片都可以通过file-loader来解析
                test: /\.(eot|ttf|woff|svg)$/,
                use: 'file-loader'
            },  //这样即使样式中引入了这类格式的图标或者图片都没有问题了,img如果也引用svg格式的话，配合上面写好的html-withimg-loader就都没有问题了
        ]
    },
    devServer: {                // 开发服务器配置
        // 设置服务器访问的基本目录
        contentBase: path.resolve(__dirname, 'dist'), //最好设置成绝对路径
        // 设置服务器的ip地址,可以是localhost
        host: 'localhost',
        // 设置端口
        port: 3000,
        // 设置自动打开浏览器
        open: true,
        // 设置自动更新
        hot: true
    },
    plugins: [                  // 对应的插件
        new Webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist', 'build'], {   // 打包前先清空
            verbose: false,
            exclude: ['images']//不删除images静态资源
        }),
        new HtmlWebpackPlugin({
            template: './index.html',// 模板文件
            filename: 'index.html',
            title: 'webpack打包',
            hash: true,          // 会在打包好的bundle.js后面加上hash串
            chunks: ['bundle'],  // 多页面分别引入自己的js
            minify: {
                collapseWhitespace: true,  //折叠空白区域 也就是压缩代码
                removeComments: true,      //移除HTML中的注释
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/html/news/newslist.html',// 模板文件
            filename: 'src/html/news/newslist.html',
            title: '新闻列表页',
            hash: true,          // 会在打包好的newsindex.js后面加上hash串
            chunks: ['newsindex'],  // 多页面分别引入自己的js
            minify: {
                collapseWhitespace: true,  //折叠空白区域 也就是压缩代码
                removeComments: true,      //移除HTML中的注释
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/html/news/newsdetail.html',// 模板文件
            filename: 'src/html/news/newsdetail.html',
            title: '新闻详情页',
            hash: true,          // 会在打包好的newsindex.js后面加上hash串
            chunks: ['newsindex'],  // 多页面分别引入自己的js
            minify: {
                collapseWhitespace: true,  //折叠空白区域 也就是压缩代码
                removeComments: true,      //移除HTML中的注释
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',  //如果需要将css文件单独放入css文件夹中需要./src/css/
        }),
        // new MiniCssExtractPlugin({
        //     filename: './src/css/main.[hash].css',  //如果需要将css文件单独放入css文件夹中需要./src/css/
        //     chunkFilename: './src/css/main.[contenthash].css'
        // }),
        new CopyWebpackPlugin([
            { from: './src/images', to: './src/images' },
            { from: './src/css',to:'./src/css'},
            { from: './src/fonts', to: './src/fonts' },
            { from: './src/html', to: './src/html' },
            { from: './src/js', to: './src/js' },
            { from: './src/plugins', to: './src/plugins' },
        ]),
    ]
}