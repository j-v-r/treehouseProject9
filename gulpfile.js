'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var image = require('gulp-image');

gulp.task('process-css', () => {
	return gulp.src(['css/reset.css', 'css/application.css', 'css/switch.css'])
		.pipe(cleanCSS())
		.pipe(concat('prod.min.css'))
		.pipe(gulp.dest('./dist'));
});

// ***** NOT SUPPORTED WITH ES6 *****

// gulp.task('minifyScripts', () => {
// 	gulp.src('scripts/app.js')
// 	.pipe(uglify())
// 	.pipe(rename('app.min.js'))
// 	.pipe(gulp.dest('./dist'));
// });

gulp.task('compressUserImages', () => {
		gulp.src('userPhotos/*')
		.pipe(image({
			mozjpeg: false,
			jpegoptim: false,
			pngquant: true,
			optipng: false,
			zopflipng: true,
			jpegRecompress: true,
			gifsicle: true,
			svgo: true
		}))
		.pipe(gulp.dest('dist/userPhotos'));
});

gulp.task('compressIconImages', () => {
		gulp.src('icons/*')
		.pipe(image({
			mozjpeg: false,
			jpegoptim: false,
			pngquant: true,
			optipng: false,
			zopflipng: true,
			jpegRecompress: true,
			gifsicle: true,
			svgo: true
		}))
		.pipe(gulp.dest('dist/icons'));
});

gulp.task('default', ['process-css']);