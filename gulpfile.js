var gulp = require('gulp');

var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

 
// run localhost:8080 server for build 
gulp.task('connect', function () {
  connect.server({
    root: 'build',
    port: 8080
  });
});

// minfiy html files and send them to build folder
gulp.task('html', function(){
  return gulp.src('app/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('build'));
});

// send vendor js files to build
gulp.task('vendor', function() {
  return gulp.src('./app/assets/libs/**/*')
    .pipe(gulp.dest('build/assets/libs'));
});

// combine and minify js files
gulp.task('scripts', function() {
  return gulp.src('./app/js/**/*')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// JavaScript linting task
gulp.task('jshint', function() {
  return gulp.src('./app/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./app/*.html', ['build'] );
  gulp.watch('./app/js/**/*.js', ['build']);
});

gulp.task('default', ['connect', 'watch', 'jshint']);

gulp.task('build', ['html', 'vendor', 'scripts', 'jshint', 'connect']);
