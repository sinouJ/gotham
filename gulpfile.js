'use strict';

var css_dir     = 'assets/css';
var sass_dir    = css_dir+'/sass';

var gulp        = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass        = require('gulp-sass')(require('sass'));

function HandleSass(){
    return gulp.src(sass_dir+'/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(css_dir))
}

function watch(){
    gulp.watch(sass_dir+'/**/*.scss', HandleSass);
}

exports.default = watch;
