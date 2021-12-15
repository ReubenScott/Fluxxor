var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

// 打包html
gulp.task('html', function(){
     return gulp.src('./src/*.html')
         .pipe(gulp.dest('./dist'));
 });
 
 // 打包引用js
 gulp.task('js_libs', function(){
     return gulp.src('./src/libs/js/*.js')
         .pipe(gulp.dest('./dist/js'));
 });

 
 // 打包css
 gulp.task('css_main', function(){
     return gulp.src('./src/css/**/*.css')
         .pipe(concat('main.min.css'))
         .pipe(csso())                   // 压缩优化css
         .pipe(gulp.dest('./dist/css'));
 });
 
 // 打包其他资源
 gulp.task('images', function () {
     return gulp.src('./src/images/*.*')
         .pipe(imagemin({
             progressive: true,
         }))
         .pipe(gulp.dest('./dist/images'));
 });
 

 // 清空dist文件夹
 gulp.task('clean', function(){
     return gulp.src(['./dist/*'])
         .pipe(clean());
 });
 
 
 // 打包js
gulp.task('build_index', function() {
	return browserify({
		entries: './src/index.js'
	}, {debug: false}).plugin('licensify')
		.transform(babelify)
		.bundle()
		.pipe(source('index.js'))   // 合并文件并命名
		.pipe(buffer())
		.pipe(uglify({    // 压缩js
			preserveComments: 'license'
        }))  
		.pipe(gulp.dest('./dist/js'));
});


 // 默认任务
 gulp.task('default', function() {
	process.env.NODE_ENV = 'production';
    gulp.start('build_index');
   // gulp.start(['html', 'js_libs', 'js_main','css_main','images'])
 });

 