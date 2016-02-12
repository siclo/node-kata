'use strict';

var gulp = require('gulp');
var $ = require("gulp-load-plugins")();
var TerminalReporter = require("jasmine-terminal-reporter");
var Blink1Reporter = require("jasmine-blink1-reporter");

var testFiles = "src/**/*.spec.js";

gulp.task('test', function () {
    var terminalReporter = new TerminalReporter();
    var blink1Reporter = new Blink1Reporter();
    var jasmineOptions = {
        reporter: [terminalReporter, blink1Reporter]
    };
    return gulp.src(testFiles)
        .pipe($.jasmine(jasmineOptions));
});

gulp.task('default', ['test'], function () {
});
