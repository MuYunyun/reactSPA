'use strict';

var classNames = require('classnames');

require('./warn')('`rcUtil classSet` is deprecated, ' + 'use `classNames()` by `require(\'classnames\')` instead');

module.exports = classNames;