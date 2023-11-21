import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCSSExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export const buildPlugins = (htmpTemplatePath: string): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: htmpTemplatePath,
        }),
        new webpack.ProgressPlugin(),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ];
};