# rc-pagination
---

React Pagination Component

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-pagination.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-pagination
[travis-image]: https://img.shields.io/travis/react-component/pagination.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/pagination
[coveralls-image]: https://img.shields.io/coveralls/react-component/pagination.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/pagination?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/pagination.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/pagination
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-pagination.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-pagination


## Development

```
npm install
npm start
```

## Example

http://localhost:3000/examples/

online example: http://react-component.github.io/pagination/examples/


## Feature

* support ie8,ie8+,chrome,firefox,safari

### Keyboard



## install

[![rc-pagination](https://nodei.co/npm/rc-pagination.png)](https://npmjs.org/package/rc-pagination)

## Usage

```js
var Pagination = require('rc-pagination');
var React = require('react');
React.render(<Pagination />, container);
```

## API

### props

### Pagination

| Parameter        | Description                        | Type          | Default                  |
|------------------|------------------------------------|---------------|--------------------------|
| defaultCurrent   | uncontrolled current page          | Number        | 1                        |
| current          | current page                       | Number        | undefined                |
| total            | items total count                  | Number        | 0                        |
| defaultPageSize  | default items per page             | Number        | 10                       |
| pageSize         | items per page                     | Number        | 10                       |
| onChange         | page change callback               | Function      | noop                     |
| showSizeChanger  | show pageSize changer              | Bool          | false                    |
| pageSizeOptions  | specify the sizeChanger selections | Array<String> | ['10', '20', '30', '40'] |
| onShowSizeChange | pageSize chagne callback           | Function      | noop                     |
| showQuickJump    | show quick goto jumper             | Bool          | false                    |
| showTotal        | show total records text            | Function      | undefined                |
| className        | when set "mini", show mini version | String        | rc-pagination            |
| simple           | when set, show simple pager        | Object        | null                     |
| locale           | to set l10n config                 | Object        | [zh_CN](https://github.com/react-component/pagination/blob/master/src/locale/zh_CN.js) |

## Test Case

http://localhost:3000/tests/runner.html?coverage

## Coverage

http://localhost:3000/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:3000/tests/runner.html?coverage

## License

rc-pagination is released under the MIT license.
