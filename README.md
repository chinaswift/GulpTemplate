# Gulp Template

A Gulp Template for front end project together with Gulpjs

## Quick start

1. Install nodejs, refer to http://nodejs.org.
   Install Gulp, npm install -g gulp
2. Clone the git repo — `git clone https://github.com/jiji262/GulpTemplate.git`;
3. Install dependences - `npm install`;
4. run gulp in command line;
5. Change some files (css, js...)
6. See the amazing thing happen!

## The plugins will be used:

```javascript

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

```

## Reference links

Tutorial: 
http://travismaynard.com/writing/getting-started-with-gulp

