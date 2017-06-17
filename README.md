### Target
> 使用React技术栈开发SPA.该项目把一些平时工作、学习中
遇到的react案例抽离成demo展现出来.

[效果展示](https://muyunyun.github.io/reactSPA)

[文档地址](http://muyunyun.cn/posts/9bfbdbf4/)

* 小模块展示：
![](http://files.cnblogs.com/files/MuYunyun/reactSPA.gif)
* redux在项目中的运用demo展示
![](http://files.cnblogs.com/files/MuYunyun/todoList.gif)

### Usage
```
本地运行
yarn install || npm install
yarn start || npm start
```

### Tech Stack
- [x] 打包构建：Babel Webpack(2.6)
- [x] 热更新
- [x] 包管理：Yarn || Npm
- [x] UI库：React & React-Dom
- [x] UI组件：Antd(2.10x)
- [x] 路由：React-Router(4.x) & History
- [x] JS：ES6
- [x] 样式：Less
- [x] 框架：Redux
- [x] 与后台通信：Fetch
- [ ] 图片懒加载
- [ ] 使用ts重构

### Features
* 音乐模块
  * 用fetch调用了百度音乐api
* 工具模块
  * 实现对工资、房租、身体指数、年龄的智能计算
  * 用redux实现了待办事项模块
* 画廊模块
  * 图片懒加载(待开发)
* 搜索模块
  * 搜索引擎的实现(集合了百度、360、搜狗搜索)

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
│   │   ├── actions            redux中的action
│   │   ├── components         通用功能组件
│   │   ├── container          通用样式组件
│   │   ├── images
│   │   ├── pages              页面模块
│   │   ├── reducers           redux中的reducer
│   │   ├── utils              工具类
│   │   │   ├── config.js      通用配置(全局变量待实现)
│   │   │   ├── menu.js        菜单配置
│   │   │   └── ajax.js        ajax模块(日后用到)
│   │   └── routes.js          前端路由
│   └── server                 服务端目录(日后用到)
│       └── controller
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```