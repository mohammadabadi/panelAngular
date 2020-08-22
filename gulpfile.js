/// <binding />
var gulp = require("gulp");
var del = require("del");
// var minifyHtml = require("gulp-minify-html");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var cssmin = require("gulp-cssmin");
// var minify = require('gulp-minify');
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');


var paths = {
    webroot: './wwwroot/',
    projectRoot: './',

    app: {
        build: '',
        build_js: '',
        src: '',
        src_js: '',
        src_all: '',
    }
};

paths.app.build = paths.webroot + 'app/';
paths.app.src = paths.projectRoot + 'app/';

paths.app.build_js = paths.app.build + '**/*.js';
paths.app.src_js = paths.app.src + '**/*.js';
paths.app.src_all = paths.app.src + '**/*';

gulp.task('copy-all-file', async function () {
    gulp.src([paths.app.src_all])
        .pipe(gulp.dest(paths.app.build));
});

// Delete app file
gulp.task('delete', async function () {
    del(paths.app.build);
});

// Concat js files
gulp.task('concatfiles-js', async function () {
    //gulp.src(paths.app.src_js)
    gulp.src([
        paths.app.src + '/app.routes.js',
        paths.app.src + '/app.module.js',
        paths.app.src + '/microfronts/**/*.js'
    ])
        // concat files
        .pipe(concat('app.js'))
        // Writing files to Destination
        .pipe(gulp.dest(paths.app.build));
});

// Minifying js files
gulp.task('MinifyingTask-js', async function () {   // path to your files
    return gulp.src(paths.app.src_js)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(paths.app.build)) // save .js
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(paths.app.build)) // save .min.js
});

gulp.task('javascript', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: paths.app.build + 'app.js',
        debug: true
    });

    return b.bundle()
        .pipe(source(paths.app.build + 'app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js/'));
});