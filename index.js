module.exports = function(gulp, options) {
  'use strict';

  var _ = require('lodash');
  var defaults = {
    dir: '/gulp-tasks/',
    params: {}
  };

  options = _.extend(defaults, options || {});

  var path = require('path');
  var fs = require('fs');
  var ABS_PATH = path.join(path.dirname(fs.realpathSync(__filename)), '/') + options.dir;

  /*
   * NOTE: Regex to match a string with <anything>.js
   */
  var FILTER_REGEX = /^.*\.js$/;

  fs.readdirSync('./' + options.dir).filter(function(file) {
    if(FILTER_REGEX.test(file)) {
      require(ABS_PATH + file).call(null, gulp, options.params);
    }
  });
};
