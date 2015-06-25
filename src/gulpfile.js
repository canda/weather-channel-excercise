var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    compass = require('gulp-compass'),
    install = require("gulp-install");

gulp.task('compass', function() {
    gulp.src('./public/sass/*.scss')
        .pipe(compass({
            config_file: './public/config.rb',
            sass: 'public/sass',
            css: 'public/css',
        }))
        .on('error', function(err) {
            console.log(err)
        })
        .pipe(gulp.dest('./public/css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('express', function() {
  var express = require('express');
  var app = express();

  app.use(require('connect-livereload')({port: 30001}));
  app.use('/', express.static(__dirname + '/public'));
  app.listen(3000);
});

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(3001);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('watch', function() {
  gulp.watch(['./public/sass/**/*.scss'], ['compass']);
  gulp.watch('./public/**/*.html', notifyLiveReload);
  gulp.watch('./public/css/*.css', notifyLiveReload);
});

gulp.task('default', ['compass', 'livereload', 'watch', 'express']);
