'use strict';

var gulp = require('gulp');
var loader = require('./index.js');
var src = '/lol/';

loader(gulp, {
  params: {
    src: src
  }
});
