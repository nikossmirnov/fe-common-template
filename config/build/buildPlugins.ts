import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
// import ReactRefreshWebpackPlugin from "react-refresh-webpack-plugin";
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: paths.htmlTemplate,
  }),
  new webpack.ProgressPlugin(),
  new MiniCSSExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }),
  //  new webpack.ReactRefreshWebpackPlugin(),
];
