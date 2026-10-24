@echo off

setlocal enableextensions disabledelayedexpansion

set filepath=%~1
cd %~p1
set nowPath=%CD%
set textFile=%~nx1
set search=%2

>"%textFile%.new" (
	for /f "delims=" %%i in ('findstr /n "^" "%textFile%"') do (
		set "line=%%i"
		setlocal enabledelayedexpansion

		set "line=!line:*:=!"
		set compare=!line:%search%=!
		if !compare! equ !line! echo(!line!
		endlocal
	)
)
move /y "%textFile%.new" "%textFile%" >nul
cd %nowpath%