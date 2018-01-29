![Build Status](https://travis-ci.org/MuYunyun/reactSPA.svg?branch=master) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)
### Target
> 使用React技术栈开发SPA.该项目把一些平时工作、学习中
遇到的react案例抽离成demo展现出来.

[效果展示](https://muyunyun.github.io/reactSPA)

[文档地址](http://muyunyun.cn/posts/9bfbdbf4/)

* 部分模块展示：
![](http://files.cnblogs.com/files/MuYunyun/reactSPA.gif)
* redux 在项目中的运用 demo 展示
![](http://files.cnblogs.com/files/MuYunyun/todoList.gif)

### Usage
```
本地运行
yarn install || npm install
yarn start || npm start
```

### Tech Stack
- [x] 打包构建：Babel Webpack(3.x)
- [x] 热更新
- [x] 包管理：Yarn || Npm
- [x] UI库：React & React-Dom
- [x] UI组件：Antd(2.10x)
- [x] 路由：React-Router(4.x) & History
- [x] JS：ES6
- [x] 样式：Less
- [x] 框架：Redux
- [x] 与后台通信：Fetch
- [x] 封装 Ajax 实现跨域请求
- [ ] 测试用例
- [ ] 使用ts重构

### Features
* 音乐模块
  * 抽离了 Ajax 模块，可完成相应的跨域需求
  * redux 流实现数据的获取
* 工具模块
  * 实现对工资、房租、身体指数、年龄的智能计算
  * 用 redux 实现了待办事项模块
* 画廊模块
  * 图片瀑布流(自研模块 [jswaterfall](https://github.com/MuYunyun/waterfall))
* 搜索模块
  * 搜索引擎的实现(集合了百度、360、搜狗搜索)
* 更多模块开发中
  * 欢迎提 issue

### Third-party libraries
* css动画库：Animate.css
* 富文本编辑：react-draft-wysiwyg
* 全屏插件：screenfull
* 图片弹层查看插件：photoswipe
* 日期处理：Moment
* 可视化图表：echarts-for-react

### Project Structure
```
├── build.js                   项目打包后的文件
├── config                     webpack配置文件
│   ├──...
│   ├──webpack.config.dev.js   开发环境配置
│   ├──webpack.config.prod.js  生产环境配置
├── node_modules               node模块目录
├── public
│   └──index.html
├── scripts
│   ├── build.js               打包项目文件
│   ├── start.js               启动项目文件
│   └── test.js                测试项目文件
├── src
│   ├── client                 汇聚目录
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