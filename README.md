![Build Status](https://travis-ci.org/MuYunyun/reactSPA.svg?branch=master) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)
### Target

> React 全家桶的综合运用.该项目会把日常开发中
遇到的案例抽离成 demo 展现出来，同时会对一些知识点进行实践，最终的目的是产出一套针对中后台开发相对完善的使用方案。

[效果展示](https://muyunyun.github.io/reactSPA)，建议本地打开。

* 部分模块展示：
![](http://files.cnblogs.com/files/MuYunyun/reactSPA.gif)
* redux 在项目中的运用 demo 展示
![](http://files.cnblogs.com/files/MuYunyun/todoList.gif)

### Usage
```
本地运行
yarn install || npm install
yarn start || npm start

打包
yarn build || npm run build

发布
yarn deploy || npm run deploy
```

### Tech Stack
- [x] 打包构建：Babel Webpack(4.x)
- [x] 热更新
- [x] 包管理：Yarn || Npm
- [x] UI库：React & React-Dom(16.4.0)
- [x] UI组件：Antd(3.x)
- [x] 路由：react-router(4.x)、react-router-redux
- [x] JS：ES6、ES7
- [x] 样式：less
- [x] 状态管理：redux
- [x] Ajax：Fetch
- [x] 跨域: 基于 CORS 实现
- [x] 代码校验: Eslint
- [ ] ~~测试用例：jest~~
- [ ] 网关层：[gateway](https://github.com/MuYunyun/gateway)

### Optimize

开发环境中可使用 [analyze-webpack-plugin](https://github.com/MuYunyun/analyze-webpack-plugin) 观察各模块的占用情况。以该项目为例：浏览器中输入 `http://localhost:3000/analyze.html` 可以看到如下效果:

![](http://oqhtscus0.bkt.clouddn.com/fd9c7bf00d31696ac40b69db65b9cb60.jpg-400)

### Document

结合该项目分析过的文章(技术栈以项目中的为准)

* [使用 React 全家桶搭建一个后台管理系统](http://muyunyun.cn/posts/9bfbdbf4/)

* [redux middleware 源码分析](http://muyunyun.cn/posts/7f9a92dc/)

* [探寻 webpack 插件机制](https://github.com/MuYunyun/blog/issues/19)

### Features
* 音乐模块
  * 抽离了 Ajax 模块，可完成相应的跨域需求
  * redux 流实现数据的获取
* 工具模块
  * 实现对工资、房租、身体指数、年龄的智能计算
  * 富文本编辑器应用
  * 用 redux 实现了待办事项模块
* 画廊模块
  * 图片瀑布流(撸了个插件 [jswaterfall](https://github.com/MuYunyun/waterfall))
* 搜索模块
  * 搜索引擎的实现(集合了百度、360、搜狗搜索)
* 更多模块开发中
  * 欢迎 issue || pr

### Project Structure
```
├── build.js                   项目打包后的文件
├── config                     webpack配置文件
│   ├──...
│   ├──webpack.config.dev.js   开发环境配置(启动速度优化)
│   ├──webpack.config.prod.js  生产环境配置(打包体积优化)
├── node_modules               node模块目录
├── public
│   └──index.html
├── scripts
│   ├── build.js               打包项目文件
│   ├── start.js               启动项目文件
│   └── test.js                测试项目文件
├── src
│   ├── client
│   │   ├── store              redux中的store
│   │   ├── devTools.js        开发者工具
│   ├── common                 核心目录
│   │   ├── api                请求api层
│   │   ├── actions            redux中的action
│   │   ├── components         通用功能组件
│   │   ├── container          通用样式组件
│   │   ├── images
│   │   ├── pages              页面模块
│   │   ├── reducers           redux中的reducer
│   │   ├── utils              工具类
│   │   │   ├── index.js       通用工具
│   │   │   ├── config.js      通用配置
│   │   │   ├── menu.js        菜单配置
│   │   │   └── ajax.js        ajax模块
│   │   └── routes.js          前端路由
│   └── server                 服务端目录(日后用到)
│       └── controller
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```