import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
  const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
  };
  const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
  };
    return [
        tsLoader,
        sassLoader,
    ];
};