Echo Starting
START /wait "demo" "C:\Program Files\Unity\Editor\Unity.exe" -projectpath C:\Users\Administrator\Desktop\ArkGame  -executeMethod CommandBuild.BuildAndroid -logfile build01.log
Echo Done
  
::-projectpath C:\Users\Administrator\Desktop\ArkGame  -quit -executeMethod BuildWindow.BuildAndroid -logfile build.log