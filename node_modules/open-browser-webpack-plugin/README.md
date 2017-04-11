# Open Browser Webpack Plugin
Opens a new browser tab when Webpack loads. Very useful if you're lazy and don't want to force yourself to open a new tab when Webpack is ready to play!

## Usage

Simply require the plugin and add it in the **plugins** section:

```javascript
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'lib/entry.js'),
  output: {
    path: __dirname + "/bundle/",
    filename: "bundle.js"
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:3000' })
  ]
};
```

## Options

#### url

Type: `String`<br>
Default: `http://localhost:8080`

Url to open when Webpack is ready. Needs to have the prefix `http://` or `https://` in order to open the browser.

#### browser

Type: `String`<br>
Optional

Browser to open. By default, it will try to open the browser set by default in your system.

#### ignoreErrors

Type: `String`<br>
Default: `False`<br>
Optional

By default this plugin only opens the browser if there's no Webpack errors. Setting ignoreErrors to true will open a new tab no matter the compilation errors.

## Change Log

### 0.0.2 - 2015-12-26
#### Added
- ignoreErrors option (Thanks to @zhura).
- Changelog.
- Documentation for options.

#### Removed
- DEFAULT_BROWSER constant.

### 0.0.1 - 2015-09-12
- First release.

## TODO

- [ ] Add tests.

## License

MIT License.
