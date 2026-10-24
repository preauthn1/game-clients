@echo off
cls
%~d0
cd %~dp0

chcp 65001

echo. var imagemin = require("gulp-imagemin"); >gulpfile.js
echo. >>gulpfile.js 
echo. gulp.task("imagemin", function(cb){ >>gulpfile.js
echo.     gulp.src("./assets/**/*.{png,jpg,jpeg}") >>gulpfile.js
echo         .pipe(imagemin([imagemin.gifsicle({ interlaced : true }), imagemin.mozjpeg({ progressive : true, optimizationLevel : 7 }), imagemin.optipng({ progressive : true, optimizationLevel : 7})])) >>gulpfile.js
echo.         .pipe(gulp.dest("./assets/")) >>gulpfile.js
echo.         .on("end", cb); >>gulpfile.js
echo. }); >>gulpfile.js

call npm init -y
call npm install gulp -g
call npm install gulp --save-dev
call npm install gulp-imagemin --save-dev
call gulp imagemin

del gulpfile.js
del package.json
del package-lock.json 
rd /q/s node_modules