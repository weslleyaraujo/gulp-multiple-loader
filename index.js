/* global module __filename:true */
'use strict';

var _ = require('lodash');
var path = require('path');
var fs = require('fs');

module.exports = {
  config: {
    ABS_PATH: '',
    FILTER_REGEX: /^.*\.js$/,
    loadError: '[gulp-multiple-loader] Can\'t execute file #{file} ' +
      'make sure you are exporting a function.'
  },

  defaults: {
    dirName: '/gulp-tasks/',
    params: {}
  },

  initialize: function(gulp, options) {
    this.gulp = gulp;
    this.options = _.extend(this.defaults, options || {});
    this.prepare();
    this.start();
    return this;
  },

  prepare: function() {
    this.setAbsPath();
  },

  getFullPath: function() {
    return path.join(path.dirname(fs.realpathSync(__filename)), '/');
  },

  setAbsPath: function() {
    this.config.ABS_PATH = this.getFullPath() + this.options.dirName;
  },

  start: function() {
    fs.readdirSync(this.config.ABS_PATH).filter(this.filterFile.bind(this));
  },

  filterFile: function(file) {
    if (this.isFile(file)) {
      this.load(file);
    }
  },

  load: function(file) {
    var fn = require(this.config.ABS_PATH + file);
    try {
      fn.call(null, this.gulp, this.options.params);
    }
    catch(e) {
      throw new Error(this.config.loadError.replace(/#\{file\}/g, file));
    }
  },

  isFile: function(file) {
    return this.config.FILTER_REGEX.test(file);
  }
};
