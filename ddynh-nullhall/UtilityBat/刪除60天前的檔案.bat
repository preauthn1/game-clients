


@echo off

set log_dir=C:\GameClient\BasicFramework

echo Starting Remove Expired File(60 days ago)...
forfiles /p %log_dir% /d -60 /s /m *.* /c "cmd /c del @path"

echo Starting Remove Empty Folder...
for /f "delims=" %%d in ('dir %log_dir% /s /b /ad ^| sort /r') do rd "%%d"

Pause