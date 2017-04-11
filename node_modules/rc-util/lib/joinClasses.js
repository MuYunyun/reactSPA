'use strict';

var classNames = require('classnames');

require('./warn')('`rcUtil joinClasses()` is deprecated, ' + 'use `classNames()` by `require(\'classnames\')` instead');

module.exports = classNames;