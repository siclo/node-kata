'use strict';

var gulp = require('gulp');
var $ = require("gulp-load-plugins")();

var testFiles = "**/*.spec.js";

gulp.task('test', function () {
    return gulp.src(testFiles)
        .pipe($.jasmine());
});

gulp.task('default', ['test'], function () {
});
