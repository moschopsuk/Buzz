var gulp = require('gulp'),
    babel = require('gulp-babel'),
    electron = require('gulp-electron'),
    packageJson = require('./package.json');

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

gulp.task('electron', function() {

    gulp.src("")
    .pipe(electron({
        src: './build',
        packageJson: packageJson,
        release: './release',
        cache: './cache',
        version: 'v0.34.1',
        packaging: true,
        platforms: ['win32-ia32', 'darwin-x64'],
        platformResources: {
            darwin: {
                CFBundleDisplayName: packageJson.name,
                CFBundleIdentifier: packageJson.name,
                CFBundleName: packageJson.name,
                CFBundleVersion: packageJson.version
            },
            win: {
                "version-string": packageJson.version,
                "file-version": packageJson.version,
                "product-version": packageJson.version
            }
        }
    }))
    .pipe(gulp.dest(""));
});
