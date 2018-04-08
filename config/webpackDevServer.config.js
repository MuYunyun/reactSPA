'use strict';

const errorOverlayMiddleware = require('react-error-overlay/middleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const config = require('./webpack.config.dev');
const paths = require('./paths');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function(proxy, allowedHost) {
  return {
    // WebpackDevServer 2.4.3 introduced a security fix that prevents remote
    // websites from potentially accessing local content through DNS rebinding:
    // https://github.com/webpack/webpack-dev-server/issues/887
    // https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a
    // However, it made several existing use cases such as development in cloud
    // environment or subdomains in development significantly more complicated:
    // https://github.com/facebookincubator/create-react-app/issues/2271
    // https://github.com/facebookincubator/create-react-app/issues/2233
    disableHostCheck: !proxy ||
      process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    // 启用 gzip 压缩生成的文件.
    compress: true,
    // 使 WebpackDevServer 自己的日志无效，因为它们通常没有用处。
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    // By default files from `contentBase` will not trigger a page reload.
    watchContentBase: true,
    // 热更新，css 代码静态刷新，js 代码变动会刷新浏览器
    hot: true,
    // 告诉 WebpackDevServer 使用相同的根路径是重要的
    publicPath: config.output.publicPath,
    // WebpackDevServer is noisy by default so we emit custom message instead
    // by listening to the compiler events with `compiler.plugin` calls above.
    quiet: true,
    // 避免某些系统的 CPU 过载
    watchOptions: {
      ignored: /node_modules/,
    },
    https: protocol === 'https',
    host: host,
    overlay: false,
    historyApiFallback: {
      // Paths with dots should still use the history fallback.
      // See https://github.com/facebookincubator/create-react-app/issues/387.
      disableDotRule: true,
    },
    public: allowedHost,
    proxy,
    setup(app) {
      // This lets us open files from the runtime error overlay.
      app.use(errorOverlayMiddleware());
      // This service worker file is effectively a 'no-op' that will reset any
      // previous service worker registered for the same host:port combination.
      // We do this in development to avoid hitting the production cache if
      // it used the same host and port.
      // https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432
      app.use(noopServiceWorkerMiddleware());
    },
  };
};
