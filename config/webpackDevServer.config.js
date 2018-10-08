const config = require('./webpack.config.dev')
const paths = require('./paths')

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
const host = process.env.HOST || '0.0.0.0'

module.exports = (allowedHost) => ({
  // disableHostCheck: !proxy, // dns 攻击相关
  compress: true, // 启用 gzip 压缩生成的文件.
  clientLogLevel: 'none', // 使 WebpackDevServer 自己的日志无效，因为它们通常没有用处。
  contentBase: paths.appPublic,
  watchContentBase: true,
  hot: true, // 热更新，css 代码静态刷新，js 代码变动会刷新浏览器
  publicPath: config.output.publicPath, // 与 contentBase 叠加使用
  watchOptions: { // 避免某些系统的 CPU 过载
    ignored: /node_modules/,
  },
  https: protocol === 'https',
  host,
  overlay: false,
  public: allowedHost,
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:4000',
    },
  },
})
