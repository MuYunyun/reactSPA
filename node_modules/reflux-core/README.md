# reflux-core

A simple core library for unidirectional dataflow architecture inspired by [Flux](http://facebook.github.io/react/blog/2014/05/06/flux.html). This module does not depend on React and may be used together with other view engine libraries.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]
[![Dependencies][dependencies-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Gratipay][gratipay-image]][gratipay-url]

[![Sauce Test Status](https://saucelabs.com/browser-matrix/reflux-core.svg)](https://saucelabs.com/u/reflux-core)

For an overview of reflux with react extensions, look at the [refluxjs repository][refluxjs-url].

## Installation

You can currently install the package as an npm package.

### NPM

The following command installs `reflux-core` as an npm package:

    npm install reflux-core

### ES5

Reflux depends on ES5 features. For older browsers that are missing them you will need a shim such as `core-js/es5` from [core-js](https://github.com/zloirock/core-js#ecmascript-5) or `es5-shim.js` from [kriskowal's es5-shim](https://github.com/kriskowal/es5-shim).

## Development

You need to have NodeJS installed.

1. Clone this repository

2. Run `npm install`

You can run the following npm scripts, for more check the project's `package.json` file.

* `npm compile` Use babel to transpile the ES6 code to ES5, output is `/lib`.

* `npm test` To run the jshint and tests

* `npm run watch` To run the watch task. It will lint, compile and test the code whenever a file is saved.

* `npm run benchmark` To run the benchmark test

[Husky git hooks](https://github.com/typicode/husky) will prevent bad commits or bad pushes for you by linting and testing the code.

## Extending `reflux-core`

### As an add-on

To create an add-on for Reflux, you may do that by creating a callback that `Reflux#use` can handle.

```javascript
// addon.js

// The callback recieves an instance of Reflux library that is being used.
export default function(Reflux) {

    // add a simple function to Reflux
    Reflux.createState = function() {
        return {};
    };

}
```

The user will have to do the following to use the add-on:

```javascript
import Reflux from "reflux-core";
    // or "reflux" or any other reflux with extensions

import createStateAddon from "./addon.js";

Reflux.use(createStateAddon);

console.log(Reflux.createState());
// outputs {}
```

* When publishing the plugin to npm, you don't need to have `reflux-core` or `reflux` as a dependency among `dependencies` in `package.json` as the user provides the version they use through the `Reflux#use` method.

* If you're writing tests, you may want to use `reflux-core` and put it in `devDependencies` instead.

* You may name your library `reflux-addon-{name}`.

* Please do provide `reflux-addon` among `keywords` in `package.json` so that users can easily search for your addon in the npm registry.

### As extensions for a view library

Install reflux-core as a dependency and publish it as a library to npm. Here is an example entry point:

```javascript
// index.js
import Reflux from "reflux-core";
import frameworkExtras from "./framework-extras";

Reflux.use(frameworkExtras); // like an add-on

export default Reflux; // export the amended Reflux lib
```

* You may name your library `reflux-{view library}`. E.g. if you're doing mixins for angular then it may be named `reflux-angular`.

* Please do provide `reflux` among `keywords` in `package.json` so that users can easily search for your extensions in the npm registry.

## Colophon

[List of contributors](https://github.com/reflux/reflux-core/graphs/contributors) is available on Github.

This project is licensed under [BSD 3-Clause License](http://opensource.org/licenses/BSD-3-Clause). Copyright (c) 2014, Mikael Brassman.

For more information about the license for this particular project [read the LICENSE.md file](LICENSE.md).

This project uses [eventemitter3](https://github.com/3rd-Eden/EventEmitter3), is currently MIT licensed and [has it's license information here](https://github.com/3rd-Eden/EventEmitter3/blob/master/LICENSE).

[npm-image]: http://img.shields.io/npm/v/reflux-core.svg
[downloads-image]: http://img.shields.io/npm/dm/reflux-core.svg
[dependencies-image]: http://img.shields.io/david/reflux/reflux-core.svg
[npm-url]: https://www.npmjs.org/package/reflux-core
[travis-image]: http://img.shields.io/travis/reflux/reflux-core/master.svg
[travis-url]: https://travis-ci.org/reflux/reflux-core
[gratipay-image]: http://img.shields.io/gratipay/spoike.svg
[gratipay-url]: https://gratipay.com/spoike/
[refluxjs-url]: https://github.com/reflux/refluxjs#refluxjs
