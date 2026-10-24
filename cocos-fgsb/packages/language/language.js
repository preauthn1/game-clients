let fs            = require('fs');
let countingFiles = 0;
let fileCoverList = [];

module.exports = {
    
    'en-us' : function(){
        this.changeLanguage('en-us');
    },
    
    'zh-cn' : function(){
        this.changeLanguage('zh-cn');
    },
    
    'resize' : function(){
        this.resetPictureSize();
    },
    
    changeLanguage(folderName){
        Editor.log('[language] start change..', folderName);
        let folderPath = Editor.Project.path + '\\language\\' + folderName;
        countingFiles  = 1;
        fileCoverList  = [];
        this.findOrCopyFile(folderName, folderPath);
    },
    
    findOrCopyFile(folderName, folderPath){
        
        Editor.log('[language] folderPath', folderPath);
        let self = this;
        fs.readdir(folderPath, function(err, files){
            if(err){
                throw err;
            }
            countingFiles += files.length;
            files.forEach(function(name){
                var filePath = folderPath + '\\' + name;
                var stat     = fs.statSync(filePath);
                if(stat.isFile()){
                    self.copyFile(folderName, filePath);
                }else if(stat.isDirectory()){
                    self.findOrCopyFile(folderName, filePath);
                }
            });
            
            countingFiles--;
            if(countingFiles == 0){
                self.refreshResource(folderPath);
            }
        });
        
    },
    
    // 替換檔案
    copyFile(folderName, filePath){
        fileCoverList.push(cc.path.basename(filePath));
        let self       = this;
        let targetPath = filePath.replace('\\language\\' + folderName, '\\assets\\resources');
        fs.copyFile(filePath, targetPath, (err) => {
            if(err) throw err;
            Editor.log('[language]copy', targetPath);
            countingFiles--;
            if(countingFiles == 0){
                self.refreshResource(folderName);
            }
        });
    },
    
    // 刷新資源
    refreshResource(){
        let self = this;
        Editor.assetdb.refresh('db://assets/resources', function(err, results){
            if(err) throw err;
            Editor.log("[language] refresh");
            // setTimeout(function () {
            //     self.resetPictureSize();
            // }, 1000);
        });
        
    },
    
    resetPictureSize(){
        //圖片大小 變動後造成顯示比例異常
        let scene = cc.director.getScene();//取得場景   
        // cc.director.loadScene(scene);
        // cc.director.reset();
        //cc.AssetLibrary.loadAsset
        
        
        let all_LL = scene.getComponentsInChildren(cc.Sprite);//從場景中找到所有圖
        let len    = all_LL.length, i;
        for(i = 0; i < len; i++){
            let item = all_LL[i];
            if(item && item.spriteFrame){
                let fname = item.spriteFrame.name + item.spriteFrame._texture._native;//把名字(含副檔名)記下
                //這張圖在前面替換的圖片中
                if(fileCoverList.includes(fname)){
                    //讓圖片重新設定大小
                    let SizeMode  = item.sizeMode;
                    item.sizeMode = cc.Sprite.SizeMode.RAW;
                    item.sizeMode = SizeMode;
                }
            }
        }
    },
    
};