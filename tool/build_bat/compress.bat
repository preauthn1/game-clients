@echo off
title compress png
cls
%~d0
cd %~p0
copy pngquant.cmp %~f1\pngquant.exe

%~d1
cd %~f1

Timeout 3 > nul

for /R %%i in (*.png) do (
  pngquant --transbug --force 256 --ext .png "%%i"
)

del /Q pngquant.exe
exit