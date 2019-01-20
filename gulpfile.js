'use strict';

var css_dir     = 'assets/css';
var sass_dir    = css_dir+'/sass';
var currentFile = '';

var gulp        = require('gulp');

var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var uglify      = require('gulp-uglify').default;
var rename      = require("gulp-rename");

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// SASS
gulp.task('sass', function () {
  return gulp.src(sass_dir+'/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(css_dir))
    .pipe(browserSync.stream());
});


// MINIFY CSS
gulp.task('compress', function (cb) {
  pump([
        gulp.src(css_dir+'/sass/*.scss'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

// WATCH
gulp.task('watch', function () {
  browserSync.init({
    open: true,
    browser: "google chrome",
    proxy: "localhost:3300"
  });

  gulp.watch(sass_dir+'/**/*.scss', ['sass']);
  gulp.watch("**/*.pug").on('change', browserSync.reload);
  // gulp.watch(js_dir+'/*.js').on('change', function(state){
  //   console.log(state.path);
  //   currentFile = state.path;
  //   gulp.start('reload-js');
  // });
});

gulp.task('default', [ 'watch' ]);
