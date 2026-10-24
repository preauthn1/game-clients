setlocal

::back to project root directory
cd..

::Parameter setting----------------------------
::---------------------------------------------
::language ex.EN-US,ZH-CN
set lang=ZH-CN
::project name
set projectName=Build
for %%I in (.) do set projectName=%%~nxI
::project path. ex.D:\Cocos\project
set projectPath=%cd%
::CocosCreator exe path
set cocosExePath=C:/CocosCreator_2.2.2/CocosCreator.exe
:: build time
set buildTime=%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%

::start build ---------------------------------
::---------------------------------------------
::change language source
Xcopy /E /I /Y %projectPath%\language\%lang% %projectPath%\assets\resources

::call cocos to build
%cocosExePath% --path %projectPath% --build platform=web-mobile;buildPath=build/%lang%

::---------------------------------------------
::change folder name ="build time"
cd build
cd %lang%
ren web-mobile %buildTime%

::Compress img---------------------------------
::---------------------------------------------
set copyPath=%projectPath%\build_bat\pngquant.exe
set pastePath=%projectPath%\build\%lang%\%buildTime%\pngquant.exe
::copy file (pngquant.exe)
copy %copyPath% %pastePath%

cd %buildTime%

for /R %%i in (*.png) do (
  pngquant --transbug --force 256 --ext .png "%%i"
)

del /Q %pastePath%

::---------------------------------------------
endlocal

pause