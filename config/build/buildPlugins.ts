import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export const buildPlugins = (htmpTemplatePath: string): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
        template: htmpTemplatePath,
        }),
        new webpack.ProgressPlugin(),
    ];
};