process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

process.on('unhandledRejection', err => {
  throw err
})

// 确保读取环境变量
require('../config/env')

const fs = require('fs')
const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const {
  choosePort,
  createCompiler,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils')
const openBrowser = require('react-dev-utils/openBrowser')
const paths = require('../config/paths')
const config = require('../config/webpack.config.dev')
const createDevServerConfig = require('../config/webpackDevServer.config')

const useYarn = fs.existsSync(paths.yarnLockFile)

// 如果需要的文件遗失，则终止
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1)
}

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000
const HOST = process.env.HOST || '0.0.0.0'

// 默认端口如何占用，则引导换一个端口
choosePort(HOST, DEFAULT_PORT)
  .then(port => {
    if (port == null) {
      return
    }
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
    const appName = require(paths.appPackageJson).name
    const urls = prepareUrls(protocol, HOST, port)
    // Create a webpack compiler that is configured with custom messages.
    const compiler = createCompiler(webpack, config, appName, urls, useYarn)
    const serverConfig = createDevServerConfig(
      urls.lanUrlForConfig,
    )
    const devServer = new WebpackDevServer(compiler, serverConfig)
    devServer.listen(port, HOST, err => {
      if (err) {
        return console.log(err)
      }
      console.log(chalk.cyan('Starting the development server...\n'))
      openBrowser(urls.localUrlForBrowser)
    })

    process.on('SIGINT', () => {
      devServer.close()
      process.exit()
    })
    process.on('SIGTERM', () => {
      devServer.close()
      process.exit()
    })
  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message)
    }
    process.exit(1)
  })
