/**
 * TODO:
 * - replace rjs with jspm
 * - try to get sourcemaps working
 */
var gulp = require('gulp'),
  clean = require('gulp-rimraf'),
  stylus = require('gulp-stylus'),
  nib = require('nib'),
  jshint = require('gulp-jshint'),
  livereload = require('gulp-livereload');


gulp.task('css', function(){
  return gulp.src('public/css/style.styl')
    .pipe(stylus({use: [nib()], import: ['nib']}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('js', function() {
  return gulp.src(['./app/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));

});

gulp.task('lint', function() {
  return gulp.src(['./app/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('clean', function() {
  return gulp.src(['./public/js/dist'], {read: false})
    .pipe(clean());
});

gulp.task('watch', function(){

  gulp.watch('./public/css/style.styl', ['css']);
  gulp.watch(['./app/**/*.js'], ['js']);

  var server = livereload();
  gulp.watch([
    './public/js/dist/**/*.js',
    './public/js/test/*.js',
    './public/css/*.css'
  ]).on('change', function(file) {
    //console.log(file.path + ' changed')
    server.changed(file.path);
  });

});

gulp.task('default', ['clean', 'css', 'lint']);

gulp.task('build', ['clean', 'css']);

