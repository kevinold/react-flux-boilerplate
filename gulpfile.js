var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var reactify = require('reactify');
var browserSync = require('browser-sync');
var del = require('del');

// Static server
gulp.task('browser-sync', ['appjs', 'vendorjs'], function() {
    browserSync({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('clean-dist', function () {
  del('dist/**/*');
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('vendorjs', function () {
    return gulp.src(
        [
          'src/vendor/lodash.underscore.js',
          'src/vendor/backbone.js',
          'src/vendor/accounting.js',
          'src/vendor/faker.js'
        ])
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('appjs', function () {
    return gulp.src('src/js/app.js')
        .pipe(browserify({
          transform: ['reactify']
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));

  gulp.src('src/css/**/*')
    .pipe(gulp.dest('dist/css'));
});

// use default task to launch BrowserSync and watch files
gulp.task('default', ['clean-dist', 'copy', 'appjs', 'vendorjs', 'browser-sync'], function () {

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    //gulp.watch("js/*.js", ['js', browserSync.reload]);
    gulp.watch("src/js/**/*.js", ['appjs', browserSync.reload]);

    gulp.watch("src/*.html", ['bs-reload']);
});
