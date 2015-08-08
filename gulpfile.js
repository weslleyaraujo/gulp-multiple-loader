/*
 * NOTE: Created just as an example
 */
'use strict';

var gulp = require('gulp');
var example = 'example value';

require('./index.js')(gulp, {
  params: {
    example: example
  }
});
