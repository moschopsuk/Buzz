var gulp = require('gulp'),
    babel = require('gulp-babel');

// Paths
var paths = {
  APP: ['src/index.html', 'src/browser.js'],
  JS_FILES: ['src/scripts/*.js'],
  BUILD: './build',
  TMP: './tmp',
  RELEASE: './release'
};

gulp.task('scripts', function () {
    return gulp.src(paths.JS_FILES)
        .pipe(babel())
        .pipe(gulp.dest(paths.BUILD));
});

gulp.task('copy', function(){
    return gulp.src(paths.APP)
        .pipe(gulp.dest(paths.BUILD));
});
