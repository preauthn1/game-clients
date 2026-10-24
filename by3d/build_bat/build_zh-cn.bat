setlocal

::回專案根目錄
cd..
::設置變數-------------------------------------
::---------------------------------------------
::多國語言 ex.EN-US,ZH-CN
set lang=ZH-CN
::專案名稱
set projectName="Build"
for %%I in (.) do set projectName=%%~nxI
::專案位置 ex.D:\Cocos\project
set projectPath=%cd%
::CocosCreator執行檔位置
set cocosExePath=C:/CocosCreator_2.2.2/CocosCreator.exe
::輸出時間
set buildTime=%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%

::開始輸出-------------------------------------
::---------------------------------------------
::更換語言資源
Xcopy /E /I /Y %projectPath%\language\%lang% %projectPath%\assets\resources

::建置檔案
%cocosExePath% --path %projectPath% --build "platform=web-mobile;buildPath=build/"%lang%

::更改目錄名稱為建置時間
cd build
cd %lang%
ren web-mobile %buildTime%

::將輸出的檔案傳至內部測試位置
Xcopy /E /I /Y %projectPath%\build\%lang%\%buildTime% \\0.0.0.0\update\web-mobile\%projectName%\%lang%\%buildTime%
Xcopy /E /I /Y %projectPath%\build\%lang%\%buildTime% \\0.0.0.0\update\web-mobile-dev\%projectName%\%lang%\%buildTime%
endlocal

pause