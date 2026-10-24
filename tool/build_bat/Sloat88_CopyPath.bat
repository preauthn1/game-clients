@echo off
chcp 65001
cls
setlocal
::Parameter setting----------------------------
::---------------------------------------------
set projectName=slotgamebase
set gameID=%1
set projectPath=%cd%\%projectName%
set buildDir=%projectPath%\build\%gameID%
set buildTime=%2
::---------------------------------------------
title= wait for compress %1[%6]

start /WAIT/MIN "compress" compress "%buildDir%\%buildTime%"
title=prepare to clone %1 [%6]

Timeout 3 > nul

echo begin clone %gameID%

:: copy to stage
if %3==1 (
	title=now copying %1 [%6] to stage
	Xcopy /E /I /Y "%buildDir%\%buildTime%" "\\0.0.0.0\update\web-mobile-stage\%gameID%\EN-US\%buildTime%"
	Xcopy /E /I /Y "%buildDir%\%buildTime%" "\\0.0.0.0\update\web-mobile-stage\%gameID%\ZH-CN\%buildTime%"
)

:: copy to dev
if %4==1 (
	title=now copying %1 [%6] to dev
	rmdir /Q /S \\0.0.0.0\update\web-mobile-dev\%gameID%\EN-US\res
	rmdir /Q /S \\0.0.0.0\update\web-mobile-dev\%gameID%\EN-US\src
	rmdir /Q /S \\0.0.0.0\update\web-mobile-dev\%gameID%\ZH-CN\res
	rmdir /Q /S \\0.0.0.0\update\web-mobile-dev\%gameID%\ZH-CN\src

	Xcopy /E /I /Y "%buildDir%\%buildTime%\res" "\\0.0.0.0\update\web-mobile-dev\%gameID%\EN-US\res"
	Xcopy /E /I /Y "%buildDir%\%buildTime%\src" "\\0.0.0.0\update\web-mobile-dev\%gameID%\EN-US\src"
	Xcopy /E /I /Y "%buildDir%\%buildTime%\res" "\\0.0.0.0\update\web-mobile-dev\%gameID%\ZH-CN\res"
	Xcopy /E /I /Y "%buildDir%\%buildTime%\src" "\\0.0.0.0\update\web-mobile-dev\%gameID%\ZH-CN\src"
)

:: copy to qa
if %5==1 (
	title=now copying %1 [%6] to qa
	rmdir /Q /S \\0.0.0.0\update\web-mobile\%gameID%\EN-US\res
	rmdir /Q /S \\0.0.0.0\update\web-mobile\%gameID%\EN-US\src
	rmdir /Q /S \\0.0.0.0\update\web-mobile\%gameID%\ZH-CN\res
	rmdir /Q /S \\0.0.0.0\update\web-mobile\%gameID%\ZH-CN\src
	Xcopy /E /I /Y "%buildDir%\%buildTime%\res" "\\0.0.0.0\update\web-mobile\%gameID%\EN-US\res"
	Xcopy /E /I /Y "%buildDir%\%buildTime%\src" "\\0.0.0.0\update\web-mobile\%gameID%\EN-US\src"
	Xcopy /E /I /Y "%buildDir%\%buildTime%\res" "\\0.0.0.0\update\web-mobile\%gameID%\ZH-CN\res"
	Xcopy /E /I /Y "%buildDir%\%buildTime%\src" "\\0.0.0.0\update\web-mobile\%gameID%\ZH-CN\src"
)
endlocal
exit