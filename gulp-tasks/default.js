module.exports = function(gulp, params) {
  return gulp.task('default', function () {
    console.log(params);
    return 'foo';
  });
};
