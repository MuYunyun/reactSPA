# rc-upload
---

React Upload

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-upload.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-upload
[download-image]: https://img.shields.io/npm/dm/rc-upload.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-upload
[travis-image]: https://img.shields.io/travis/react-component/upload.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/upload
[coveralls-image]: https://img.shields.io/coveralls/react-component/upload.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/upload?branch=master

## Development

```
npm install
npm start
```

## Example

http://localhost:8000/examples/

online example: http://react-component.github.io/upload/examples/simple.html


## Feature

* support ie8,ie8+,chrome,firefox,safari

## install

[![rc-upload](https://nodei.co/npm/rc-upload.png)](https://npmjs.org/package/rc-upload)

## Usage

```js
var Upload = require('rc-upload');
var React = require('react');
React.render(<Upload />, container);
```

## API

### props

|name|type|default| description|
|-----|---|--------|----|
|name | string | file| file param post to server |
|style | object | {}| root component inline style |
|disabled | boolean | false | whether disabled |
|component | "div"|"span" | "span"| wrap component name |
|supportServerRender | boolean | false| whether to support server render |
|onReady | function | | only call when supportServerRender is true, upload is rendered completely |
|action| string | | from action url |
|data| object/function(file) | | other data object to post or a function which returns a data object |
|headers| object | {} | http headers to post, available in modern browsers |
|accept | string | | input accept attribute |
|multiple | boolean | false | only support ie10+|
|onStart | function| | start upload file |
|onError| function| | error callback |
|onSuccess | function | | success callback |
|onProgress | function || progress callback, only for modern browsers|
|beforeUpload| function |null| before upload check, return false or a rejected Promise will stop upload, only for modern browsers|
|withCredentials | boolean | false | ajax upload with cookie send |

#### onError arguments

1. `err`: request error message
2. `responce`: request responce, not support on iframeUpload
3. `file`: upload file

### onSuccess arguments

1. `result`: request body
2. `file`: upload file


### methods

abort(file?: File) => void: abort the uploading file


### IE8/9 Note

#### Download Popup Problem

In iframe uploader way, the content-type of response should be `text/plain` or `text/html`.[referense](https://github.com/blueimp/jQuery-File-Upload/wiki/Setup#content-type-negotiation)

#### Domain Problem

If the Page set document.domain, then server should output document.domain according to _documentDomain parameter.

```js
var ret = '';
if (postData._documentDomain) {
  ret += '<script>document.domain="'+postData._documentDomain+'";</script>';
}
this.body = ret + '{"url":"xx.jpq"}';
```

## License

rc-upload is released under the MIT license.
