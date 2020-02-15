const path = require("path");
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
    
 const prod = env !== undefined && env.production === true;
 const dev = env !== undefined && env.development === true;

    return {
        entry: "./src/js/index.js",
       
       output: {
        publicPath: dev ? "/dist/" : "",
        //filename:"bundle.js",
        path: path.resolve(__dirname, "dist/"),
        filename: prod ? "[name].[chunkhash].js" : "[name].js"
    },

    devtool: "cheap-module-eval-source-map",

    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:[
                            [
                              "@babel/env",
                              {
                                "targets": {
                                  "edge": "17",
                                  "firefox": "60",
                                  "chrome": "67",
                                  "safari": "11.1",
                                },
                                "useBuiltIns": "usage",
                              }
                            ]
                          ]
                    }

                }

            },
            {
                test:/\.scss$/,
            //     use:[
            //         {
            //         loader:"style-loader"
            //     },{
            //         loader:"css-loader"
            //     },{
            //         loader:"sass-loader"
            //     }
            //   ]
            use: ExtractTextWebpackPlugin.extract({
                fallback: "style-loader",
                use:"css-loader!sass-loader"
            })
             },
            //{
            //     test:/\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            //     use:{
            //         loader:"file-loader"
            //     }
            // }
            {
                test:/\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader:"url-loader",
                options:{
                    limit:10000,
                    name:"[name].[ext]"
                }
             }
        ]
    },

    plugins:[
        new ExtractTextWebpackPlugin("style.css"),
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        
    ]
    }
}