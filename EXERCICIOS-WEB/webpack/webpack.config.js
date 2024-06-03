const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        static: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
            }),
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader, //Extrai o CSS para um arquivo externo
                //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // Interpreta @import, url()...
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                esModule: false,
            }
        }]
    }
}