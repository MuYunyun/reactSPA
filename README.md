### Target
> 使用React技术栈开发SPA.
[效果展示](https://muyunyun.github.io/react-antd-demo)

> 如果觉得做得还不错 , 或者项目源码对您有帮助 , 希望您小抬右手到右上角点一个star , 您的支持是作者长期更新维护的动力^_^

### Usage
```
本地运行
yarn install || npm install
yarn start || npm start
```

### Tech Stack || Features
- [x] 打包构建：Babel Webpack
- [x] 包管理：Yarn || Npm
- [x] UI库：React & React-Dom
- [x] UI组件：Antd(2.9x)
- [x] 路由：React-Router(4.x) & History
- [x] JS：ES6
- [x] 样式：Less
- [x] 动画：Animate.css
- [ ] 框架：Reflux
- [x] 与后台通信：Fetch
- [ ] 日期处理：Moment
- [ ] 假数据模拟：MockJS
- [ ] 使用ts重构
- [ ] 写篇全面的文章总结(doing)
<!--- [x] ~~finish~~-->

### 自定义组件的使用方式
SearchBar组件

Table组件
<!--```javascript
<SearchBar
  onSubmit={this.onSearch}
  fields={[{
    title: '城市',
    key: 'city',
    type: 'cascader', // select, cascader, input, date, datetime,
    dependency: [{
      key: 'province',
      message: '选择省份后才能选择城市',
      condition(value) {
        return value !== null;
      }
    }]
    autoComplete(value) {  // 自动补全用, 只适用于input.
      return ['123', '456']
    },
    validator(value) {  // 数据输入规则
      const result = value.match(/[0-9]+/);
      if (result) return result[0];
      return '';
    },
    width: 400,
    labelWidth: 100,
    items(province) {  // select和cascader才有 , select 返回 [{ key, value }]
      return [{
        value: 0,
        label: '浙江',
        children: [{
          value: 1,
          label: '杭州区'
        }]
      }]
    }
  }}
  />
  ```-->