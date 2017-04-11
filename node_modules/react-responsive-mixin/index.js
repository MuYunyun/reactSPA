var canUseDOM = require('can-use-dom');
var enquire = canUseDOM && require('enquire.js');
var json2mq = require('json2mq');

var ResponsiveMixin = {
  media: function (query, handler) {
    query = json2mq(query);
    if (typeof handler === 'function') {
      handler = {
        match: handler
      };
    }
    canUseDOM && enquire.register(query, handler);

    // Queue the handlers to unregister them at unmount  
    if (! this._responsiveMediaHandlers) {
      this._responsiveMediaHandlers = [];
    }
    this._responsiveMediaHandlers.push({query: query, handler: handler});
  },
  componentWillUnmount: function () {
    if (this._responsiveMediaHandlers) {
      this._responsiveMediaHandlers.forEach(function(obj) {
        canUseDOM && enquire.unregister(obj.query, obj.handler);
      });
    }
  }
};

module.exports = ResponsiveMixin;
