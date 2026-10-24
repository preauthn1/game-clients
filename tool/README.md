ExoprtUISpritePrefabToJson:
輸出UISpritePrefab中圖片連結位置

prefab-creator:
輸出和匯入UI和animation Controller

# unity 介面转换成 cocos creator 介面 

## 1.unity中将界面生成json档案  
设定套件：  
将unity中的Editor和Plugins资料夹复制到unity里  
  
使用方式：  
(1) 先选择要生成json的介面  
(2) 生成json档案 Cocos -> Export To Jsopn  
(3) 选择储存路径  
  
![image](http://0.0.0.0/client/cocosslottest/raw/master/readmePic/Image%208.png)

## 2.cocos中将json档案生成介面  
开启面版：  
点 扩展 -> Prefab生成工具 开启json生成介面面板  
  
使用方式：  
(1) 将场景大小改成 1334 * 750
(2) 将美术图放到UI资料夹  
(3) 将字型放到Font资料夹  
(4) 选择档案路径  
(5) 指定json档案  
(6) 生成介面  
(7) 生成的介面会在prefab资料夹中  
  
![image](http://0.0.0.0/client/cocosslottest/raw/master/readmePic/Image%2011.png)

 animformjson:  
 1.首先 animformjson\unity 中的程式碼放入Unity專案中  
 2.開啟要轉換的場景並在素材庫中選取要轉換圖片和動畫的主要資料夾  
 3.在上方的工具列中找到Cocos、選取其下的"Parse Sprite and Animation to Cocos Resource"  
 4.完成後會於Unity專案檔位置上一層產生outputJsonAnim資料夾  
 5.在上方的工具列中找到Cocos、選取其下的"Output Particle to Cocos"  
 6.完成後同樣會放在Unity專案檔位置上一層outputJsonAnim資料夾中  
 7.將outputJsonAnim資料夾中的檔案複製到Cocos專案中  
 8.將animformjson\packages複製到Cocos專案的packages資料夾中  
 9.需確認outputJsonAnim資料夾中的圖片設定檔案放置在對應圖片檔旁  
 10.切換到cocos專案  
 11.在Cocos上方功能表中找到擴展，並選取其下的動畫JSON導入  
 12.按下導入動畫後，工具將會自動對選取路徑中的動畫設定檔、圖片設定檔等進行設定、調整  
 最後檢查場景中是否有需需要對粒子特效進行功能延展。  


其他線上工具：  
1.壓縮圖片  
https://example.invalid/  
  
2.聲音轉檔 壓縮  
https://example.invalid/  
https://example.invalid/tw/  