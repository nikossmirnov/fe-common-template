import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {
  const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
  };
  const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (resourcePath: string) => resourcePath.endsWith('.module.scss'),
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
              },
            },
          },
          "sass-loader",
        ],
  };
    return [
        tsLoader,
        cssLoader,
    ];
};