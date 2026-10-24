@echo off

call npm init -y
call npm install gulp -g
call npm install gulp --save-dev
call npm install gulp-imagemin --save-dev
call gulp imagemin
