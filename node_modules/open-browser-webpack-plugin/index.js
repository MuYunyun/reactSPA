var open = require('open');

/**
 * Removes an element from the an array if exist.
 * @param {Array} array
 * @param {*} item Item to delete
 * @returns {*} removed item if was found. False otherwise.
 */
function removeFromArray(array, item) {
  var index = array.indexOf(item);
  return index >= 0 ? array.splice(index, 1) : false;
}

/**
 * Opens the browser the first time if there's no compilation errors.
 * @param {Object} options Options object.
 * @param {String} options.url url to open in browser.
 * @param {String} [options.browser] Browser to use. If not available, use default browser.
 * @param {Boolean} [options.ignoreErrors] Ignore webpack errors.
 * @constructor
 */
function OpenBrowserPlugin(options) {
  options || (options = {});
  this.url = options.url || 'http://localhost:8080';
  this.browser = options.browser;
  this.ignoreErrors = options.ignoreErrors;
}

OpenBrowserPlugin.prototype.apply = function(compiler) {
  var isWatching = false;
  var url = this.url;
  var browser = this.browser;
  var ignoreErrors = this.ignoreErrors;

  compiler.plugin('watch-run', function checkWatchingMode(watching, done) {
    isWatching = true;
    removeFromArray(watching.compiler._plugins['watch-run'], checkWatchingMode);
    done();
  });

  compiler.plugin('done', function doneCallback(stats) {
    if (isWatching && (!stats.hasErrors() || ignoreErrors)) {
      removeFromArray(stats.compilation.compiler._plugins['done'], doneCallback);
      open(url, browser, function(err) {
        if (err) throw err;
      });
    }
  });
};

module.exports = OpenBrowserPlugin;
