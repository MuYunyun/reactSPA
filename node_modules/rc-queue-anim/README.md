# rc-queue-anim
---

Animate React Component in queue, thanks to [rc-animate](https://github.com/react-component/animate) and [enter-animation](https://github.com/ant-design/enter-animation).

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-queue-anim.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-queue-anim
[travis-image]: https://img.shields.io/travis/react-component/queue-anim.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/queue-anim
[coveralls-image]: https://img.shields.io/coveralls/react-component/queue-anim.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/queue-anim?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/queue-anim.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/queue-anim
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-queue-anim.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-queue-anim


## Example

http://react-component.github.io/queue-anim/examples/

Use in Ant Design: http://ant.design/components/queue-anim

![](https://t.alipayobjects.com/images/rmsweb/T12PliXjXgXXXXXXXX.gif)

## Usage

```js
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<QueueAnim>
  <div key="1">enter in queue</div>
  <div key="2">enter in queue</div>
  <div key="3">enter in queue</div>
</QueueAnim>, container);
```

## Install

[![rc-queue-anim](https://nodei.co/npm/rc-queue-anim.png)](https://npmjs.org/package/rc-queue-anim)

## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 8+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |

## API

| props      | type           | default | description    |
|------------|----------------|---------|----------------|
| type       | string / array | `right` | Animation Styles <br/>`left` `right` `top` `bottom` `scale` `scaleBig` `scaleX` `scaleY`|
| animConfig | object / array | null    | Custom Velocity config, like `{opacity:[1, 0], translateY:[0, -30]}`, [velocity config](http://julian.com/research/velocity) |
| delay      | number / array | 0       | delay of animation |
| duration   | number / array | 450     | duration of animation  |
| interval   | number / array | 100      | interval of duration |
| leaveReverse | boolean      | false   | reverse animation order at leave |
| ease       | string / array | `easeOutQuart` | animation easing string, [more](http://julian.com/research/velocity/#easing) |
| component  | string | `div` | component tag |
| animatingClassName | array | `['queue-anim-entering', 'queue-anim-leaving']` | className to every element of animating |
| onEnd      | function      |   null    |  animate end callback({ key, type }), type: `enter` or `leave` | 

> Above props support array format, like `['left', 'top']`, the secord item is leave config. [Demo](http://react-component.github.io/queue-anim/examples/enter-leave.html)

You must provide the key attribute for all children of QueueAnim, children would not peform any animation without key.

## Development

```
npm install
npm start
```
