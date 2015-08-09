/*
 * NOTE: Created just as an example
 */
'use strict';

var gulp = require('gulp');
var example = 'example value';
var loader = require('./index.js');

loader.initialize(gulp, {
  params: {
    example: example
  }
});
