![Build Status](https://travis-ci.org/MuYunyun/reactSPA.svg?branch=master) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)

该项目是对 React 技术栈以及前端工程化的相关实践。

> 愿景：沉淀出一套针对中台系统的开发相对完善的使用方案。

[效果展示](https://muyunyun.github.io/reactSPA)，建议本地打开。

* 部分模块展示：

![](http://files.cnblogs.com/files/MuYunyun/reactSPA.gif)

* redux 实现一个 todoList:

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

* 编译打包: Babel Webpack(4.x)
* 热更新: webpack-dev-server
* UI 库: React & React-Dom(16.5.x)
* UI 组件: Antd(3.x)，
* 路由: react-router(4.x)、react-router-redux
* 状态管理: redux
* JS: ES6、ES7
* 样式: less
* Ajax: Fetch
* 跨域: CORS
* 代码校验: Eslint(Airbnb 规范)

- [ ] 网关: [demo](https://github.com/MuYunyun/gateway)
- [ ] Mock 数据: [mock 方案调研](https://github.com/MuYunyun/reactSPA/issues/55)
- [ ] 封装整合适用于公司业务的中台 UI 库(基于 Antd)

### Practice

* [react 性能优化实践](https://github.com/MuYunyun/reactSPA/issues/54)
* [压缩打包优化](https://github.com/MuYunyun/reactSPA/issues/53)
* [css 模块化](https://github.com/MuYunyun/reactSPA/issues/52)

番外：

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
│   │   │   ├── index.js
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