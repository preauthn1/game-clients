var isInit = false;

/*
    example.invalid.loader.load用於載入第三方遠端資源，在遊戲中一般用於載入第三方平臺的頭像資源，如果該資源的連結沒有檔案字尾名，需要加引數{type:"png"}。
    example.invalid.loader.loadRes用於載入assets/resources目錄下單個資源       
    example.invalid.loader.loadArray用於批量載入assets/resources目錄下資源，比較適合於進度條載入介面，通過進度變化更新進度條。       
    example.invalid.loader.loadDir用於載入assets/resources目錄下單個目錄的資源，一般我會把單個spine骨骼動畫放在一個目錄，把一個介面的資源放在一個目錄。這樣就可以通過這個介面載入單個spine動畫或者一個介面的資源。
*/

var FileManager = {

    Init()
    {
        if (isInit == false)
        {
            console.log("FileManager Init");

            isInit = true;
            
            this.hallFileDic = new Map();
            this.gameFileDic = new Map();
        }
    },

    Clear(isGame, isClearResource = true)
    {
        console.log("FileManager clear " + isGame);

        let fileDic = this.GetFileDic(isGame);
        if (isClearResource == true){
            fileDic.forEach(function (value, key) {
                cc.loader.releaseRes(value.path, value.type)
            })
        }
        fileDic.clear();
    },

    GetFileDic(isGame)
    {
        if (isGame == false)
            return this.hallFileDic;
        else
            return this.gameFileDic;  
    },

    LoadFile(isGame, path, name, dataType, callBack)
    {
        let dataPath = path + "/" + name;
        dataPath = dataPath.replace("//", "/")
        let key = dataPath + "_" + dataType.name;
        let fileDic = this.GetFileDic(isGame);     
        let file = fileDic.get(key);
        if (file != undefined)
        {
            // 下載完成
            if (file.loading == false){
                if (callBack)
                    callBack(null, file.data);    
                }
            // 下載中 加到等待列表
            else
            {
                file.callBack.push(callBack);
            }
            return
        }
        // 尚未下載
        else
        {
            let file = {}
            file.name = name;
            file.path = dataPath;
            file.type = dataType;
            file.loading = true;
            file.isGame = isGame;
            file.data = null;
            file.callBack = new Array();
            file.callBack.push(callBack);
            fileDic.set(key, file);
            
            // 載入
            cc.loader.loadRes(dataPath, dataType, (err, loadData)=> {
                if (err) {
                    cc.error(err.message || err);
    
                    if (callBack)
                        callBack(err.message, loadData);                
                    return;
                }
                
                let file1 = fileDic.get(key);
                if (file1 == null)
                    return

                file1.data = loadData;
                file1.loading = false;
                fileDic.set(key, file1);

                file1.callBack.forEach(function (cb){
                    if (cb){
                        cb(null, loadData);
                    }
                })
            });            
        }
    },    

};

module.exports = FileManager;
