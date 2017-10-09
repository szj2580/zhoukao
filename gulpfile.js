/**
 * Created by xzjt332 on 2017/10/9.
 */
var gulp=require('gulp');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var minify=require('gulp-minify-css');
var webserver=require('gulp-webserver');
var connect=require('gulp-connect');

gulp.task('javas',function(){
    gulp.src('./js/*.js')
        .pipe(concat('javas.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'))
})

gulp.task('mincCss',function(){
    gulp.src('./css/*.css')
        .pipe(concat('mains.js'))
        .pipe(minify())
        .pipe(gulp.dest('./'))
})

gulp.task('httpserver',function(){
    gulp.src('./')
        .pipe(connect.server({
            port:'8989',
            livereload:true
        }))
})

gulp.task('webserver',function(){
    gulp.src('./')
        .pipe(webserver({
            port:'8080',
            livereload:true
        }))
})

gulp.task('default',['httpserver','webserver','javas','mincCss'])