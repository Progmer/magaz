"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Require packages
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    combineMq = require('gulp-combine-mq'),
    minifyCss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    concat = require("gulp-concat");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// scss
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('scss', function () {
    gulp.src('./scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['> 1%', 'last 2 version', 'IE 9-11'], cascade: false}))
        .pipe(combineMq({beautify: false}))
        .pipe(minifyCss())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./css'));
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// js
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('js', function () {
    gulp.src(['./js/vendor/*.js', './js/vendor/fancybox/jquery.fancybox.js', './js/app.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify().on('error', function () {}))
        .pipe(gulp.dest('./js'));
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// default
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('default', ['scss', 'js']);