var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var reactify = require('reactify');
var browserSync = require('browser-sync');

// Static server
gulp.task('browser-sync', ['appjs', 'vendorjs'], function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('vendorjs', function () {
    return gulp.src('vendor/*.js')
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('appjs', function () {
    return gulp.src('js/app.js')
        .pipe(browserify({
          transform: ['reactify']
        }))
        .pipe(gulp.dest('dist/js'));
});

// use default task to launch BrowserSync and watch files
gulp.task('default', ['appjs', 'vendorjs', 'browser-sync'], function () {

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    //gulp.watch("js/*.js", ['js', browserSync.reload]);
    gulp.watch("js/**/*.js", ['appjs', browserSync.reload]);

    gulp.watch("*.html", ['bs-reload']);
});
