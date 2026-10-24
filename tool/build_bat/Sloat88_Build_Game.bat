@echo off
chcp 65001
title=prepare to compiler...
cls
setlocal enabledelayedexpansion

::Parameter setting----------------------------
::---------------------------------------------
::project name
set projectName=slotgamebase
::language ex.EN-US,ZH-CN (slot88 no language)
::set lang=%2

::project path. ex.D:\Cocos\project
set projectPath=%cd%\%projectName%
::CocosCreator exe path

if Exist "%projectPath%\temp" rmdir/q/s "%projectPath%\temp"

Timeout 3 > nul

set cocosExePath="C:/CocosDashboard_1.0.9/resources/.editors/Creator/2.3.3/CocosCreator.exe"
if NOT Exist %cocosExePath% set cocosExePath="C:/CocosDashboard/resources/.editors/Creator/2.3.3/CocosCreator.exe"
if NOT Exist %cocosExePath% set cocosExePath="C:/CocosDashboard_1.0.8/resources/.editors/Creator/2.3.3/CocosCreator.exe"
if NOT Exist %cocosExePath% (
	echo theres no cocos exe file, fix slot88_build_game.bat
)

::setting GameID for build path and network path
set gameID=%1
::setting start scene uuid for build
set startScene=%2
:: build time
set buildTime=%3
:: full game name for show
set gameName=%4
:: set config file path
set configPath=%5
::---------------------------------------------

echo start build %gameName% to "build/%gameID%"
title=build %gameName% to build/%gameID%

copy /y "%configPath%" "%projectPath%/settings/builder.json"

Timeout 3 > nul

call searchDelLine "%projectPath%/settings/builder.json" %startScene%

::call replaceText "%projectPath%/settings/builder.json"  //%startScene% %startScene%
::call replaceText "%projectPath%/settings/builder.json" %startScene% //%startScene%
call replaceText "%projectPath%/settings/builder.json" "Build-UUID" %startScene%

::call cocos to build
echo %cocosExePath% --path %projectPath% --build "platform=web-mobile;buildPath=build/%gameID%;startScene=%startScene%;"
%cocosExePath% --path %projectPath% --build "platform=web-mobile;buildPath=build/%gameID%;startScene=%startScene%;"
title=%gameName% build is complete.

::call replaceText "%projectPath%/settings/builder.json" //%startScene% %startScene%

set buildDir="%projectPath%\build\%gameID%"

::change folder name ="build time"

cd %projectName%\build\%gameID%
ren web-mobile %buildTime%

endlocal
exit


























