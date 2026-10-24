::下載大廳
IF EXIST ArkGame()ELSE (pause)
cd ArkGame
cd Assets
git  clone http://%1@0.0.0.0/ClientTeam/Hall.git
IF EXIST Hall()ELSE (pause)
cd Hall
git pull
git checkout UI3.0
EXIT