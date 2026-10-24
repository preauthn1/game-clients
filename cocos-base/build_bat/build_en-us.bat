setlocal

::back to project root directory
cd..

::Parameter setting----------------------------
::---------------------------------------------
::language ex.EN-US,ZH-CN
set lang=EN-US
::project name
set projectName="Build"
for %%I in (.) do set projectName=%%~nxI
::project path. ex.D:\Cocos\project
set projectPath=%cd%
::CocosCreator exe path
set cocosExePath=C:/CocosCreator_2.2.2/CocosCreator.exe
:: build time
set buildTime=%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%
:: build to where
set buildWhere="build/"%lang%

::start build ---------------------------------
::---------------------------------------------
::change language source
Xcopy /E /I /Y %projectPath%\language\%lang% %projectPath%\assets\resources

::call cocos to build
%cocosExePath% --path %projectPath% --build platform=web-mobile;buildPath=%buildWhere%

::change folder name ="build time"
cd build
cd %lang%
ren web-mobile %buildTime%

::file to qa
Xcopy /E /I /Y %projectPath%\build\%lang%\%buildTime% \\0.0.0.0\update\web-mobile\%projectName%\%lang%\%buildTime%
::file to dev
Xcopy /E /I /Y %projectPath%\build\%lang%\%buildTime% \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\%buildTime%
::file to backup
Xcopy /E /I /Y %projectPath%\build\%lang%\%buildTime% \\0.0.0.0\update\web-mobile-stage\%projectName%\%lang%\%buildTime%
endlocal