::LP ݭnܳBuild
::ƻsؼЦmiPW٤Pݭn`N
::BuildXӤһݭnRuresMsrcӸƧ
::ϥΪOCocos 2.3.3
::BuildXӤᶷϡABuildAADnOSloat88MפӤjA@@Y
@echo off

%~d0
cd %~p0
chcp 950
set buildTime=%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%

chcp 65001
title=main thread.
setlocal enabledelayedexpansion

::ǳbuilder.json
set np=%cd%
cd slotgamebase
type %np%\builderFront.data> %np%\builder.json
echo. >> %np%\builder.json
for /R %%d in (*.fire.meta) do (
	findstr "uuid" "%%d"> tmp.txt
	set/p found=< tmp.txt
	set found=    !found:~10!
	set fileP=%%~nd
	set fileP=!fileP:.fire=!
	echo !found!>> %np%\builder.json
)
del/q tmp.txt
type %np%\builderBack.data>> %np%\builder.json

Timeout 3 > nul

call %~p0\replaceText.bat "%np%\builder.json" "!found!" "!found:~0,-1!"

set configPath=%np%\builder.json
echo %configPath%
cd %~p0

set search=202001010000

set BID1=88fortune "606a6b7a-a6bc-4c61-a662-2c7adee4b200" s88f
set BID2=5luckylions "c3989071-9dcc-4f7b-84d2-390754d8b3e4" s5ll
set BID3=888 "800c02b1-876f-4e4c-a0dc-a1310e855089" s888
set BID4=buffalobonus "82d4573c-d622-447c-92b9-c0778e430b33" bb
set BID5=dragonorb "481b6df2-8752-4bd6-8b8f-9176ee1ee4d1" dgno
set BID6=frogsabdflies "e91e9404-8908-4c8e-88f5-169c56ba67d2" faf
set BID7=hothotfruit "c9000d14-96db-4a45-82a5-a0f90be23075" hhf
set BID8=jokersjewels "fdc7f082-32f1-45ff-bea3-9c12274e7101" jkjl
set BID9=luckybats "c0dd7a64-3623-47fd-8a5f-eca3a67e4aac" lkb
set BID10=queenofwands "c0dd7a64-3623-47fd-8a5f-eca3a67e4aac" qow

:: modify here:
:: call :CallStart GameName  CopyToStage(0:NO 1:YES) CopyToDev(0:NO 1:YES) CopyToQa(0:NO 1:YES)
call :CallStart 88fortune 0 0 0

goto end

:: get the data with game name to start a build thread
:CallStart
set GameName=null
set tempGameName=null
set uuid=null
set gameID=null
for /L %%a in (1,1,99) do (
	set i=0
	for %%b in (!BID%%a!) do (
		if !i! equ 0 (
			set tempGameName=%%b
		)
		if !tempGameName! equ %1 (
			set GameName=tempGameName
			if !i! equ 1 (
				set uuid=%%b
			)
			if !i! equ 2 (
				set gameID=%%b
			)
		)
		set /a i+=1
	)
)

echo %1 processing...

title=%1 processing...
start /WAIT/MIN "%1" Sloat88_Build_Game %gameID% %uuid% %buildTime% %1 %configPath%

Timeout 3 > nul

echo start clone %1
start /MIN "clone %1" Sloat88_CopyPath %gameID% %buildTime% %2 %3 %4 %1 

Timeout 3 > nul

goto :eof
:end
del %configPath%
title=%ComSpec%
endlocal
chcp 950
cls
ver