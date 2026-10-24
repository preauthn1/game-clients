::git config --global user.name "John Doe"
::git config --global user.email "user@example.invalid"

::下載專案
git clone http://%1@0.0.0.0/ClientTeam/ArkGame.git

IF EXIST ArkGame()ELSE (pause echo "下載失敗" )
cd ArkGame
git pull
git checkout Android
EXIT
