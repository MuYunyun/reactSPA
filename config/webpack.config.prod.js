const autoprefixer = require('autoprefixer')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('./paths')
const getClientEnvironment = require('./env')

// 从哪里获取服务，需要一个末尾斜杠
const publicPath = paths.servedPath
// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false'
const publicUrl = publicPath.slice(0, -1)
const env = getClientEnvironment(publicUrl)

// 下面代码出于安全考虑
if (env.stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.')
}

module.exports = {
  mode: 'production',
  // 当 webpack 遇到第一个错，标红抛出并中断运行
  bail: true,
  devtool: shouldUseSourceMap ? 'source-map' : false,
  entry: {
    IndexJs: paths.appIndexJs,
  },
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath,
    // Point sourcemap entries to original disk location
    devtoolModuleFilenameTemplate: info => path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      components: `${path.resolve(__dirname, '..')}/src/common/components`,
      container: `${path.resolve(__dirname, '..')}/src/common/container`,
      images: `${path.resolve(__dirname, '..')}/src/common/images`,
      pages: `${path.resolve(__dirname, '..')}/src/common/pages`,
      utils: `${path.resolve(__dirname, '..')}/src/common/utils`,
      data: `${path.resolve(__dirname, '..')}/src/server/data`,
      actions: `${path.resolve(__dirname, '..')}/src/common/actions`,
      reducers: `${path.resolve(__dirname, '..')}/src/common/reducers`,
      api: `${path.resolve(__dirname, '..')}/src/common/api`,
    },
    plugins: [
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|jsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                'transform-decorators-legacy',
                ['import', { libraryName: 'antd', style: true }],
              ],
              compact: true,
            },
          },
          {
            test: /\.css$/,
            use: [
              // "style" loader turns CSS into JS modules that inject <style> tags.
              require.resolve('style-loader'),
              MiniCssExtractPlugin.loader,
              {
                // "css" loader resolves paths in CSS and adds assets as dependencies.
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                // "postcss" loader applies autoprefixer to our CSS.
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          },
          {
            test: /\.less$/,
            use: [
              require.resolve('style-loader'),
              require.resolve('css-loader'),
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
              {
                loader: require.resolve('less-loader'),
                options: {
                  modifyVars: { "@primary-color": "#1890ff" },
                },
              },
            ],
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.js$/, /\.html$/, /\.json$/, /\.less$/,],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.DefinePlugin(Object.assign({}, env.stringified, {
      ENABLE_DEVTOOLS: false,
    })),
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    // 生成一个能预缓存的 service worker，同时它能保持更新
    new SWPrecacheWebpackPlugin({
      // By default, a cache-busting query parameter is appended to requests
      // used to populate the caches, to ensure the responses are fresh.
      // cache-bust 跳过被 webpack hash 过的 url
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          return
        }
        if (message.indexOf('Skipping static resource') === 0) {
          return
        }
      },
      minify: true,
      // For unknown URLs, fallback to the index page
      navigateFallback: `${publicUrl}/index.html`,
      // Ignores URLs starting from /__ (useful for Firebase):
      // https://github.com/facebookincubator/create-react-app/issues/2237#issuecomment-302693219
      navigateFallbackWhitelist: [/^(?!\/__).*/],
      // Don't precache sourcemaps (they're large) and build asset manifest:
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // 实验减少了 47.68 kb
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[id].css',
    }),
  ],
  node: { // 这个对体积没影响，应该对项目引用有间接影响
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}
