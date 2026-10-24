rem UTF-8
::@echo off
%~d0
cd %~p0
chcp 950
set buildTime=%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%
chcp 65001

set search=202001010000
set gameName=jgyf

::GameName buildTime
call set_time.bat %gameName% %search% %buildTime%

::GameName Language( EN-US | ZH-CN ) CopyToStage(0:NO 1:YES) CopyToDev(0:NO 1:YES) CopyToQa(0:NO 1:YES) buildTime

call build_game_comp.bat %gameName% EN-US 0 0 0 %buildTime%
::call build_game.bat %gameName% EN-US 1 1 1 %buildTime%
::call build_game.bat %gameName% ZH-CN 1 1 1 %buildTime%

::set covered buildTime back to search for next time
call set_time.bat %gameName% %buildTime% %search%

pause