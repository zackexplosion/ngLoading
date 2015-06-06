var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    compass = require('gulp-compass')
 
gulp.task('compass', function() {
  gulp.src('./sass/*.scss')
    .pipe(compass({
      css: 'css',
      sass: 'sass'
    }))
    .pipe(gulp.dest('app/assets/temp'))
    .pipe(connect.reload());
});


gulp.task('watch', function () {
  gulp.watch(['./sass/*.scss'], ['compass']);
});


gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['connect', 'watch']);