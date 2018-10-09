const Webpack = require('Webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');   //复制插件
//打包样式文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('css/[name]-css.css');  //拆分css样式的插件
const extractLess = new ExtractTextPlugin('css/[name]-less.css');//拆分less样式的插件
const extractSASS = new ExtractTextPlugin('css/[name]-sass.css');// 拆分sass的插件
//构建前删除dist目录
const CleanWebpackPlugin = require('clean-webpack-plugin'); //删除插件
const HtmlWebpackPlugin = require('html-webpack-plugin');   //自动生成html插件
const Htmlwithimg = require('html-withimg-loader');         //HTML中img标签引用图片 

module.exports = {
    entry: './src/js/index.js',  // 入口文件
    output: {                    // 出口文件
        // 添加hash可以防止文件缓存，每次都会生成4位的hash串
        filename: 'bundle.[hash:4].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {                    // 处理对应模块
        rules: [
            {
                test: /\.css$/,
                //use: ['style-loader', 'css-loader', 'postcss-loader']
                use: extractCSS.extract({
                    use: [{
                        loader: "css-loader",
                        options: { minimize: true } //css压缩
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: ['css-loader', 'autoprefixer-loader', 'less-loader'],
                    fallback: 'style-loader',
                })
            },
            {
                test: /\.scss$/,
                use: extractSASS.extract({
                    use: [{
                        loader: "css-loader",
                        options: { minimize: true } //css压缩
                    },
                    {
                        loader: "sass-loader",
                        options: { minimize: true } //css压缩
                    }],      // 从右向左解析
                    fallback: "style-loader",
                })
            },
            // {
            //     test: /\.(css|scss|sass)$/,
            //     // 此处为使用postcss分离css的写法
            //     use: extractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: ["css-loader", "sass-loader", "postcss-loader"],
            //         // css中的基础路径
            //         publicPath: "../"
            //     })
            // },
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
            chunks: 'bundle.[hash:4]',  // 多页面分别引入自己的js
            minify: {
                collapseWhitespace: true,  //折叠空白区域 也就是压缩代码
                removeComments: true,      //移除HTML中的注释
            }
        }),
        extractCSS,  //拆分后会把css文件放到dist目录下的css/[name].css
        extractLess, //拆分后会把lessss文件放到dist目录下的css/[name].css
        extractSASS, //拆分后会把sass文件放到dist目录下的css/[name].css
        new ExtractTextPlugin('[name].css'),
        new CopyWebpackPlugin([
            { from: './src/images', to: './src/images' },
            { from:'./src/css',to:'./src/css'},
            { from: './src/fonts', to: './src/fonts' },
            { from: './src/html', to: './src/html' },
            { from: './src/js', to: './src/js' },
            { from: './src/plugins', to: './src/plugins' },
        ]),
    ],
    // optimization: {  // 提取公共代码
    //     splitChunks: {            
    //         cacheGroups: {                
    //             vendor: {   // 抽离第三方插件                    
    //                 test: /node_modules/,   // 指定是node_modules下的第三方包                    
    //                 chunks: 'initial',                    
    //                 name: 'vendor',  // 打包后的文件名，任意命名                        
    //                 // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包                    
    //                 priority: 10                    
    //             },                
    //             utils: { // 抽离自己写的公共代码，utils这个名字可以随意起                    
    //                 chunks: 'initial',                    
    //                 name: 'utils',  // 任意命名                    
    //                 minSize: 0    // 只要超出0字节就生成一个新包                
    //             }            
    //         }        
    //     }   
    // },
    // resolve: {     //在webpack的配置中，resolve我们常用来配置别名和省略后缀名
    //     alias: {        // 别名
    //         $: './src/jquery.js'
    //     },        
    //     extensions: ['.js', '.json', '.css']   // 省略后缀
    // },
    //mode: 'development'      // 模式配置
}