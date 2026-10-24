setlocal

::Parameter setting----------------------------
::---------------------------------------------
::project name
set projectName=%1
::language ex.EN-US,ZH-CN
set lang=%2
::project path. ex.D:\Cocos\project
set projectPath=%cd%\%projectName%
::CocosCreator exe path
set cocosExePath=C:/CocosCreator_2.2.2/CocosCreator.exe

::start build ---------------------------------
::---------------------------------------------
::change language source
Xcopy /E /I /Y %projectPath%\language\%lang% %projectPath%\assets\resources

::call cocos to build
%cocosExePath% --path %projectPath% --build "platform=web-mobile;buildPath=build/"%lang%

set buildDir=%projectPath%\"build"\%lang%

:: build time
set buildTime=%6

::change folder name ="build time"
cd %projectName%\build\%lang%

ren web-mobile %buildTime%

:: copy to stage
if %3==1 (
	Xcopy /E /I /Y %buildDir%\%buildTime% \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\%buildTime%
)

:: copy to dev
if %4==1 (
	rmdir /Q /S \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\res
	rmdir /Q /S \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\src
	del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\cocos2d-js-min.*.js
	del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\favicon.*.ico
	del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\index.html
	del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\main.*.js
	del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\splash.*.png
	del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\style-desktop.*.css
	del /Q \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\style-mobile.*.css
	Xcopy /E /I /Y %buildDir%\%buildTime% \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%
)

:: copy to qa
if %5==1 (
	rmdir /Q /S \\0.0.0.0\update\web-mobile\%projectName%\%lang%\res
	rmdir /Q /S \\0.0.0.0\update\web-mobile\%projectName%\%lang%\src
	del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\cocos2d-js-min.*.js
	del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\favicon.*.ico
	del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\index.html
	del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\main.*.js
	del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\splash.*.png
	del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\style-desktop.*.css
	del /Q \\0.0.0.0\update\web-mobile\%projectName%\%lang%\style-mobile.*.css
	Xcopy /E /I /Y %buildDir%\%buildTime% \\0.0.0.0\update\web-mobile\%projectName%\%lang%
)

endlocal