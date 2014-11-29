var gulp = require('gulp');
var browserify = require('gulp-browserify');
var reactify = require('reactify');
var browserSync = require('browser-sync');

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('js', function () {
    return gulp.src('js/main.js')
        .pipe(browserify({
          transform: ['reactify']
        }))
        .pipe(gulp.dest('dist/js'));
});

// use default task to launch BrowserSync and watch files
gulp.task('default', ['js', 'browser-sync'], function () {

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    //gulp.watch("js/*.js", ['js', browserSync.reload]);
    gulp.watch("js/*.js", ['js', browserSync.reload]);

    gulp.watch("*.html", ['bs-reload']);
});
