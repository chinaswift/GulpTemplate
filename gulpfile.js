// Load gulp plugins with 'require' function of nodejs
var gulp       = require('gulp'),
	jshint 	   = require('gulp-jshint');
	plumber    = require('gulp-plumber'),
	gutil      = require('gulp-util'),
	uglify     = require('gulp-uglify'),
	concat     = require('gulp-concat'),
	rename     = require('gulp-rename'),
	minifyCSS  = require('gulp-minify-css'),
	less       = require('gulp-less'),
	path       = require('path'),
	lr         = require('tiny-lr'),
	livereload = require('gulp-livereload'),
	server     = lr();

// Handle less error
var onError = function (err) {
	gutil.beep();
	console.log(err);
};

// Path configs
var css_files  = 'assets/css/*.css', // .css files
	css_path   = 'assets/css', // .css path
	js_files   = 'assets/js/*.js', // .js files
	less_file  = 'assets/less/style.less', // .less files
	dist_path  = 'assets/dist';

// Lint Task
gulp.task('lint', function() {
    return gulp.src(js_files)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// The 'js' task
gulp.task('js', function() {
gulp.src(js_files)
	.pipe(concat('dist'))
	.pipe(rename('index.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest(dist_path))
	.pipe(livereload(server));
});

// The 'css' task
gulp.task('css', function(){
	gulp.src(css_files)
		.pipe(concat('dist'))
		.pipe(rename('index.min.css'))
		.pipe(minifyCSS(opts))
		.pipe(gulp.dest(dist_path))
		.pipe(livereload(server));
});

// The 'less' task
gulp.task('less', function(){
	gulp.src(less_file)
		.pipe(plumber({
			errorHandler: onError
	    }))
		.pipe(less({ paths: [ path.join(__dirname, 'less', 'includes') ] }))
		.pipe(gulp.dest(css_path))
		.pipe(livereload(server));
});

// Reload browser when have *.html changes
gulp.task('reload-browser', function() {
	gulp.src('*.html')
		.pipe(livereload(server));
});

// The 'watch' task
gulp.task('watch', function () {
	server.listen(36000, function (err) {
		if (err) return console.log(err);

		gulp.watch(less_file, ['less']);

		gulp.watch(css_files, ['css']);

		gulp.watch(js_files, ['lint', 'js']);

		gulp.watch('*.html', ['reload-browser']);
	});
});


// The 'default' task.
gulp.task('default', ['watch']);
