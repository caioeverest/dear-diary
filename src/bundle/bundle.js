import webpack from "webpack"
import logger from "../logger"

const buildConfig = (bundleName, entrypointPath, bundleOutputPath) => ({
  mode: "production",
  entry: {
    main: ["@babel/runtime/regenerator", entrypointPath]
  },
  output: {
    path: bundleOutputPath,
    filename: bundleName,
    publicPath: "/",
    libraryTarget: "amd"
  },
  module: {
    rules: [
      {
        test: /\.(js)?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          rootMode: "upward"
        }
      }
    ]
  }}
);

export default (name, entrypointPath) =>
  new Promise((resolve, reject) => {
    const bundleName = `${name}-bundle.js`
    const bundleOutputPath = `${process.cwd()}/public`
    const config = buildConfig(bundleName, entrypointPath, bundleOutputPath)
    const bundler = webpack(config)
    bundler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        logger.error(`fail to start client webpack ${err}`)
        console.log(stats)
        const { errors } = stats.compilation
        reject(errors)
      } else {
        resolve({ bundleName, bundleOutputPath, stats })
      }
    })
  })
