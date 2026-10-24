@echo off

setlocal enableextensions disabledelayedexpansion

set textFile=%1
set search=%2
set replace=%3

>"%textFile%.new" (
  for /f "delims=" %%i in ('findstr /n "^" "%textFile%"') do (
      set "line=%%i"
      setlocal enabledelayedexpansion
	
      set "line=!line:*:=!"
      if defined line set "line=!line:%search%=%replace%!"
      echo(!line!
      endlocal
  )
)
move /y "%textFile%.new" "%textFile%" >nul