/* global describe it before:true */
'use strict';

var gulp = require('gulp');
var assert = require('assert');
var loader = require('../index.js');
var instance = null;

describe('#gulp-multiple-loader', function() {
  before(function() {
    instance = loader.initialize(gulp);
  });

  describe('#isFile', function() {
    it('returns if it is a js file', function() {
      assert.equal(instance.isFile('foo.js'), true);
      assert.equal(instance.isFile('bar.js.example'), false);
    });
  });

  describe('#setAbsPath', function() {
    it('sets the absolute path', function() {
      assert.equal((instance.config.ABS_PATH !== ''), true);
    });
  });

  describe('#getFullPath', function() {
    it('returns the full path location', function() {
      var result = instance.getFullPath().indexOf('gulp-multiple-loader') > -1;
      assert.equal(result, true);
    });
  });

  describe('#load', function() {
    it('loads and execute a task', function() {
      /*
       * NOTE: using the 'default' task file located at /gulp-task/default.js
       */
      assert.throws(instance.load, Error, instance.config.loadError);
      assert.doesNotThrow(instance.load.bind(instance, 'default.js'), Error, instance.config.loadError);
    });
  });
});
