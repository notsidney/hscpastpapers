var gulp = require('gulp');
var jshint = require('gulp-jshint');
var minCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var paths = {
	scripts: [
    'version.js',
    'js/src/vars.js',
    'js/src/helpers.js',
    'js/src/openpdf.js',
    'js/src/dropdown.js',
    'js/src/loadjson.js',
    'js/src/ready.js',
    'js/src/ui.js',
    'js/src/dim.js',
    'js/src/tabTitle.js',
    'js/src/split.js'
    ],
	css: [
    'css/src/base.css',
    'css/src/header.css',
    'css/src/iframe.css',
    'css/src/about.css',
    'css/src/mobile.css',
    'css/src/split.css'
    ]
}

// Lint Task
gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('index.js'))
    .pipe(gulp.dest('js'))
    .pipe(rename('index.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

// Concatenate & Minify CSS
gulp.task('css', function() {
	return gulp.src(paths.css)
		.pipe(concat('index.css'))
		.pipe(gulp.dest('css'))
		.pipe(rename('index.min.css'))
		.pipe(minCSS())
		.pipe(gulp.dest('css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['lint', 'scripts']);
  gulp.watch(paths.css, ['css']);
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'css', 'watch']);
