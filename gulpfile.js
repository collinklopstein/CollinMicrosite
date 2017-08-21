var gulp = require('gulp');
var jshint = require('gulp-jshint');
var cssnano = require('gulp-cssnano');
var gulpif = require('gulp-if');
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var browserSync = require('browser-sync').create();
var del = require('del');

gulp.task('styles', function () {
	gulp.src('./src/css/*.css')
	.pipe(gulpif('*.css', cssnano({zindex: false})))
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('html', ['styles'], function() {
  return gulp.src(['src/*.html'])
    .pipe(useref())
    .pipe(gulpif('*.js', uglify().on('error', util.log)))
    .pipe(gulpif('*.css', cssnano({zindex: false})))
    /*
    .pipe(gulpif('*.html', htmlmin({
      collapseWhitespace: false,
      removeComments: true
    })))
    */
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function () {
	gulp.src('./src/js/*.js')
	.pipe(gulpif('*.js', uglify().on('error', util.log)))
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('images', function() {
  return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('videos', function() {
  return gulp.src('./src/videos/**/*')
    .pipe(gulp.dest('dist/videos'));
});

gulp.task('fonts', function() {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['html', 'images', 'styles', 'scripts', 'videos', 'fonts'], function() {
	browserSync.init({
		notify: false,
    	port: 3000,
		server: {
			baseDir: ['node_modules', 'src']
		}
	});
	gulp.watch('./src/css/*.css', ['styles']).on('change', browserSync.reload);
	gulp.watch('./src/*.html').on('change', browserSync.reload);
	gulp.watch('./src/js/**/*.js', ['scripts']).on('change', browserSync.reload);

});

gulp.task('serve:dist', function() {
  browserSync.init({
    notify: false,
    port: 3000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('build', ['html', 'images', 'styles', 'scripts', 'videos', 'fonts'], function() {
  return gulp.src('dist/**/*');
});

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});