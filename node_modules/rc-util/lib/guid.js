"use strict";

var seed = 0;
module.exports = function guid() {
  return Date.now() + "_" + seed++;
};