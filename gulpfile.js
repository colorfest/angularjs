var gulp 			= require('gulp');
var clean 			= require('gulp-clean');
var concat 			= require('gulp-concat');
var ngdocs 			= require('gulp-ngdocs');
var sass 			= require('gulp-sass');
var uglify 			= require('gulp-uglify');
var runSequence 	= require('run-sequence');

var buildDir 		= 'bin/';
var depsJS 			= ['bower_components/modernizr/modernizr.js',
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/bootstrap/dist/js/bootstrap.min.js',
					'bower_components/angularjs/angular.min.js',
					'bower_components/angular-route/angular-route.min.js'];
var appJS 			= ['src/resources/js/general/app.js',
						'src/resources/js/general/modules.js',
						'src/resources/js/general/configs.js',
						'src/resources/js/general/phases.directive.js',
						'src/resources/js/home/*.js',
						'src/resources/js/phases/*.js',
						'src/resources/js/upcomingfilms/*.js'];

/** tasks **/
gulp.task('devDeps', function ()
{
	var depsjs = gulp.src(depsJS);
	return depsjs.pipe(concat('mcu_deps.js'))
		.pipe(gulp.dest('src'));
});

gulp.task('devJS', function ()
{
	var js = gulp.src(appJS);
	return js.pipe(concat('mcu.js'))
		.pipe(gulp.dest('src'));
});

/** sass tasks **/
gulp.task('sass', function ()
{
	return gulp.src(['src/resources/css/styles.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/resources/css'));
});

gulp.task('devCSS', function ()
{
	return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css',
		'src/resources/css/styles.css'])
		.pipe(concat('mcu.css'))
		.pipe(gulp.dest('src/resources/css/'));
});

gulp.task('buildStyles', function (callback)
{
	runSequence('sass', 'devCSS', callback);
});

/** initialize **/
gulp.task('default', function (callback)
{
	runSequence('devDeps', 'devJS', callback);
});



/** watch **/
gulp.task('watch', function ()
{
	gulp.watch('src/resources/**/*.js', ['devJS']);
	gulp.watch('src/resources/**/*.scss', ['buildStyles']);
});