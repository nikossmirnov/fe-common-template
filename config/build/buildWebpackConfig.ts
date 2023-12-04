import type webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { type BuildOptions } from './types/config'

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { paths, mode, isDev } = options
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options)
        },
    resolve: buildResolvers(options),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true
        },
    plugins: buildPlugins(options),
    devtool: 'inline-source-map',
    devServer: buildDevServer(options)
    }
}
