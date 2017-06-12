### Target
> 使用React技术栈开发SPA.

[效果展示](https://muyunyun.github.io/react-antd-demo)

[文档地址](http://www.cnblogs.com/MuYunyun/p/6843584.html)

> 如果觉得做得还不错 , 或者项目源码对您有帮助 , 希望您小抬右手到右上角点一个star , 您的支持是作者长期更新维护的动力

### Usage
```
本地运行
yarn install || npm install
yarn start || npm start
```

### Tech Stack || Features
- [x] 打包构建：Babel Webpack
- [x] 热更新
- [x] 包管理：Yarn || Npm
- [x] UI库：React & React-Dom
- [x] UI组件：Antd(2.10x)
- [x] 路由：React-Router(4.x) & History
- [x] JS：ES6
- [x] 样式：Less
- [ ] 框架：Reflux
- [x] 与后台通信：Fetch
- [ ] 假数据模拟：MockJS
- [ ] 使用ts重构

### Third-party libraries
* css动画库：Animate.css
* 富文本编辑：react-draft-wysiwyg
* 全屏插件：screenfull
* 图片弹层查看插件：photoswipe
* 日期处理：Moment
* 可视化图表：echarts-for-react

### Project Structure
下列目录仅仅是当前日期的目录，不排除日后对目录的调整，
```
├── build.js                   项目打包后的文件
├── config                     webpack配置文件
│   ├──...
│   ├──webpack.config.dev.js   开发环境配置
│   ├──webpack.config.prod.js  生产环境配置
├── node_modules               node模块目录
├── public
│   └──index.html
├── scripts
│   ├── build.js               打包项目文件
│   ├── start.js               启动项目文件
│   └── test.js                测试项目文件
├── src
│   ├── client                 中间件目录(计划)
│   ├── common                 核心目录
│   │   ├── components         通用功能组件
│   │   ├── container          通用样式组件
│   │   ├── images
│   │   ├── pages              页面模块
│   │   ├── utils              工具类
│   │   │   ├── config.js      通用配置(全局变量待实现)
│   │   │   ├── menu.js        菜单配置
│   │   │   └── ajax.js        ajax模块(计划fetch实现)
│   │   └── routes.js          前端路由
│   └── server                 服务端目录(计划)
│       └── controller
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```