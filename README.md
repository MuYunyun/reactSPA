### Target
> 使用React技术栈开发SPA.

### Tech Stack
* UI库：React & React-Dom
* UI组件：Antd
* 路由：React-Router & History
* 框架：Reflux
* JS：ES6 
* 样式：Less
* 图标：Antd自带/FontAwesome
* 动画：Animate.css
* 与后台通信：Fetch/Ajax
* 日期处理：Moment
* 假数据模拟：MockJS
* 打包构建：Babel Webpack
* 包管理：Npm

### Features
* 自主配置开发环境
* 支持ES6
* React-Router配置路由
* Less代替Css
* Fetch代替Ajax
* MockJs模拟数据
* AnimateCSS提供动画效果
* 支持jQuery
* 支持浏览器自动刷新

### Usage
> 1、安装依赖：$ npm install  
> 2、启动服务：$ npm start  
> 3、生成文件：$ npm run build  

### Articles
* [React 的ES5、ES6写法对照表](http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8)
* [React 组件之间如何交流](http://www.tuicool.com/articles/AzQzEbq)
* [react-router 中的history](https://zhuanlan.zhihu.com/p/20799258?refer=jscss)
* [react-router 按需加载](https://segmentfault.com/a/1190000007141049)
* [ECMAScript 6入门](http://es6.ruanyifeng.com/)
* [Webpack 实例和文章](https://github.com/JasonBai007/webpack-starter-kit)
* [React Reflux](https://segmentfault.com/a/1190000002793786)
* [React+reflux应用 IE8/9/10/11兼容实践](https://segmentfault.com/a/1190000005794242#articleHeader9)
* [Reflux系列01：异步操作经验小结](https://segmentfault.com/a/1190000004250062)
* [传统 Ajax 已死，Fetch 永生](http://www.jianshu.com/p/THLARe#)
* [Fetch API](https://github.github.io/fetch/)
* [使用Mock.js进行独立于后端的前端开发](https://segmentfault.com/a/1190000003087224)

### Diary(填坑日志)
> 1、如果引入FontAwesome,会严重增加编译后的CSS文件体积  
> 2、通过定义Vendors，可以抽取出第三方库文件，避免所有js文件打包在一起  
> 3、通过安装babel-plugin-import插件，可以自动抽离用到的ant组件  
> 4、路由的history配置，如果配置成browserHistory,服务器端也需要做相应的配置  
> 5、路由的history配置，如果配置成hashHistory,则url地址里会有难看的后缀  
> 6、编译静态文件的webpack配置中，插件项目需要设置成生产环境NODE_ENV:JSON.stringify("production")  
> 7、实现路由的跳转，页面内的导航，请使用history（自行Github之），这绝壁是个大坑！  
> 8、本项目使用的是antd 1.x版本，想升级到最新版本（2.x），结果需要改动的地方实在太多，于是放弃
 
License
----

MIT
