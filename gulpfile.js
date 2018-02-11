// Import the dependencies
var gulp  = require('gulp'),
less      = require('gulp-less'),
minifyCSS = require('gulp-minify-css');
webserver = require('gulp-webserver');
connect = require('gulp-connect');

gulp.task('webserver', ['codeLess'], function() {
  gulp.src('app')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      directoryListing: true,
      open: true
    }));
});
gulp.task('connect', function() {
  connect.server();
});
// Define a task to compile bootstrap.less
gulp.task('less', function(){
  return gulp.src(['./less/bootstrap.less']).
  pipe(less()).
  pipe(minifyCSS({})).
  pipe(gulp.dest('./css'));
});

// Watch for changes in the less folder
gulp.task('codeLess', ['less'], function () {
  gulp.watch('./less/**/*.less', ['less']);
});
