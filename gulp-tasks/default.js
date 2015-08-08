/*
 * NOTE: Created just as an example
 */
module.exports = function(gulp, options) {
  return gulp.task('default', function () {
    console.log('Hey there! I have access to', options.example);
    return 'foo';
  });
};
