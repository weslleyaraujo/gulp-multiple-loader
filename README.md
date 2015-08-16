# gulp-multiple-loader ![](https://travis-ci.org/weslleyaraujo/gulp-multiple-loader.svg?branch=master)

Load single files for each gulp task with shared parameters

## Install

```
$ npm install gulp-multiple-loader
```

## Basic usage

```js
var gulp = require('gulp');
var loader = require('gulp-multiple-loader');

loader.initialize(gulp);
```

This will search and load tasks located at `gulp-tasks` directory.

## Options

### dirNam

Change the directory to host your gulp tasks.

```js
var gulp = require('gulp');
var loader = require('gulp-multiple-loader');

loader.initialize(gulp, {
  dirName: 'my-gulp-tasks'
});
```

### params

Share variables between gulp tasks

```js
// gulpfile.js
var gulp = require('gulp');
var loader = require('gulp-multiple-loader');

loader.initialize(gulp, {
  parmas: {
    example: 'foo'
  }
});

// gulp-tasks/default.js
module.exports = function(gulp, params) {
  return gulp.task('default', function() {
    return params.example; // 'foo'
  });
};

```

This will make easier if you intend to use something like [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) or even configuration files.

```js
// gulpfile.js
var gulp = require('gulp');
var config = require('./my-config-file.json');
var plugins = require('gulp-load-plugins');
var loader = require('gulp-multiple-loader');

loader.initialize(gulp, {
  parmas: {
    plugins: plugins,
    config: config
  }
});

// gulp-tasks/default.js
module.exports = function(gulp, params) {
  return gulp.task('default', function() {
    return gulp.src(params.config.src)
      .pipe(params.plugins.somePlugin())
      .pipe(gulp.dest(params.config.dest));
  });
};

```

*in development*
