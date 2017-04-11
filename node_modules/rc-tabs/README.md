# rc-tabs
---

react tabs component

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-tabs.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-tabs
[travis-image]: https://img.shields.io/travis/react-component/tabs.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/tabs
[coveralls-image]: https://img.shields.io/coveralls/react-component/tabs.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/tabs?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/tabs.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/tabs
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-tabs.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-tabs

## Screenshot

<img src='http://gtms03.alicdn.com/tps/i3/TB1TIJ3HXXXXXcYaXXXR6PQLFXX-816-612.png' width='408'>

## install

[![rc-tabs](https://nodei.co/npm/rc-tabs.png)](https://npmjs.org/package/rc-tabs)

## Feature

### Keyboard

* left and up: switch to previous tab
* right and down: switch to next tab

## Usage

```js
var Tabs = require('rc-tabs');
var TabPane = Tabs.TabPane;

var callback = function(key){

}

React.render(
  (
    <Tabs defaultActiveKey="2" onChange={callback}>
      <TabPane tab='tab 1' key="1">first</TabPane>
      <TabPane tab='tab 2' key="2">second</TabPane>
      <TabPane tab='tab 3' key="3">third</TabPane>
    </Tabs>
  ),
  document.getElementById('t2'));
```

## API 

### Tabs

#### props:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>activeKey</td>
          <td>String</td>
          <th></th>
          <td>current active tabPanel's key</td>
      </tr>
      <tr>
          <td>tabPosition</td>
          <td>String</td>
          <th></th>
          <td>tab nav 's position. one of ['left','right','top','bottom']</td>
      </tr>
      <tr>
          <td>animation</td>
          <td>String</td>
          <th></th>
          <td>tabPane's animation. current only support slide-horizontal in assets/index.css</td>
      </tr>
      <tr>
          <td>transitionName</td>
          <td>Object</td>
          <th></th>
          <td>specify backward and forward transitionName. such as
          ```js
          {
            backward:'rc-tabs-slide-horizontal-backward',
            forward:'rc-tabs-slide-horizontal-forward'
          }
          ```
          </td>
      </tr>
      <tr>
          <td>defaultActiveKey</td>
          <td>String</td>
          <th>first active tabPanel's key</th>
          <td>initial active tabPanel's key if activeKey is absent</td>
      </tr>
      <tr>
          <td>onChange</td>
          <td>Function(key)</td>
          <th></th>
          <td>called when tabPanel is changed</td>
      </tr>
      <tr>
          <td>onTabClick</td>
          <td>Function(key)</td>
          <th></th>
          <td>called when tab is clicked</td>
      </tr>
      <tr>
          <td>tabBarExtraContent</td>
          <td>React Node</td>
          <th></th>
          <td>extra content placed one the right of tab bar</td>
      </tr>
      <tr>
          <td>destroyInactiveTabPane</td>
          <td>Boolean</td>
          <th>false</th>
          <td>whether destroy inactive tabpane when change tab</td>
      </tr>
    </tbody>
</table>

### TabPane

#### props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>key</td>
          <td>Object</td>
          <th></th>
          <td>corresponding to activeKey</td>
      </tr>
      <tr>
          <td>tab</td>
          <td>String</td>
          <th></th>
          <td>current tab's title corresponding to current tabPane</td>
      </tr>
    </tbody>
</table>


## Development

```
npm install
npm start
```

## Example

http://localhost:8000/examples

online example: http://react-component.github.io/tabs/examples/

## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

rc-tabs is released under the MIT license.