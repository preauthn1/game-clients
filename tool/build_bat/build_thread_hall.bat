rem UTF-8
::@echo off
%~d0
cd %~p0
chcp 950
set buildTime=202009161228
chcp 65001

set gameName=hall

::GameName Language( EN-US | ZH-CN ) CopyToStage(0:NO 1:YES) CopyToDev(0:NO 1:YES) CopyToQa(0:NO 1:YES) buildTime
call build_game.bat %gameName% EN-US 1 1 1 %buildTime%
call build_game.bat %gameName% ZH-CN 1 1 1 %buildTime%

pause