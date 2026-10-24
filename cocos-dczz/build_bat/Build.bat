@echo off
setlocal
cls
%~d0
cd %~p0
cd..
echo now path : %CD%
del report.*.json

set lang=ZH-CN
::project name
set projectName="Build"
for %%I in (.) do set projectName=%%~nxI
set projectPath=%cd%
set cocosExePath=C:\CocosCreator_BK\CocosCreator220.exe
set buildTime=%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%%time:~6,2%
                                                                                 
rmdir /Q /S %projectPath%\temp
Xcopy /Q /E /I /Y %projectPath%\language\%lang% %projectPath%\assets\resources
           
::call cocos to build   
%cocosExePath% --path %projectPath% --build "platform=web-mobile;buildPath=build/"%lang%

cd build
cd %lang%
ren web-mobile %buildTime%

Echo copy file to qa...

rmdir /Q /S \\0.0.0.0\update\web-mobile\%projectName%\%lang%\res
rmdir /Q /S \\0.0.0.0\update\web-mobile\%projectName%\%lang%\src
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\cocos2d-js-min.*.js
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\favicon.*.ico
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\index.html
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\main.*.js
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\splash.*.png
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\style-desktop.*.css
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\style-mobile.*.css
Xcopy /Q /E /I /Y %projectPath%\build\%lang%\%buildTime% \\0.0.0.0\update\web-mobile\%projectName%\%lang%

Echo copy file to dev... 

rmdir /Q /S \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\res
rmdir /Q /S \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\src
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\cocos2d-js-min.*.js
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\favicon.*.ico
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\index.html
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\main.*.js
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\splash.*.png
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\style-desktop.*.css
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\style-mobile.*.css
Xcopy /Q /E /I /Y %projectPath%\build\%lang%\%buildTime% \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%

Echo copy file to stage...
rmdir /Q /S \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\res
rmdir /Q /S \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\src
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\cocos2d-js-min.*.js
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\favicon.*.ico
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\index.html
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\main.*.js
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\splash.*.png
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\style-desktop.*.css
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\style-mobile.*.css
Xcopy /Q /E /I /Y %projectPath%\build\%lang%\%buildTime% \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%

Echo copy file to backup...

Xcopy /Q /E /I /Y %projectPath%\build\%lang%\%buildTime% \\0.0.0.0\update\web-mobile-temp\%projectName%\%lang%\%buildTime%

set lang=EN-US
cd %~p0
cd..

Xcopy /Q /E /I /Y %projectPath%\language\%lang% %projectPath%\assets\resources

::call cocos to build
%cocosExePath% --path %projectPath% --build "platform=web-mobile;buildPath=build/"%lang%

cd build
cd %lang%
ren web-mobile %buildTime%

Echo copy file to qa...

rmdir /Q /S \\0.0.0.0\update\web-mobile\%projectName%\%lang%\res
rmdir /Q /S \\0.0.0.0\update\web-mobile\%projectName%\%lang%\src
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\cocos2d-js-min.*.js
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\favicon.*.ico
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\index.html
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\main.*.js
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\splash.*.png
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\style-desktop.*.css
del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\style-mobile.*.css
Xcopy /Q /E /I /Y %projectPath%\build\%lang%\%buildTime% \\0.0.0.0\update\web-mobile\%projectName%\%lang%

Echo copy file to dev... 

rmdir /Q /S \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\res
rmdir /Q /S \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\src
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\cocos2d-js-min.*.js
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\favicon.*.ico
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\index.html
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\main.*.js
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\splash.*.png
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\style-desktop.*.css
del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\style-mobile.*.css
Xcopy /Q /E /I /Y %projectPath%\build\%lang%\%buildTime% \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%

Echo copy file to stage...
rmdir /Q /S \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\res
rmdir /Q /S \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\src
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\cocos2d-js-min.*.js
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\favicon.*.ico
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\index.html
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\main.*.js
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\splash.*.png
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\style-desktop.*.css
del /Q \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\style-mobile.*.css
Xcopy /Q /E /I /Y %projectPath%\build\%lang%\%buildTime% \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%

Echo copy file to backup...

Xcopy /Q /E /I /Y %projectPath%\build\%lang%\%buildTime% \\0.0.0.0\update\web-mobile-temp\%projectName%\%lang%\%buildTime%
endlocal
pause