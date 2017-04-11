'use strict';

require('./warn')('require(\'rc-util\') is deprecated, please require(\'rc-util/lib/xx\')');

module.exports = {
  guid: require('./guid'),
  classSet: require('./classSet'),
  joinClasses: require('./joinClasses'),
  KeyCode: require('./KeyCode'),
  PureRenderMixin: require('./PureRenderMixin'),
  shallowEqual: require('shallowequal'),
  createChainedFunction: require('./createChainedFunction'),
  Dom: {
    addEventListener: require('./Dom/addEventListener'),
    contains: require('./Dom/contains')
  },
  Children: {
    toArray: require('./Children/toArray'),
    mapSelf: require('./Children/mapSelf')
  }
};