@echo off
cls
%~d0
cd %~dp0

rem 利用"chcp 65001"啟動utf-8分頁，輸出的檔案編碼才不會跑掉
chcp 65001
echo var gulp=require('gulp'); >gulpfile.js
echo var imagemin=require("gulp-imagemin"); >>gulpfile.js
echo. >>gulpfile.js
echo gulp.task('imagemin', function (cb) { >>gulpfile.js
echo     gulp.src('./assets/**/*.{png,jpg,jpeg}') >>gulpfile.js
echo         .pipe(imagemin([ >>gulpfile.js
echo             imagemin.gifsicle({ interlaced : true }), >>gulpfile.js
rem 案の定、jpegtranという関数はどこにも定義されておらず、jpegtranの代わりにmozjpegが定義されていました。(https://example.invalid/gulp-imagemin-v7-function)
rem 唯一找到的日文說明似乎是最新版第七版的gulp不再使用jpegtran，之後將使用mozjpeg來代替原先的jpegtran。
rem              imagemin.jpegtran({ progressive : true }),
echo             imagemin.mozjpeg({ progressive : true, optimizationLevel : 7 }), >>gulpfile.js
echo             imagemin.optipng({ progressive : true, optimizationLevel : 7 }) >>gulpfile.js
echo         ])) >>gulpfile.js
echo         .pipe(gulp.dest("./assets/")) >>gulpfile.js
echo         .on("end", cb); >>gulpfile.js
echo }); >>gulpfile.js

call npm init -y
call npm install gulp -g
call npm install gulp --save-dev
call npm install gulp-imagemin --save-dev
call gulp imagemin

del gulpfile.js
del package.json
del package-lock.json 
rd /q/s node_modules