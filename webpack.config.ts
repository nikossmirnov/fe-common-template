import path from "path";
import webpack from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnvironment, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnvironment) => { 
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
  };
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = process.env.NODE_ENV === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
  return config
};