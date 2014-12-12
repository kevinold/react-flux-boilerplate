var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var browserSync = require('browser-sync');
var del = require('del');
var reload = browserSync.reload;

// Proxy server
gulp.task('browser-sync', ['nodemon', 'appjs', 'vendorjs'], function() {
    browserSync({
      proxy: "localhost:3000"
    });
});

gulp.task('clean-dist', function () {
  del('dist/**/*');
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
  var b = browserify();
  b.transform(reactify);
  b.add('./src/js/app.js');

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));

  gulp.src('src/css/**/*')
    .pipe(gulp.dest('dist/css'));
});

gulp.task('nodemon', function() {
  nodemon({ script: 'server.js' });
});

// use default task to launch BrowserSync and watch files
gulp.task('default', ['clean-dist', 'nodemon', 'copy', 'appjs', 'vendorjs', 'browser-sync'], function () {

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    //gulp.watch("js/*.js", ['js', browserSync.reload]);
    gulp.watch("src/js/**/*.js", ['appjs', browserSync.reload]);

    gulp.watch("src/*.html", ['bs-reload']);
});
