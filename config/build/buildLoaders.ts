import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
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
  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ['cn', 'en'],
              "nsSeparator": "~",
              keyAsDefaultValue: true,
            }
          ],
        ]
      }
    }
  }
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    tsLoader,
    cssLoader,
    svgLoader,
    fileLoader,
    babelLoader,
  ];
};
