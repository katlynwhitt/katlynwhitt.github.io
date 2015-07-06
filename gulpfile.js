'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

//run sass
gulp.task('sass', function () {
    return sass('styles/main.scss')
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('styles/css/'));
});

//run sass again when file is updated
gulp.task('watch', function(){
  gulp.watch('styles/scss/*.scss', ['sass']);
});

//reload server when sass file updates
gulp.task('serve', function() {
    var server = gls.new('server.js');
    server.start();
    gulp.watch(['styles/scss/*.scss'], server.notify);
    gulp.watch('server.js', server.start);
});

//initial run
gulp.task('default', ['serve', 'sass', 'watch']);
gulp.task('watch', function() {
    gulp.watch('styles/main.scss', ['sass']);
})

gulp.task('default', ['sass', 'webserver', 'watch']);
