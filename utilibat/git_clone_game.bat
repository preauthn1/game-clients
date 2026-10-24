::下載遊戲
IF EXIST ArkGame()ELSE (pause)
cd ArkGame
cd Assets
cd Game
git 
cd %2
git pull
git checkout UI3.0
EXIT