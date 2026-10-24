Echo Starting
Start Start_PullAllgame.bat
TIMEOUT /T 15
START /wait "demo" "C:\Program Files\Unity5_6_f1\Editor\Unity.exe" -projectpath "C:\Users\user23\Desktop\ArkGame-6.0\"  -executeMethod AppBuildScript.AutoBuildRefreshPlatform -logfile build.log -quit -batchmode 
Echo Done