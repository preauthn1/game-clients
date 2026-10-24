::新增遊戲
::功能:
::範例-遊戲名稱 [newgame]
::Step1. 請GIT有管理權限的人，在上面開新的倉庫，命成為遊戲名稱 [newgame]
::Step2. 在專案內路徑 Assets\Game 內創建一個資料夾，命成為遊戲名稱 [newgame]
::Step3. 將此檔案放在專案內路徑 Assets\Game內
::Step4. 修改底下[xxwwxxwwxxww]的地方改成遊戲名稱 [newgame]
::Step5. 執行此執行檔

touch README.md

echo xxwwxxwwxxww >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin http://0.0.0.0/ClientTeam/xxwwxxwwxxww.git
git push -u origin master