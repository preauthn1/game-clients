var UIUserPic = {

    InitAndLoadSprite(callback)
    {
        this.ImageSpriteData = new Map();
        this.ImageSprite = new Map();
        this.ImageSpriteFinish = false;

        let self = this;

        var FileManager = require("FileManager");
        FileManager.LoadFile(true, "UI/UIUserPic", "UISpritePrefab", cc.JsonAsset, (err, jsonData)=> {
            if (err) {
                return
            }

            let dataList = jsonData.json;

            let LoadSpriteData = new Map();
            for(var key in dataList){
                var data = dataList[key];
                self.ImageSprite.set(key, data);

                let index = data.dir + "/" + data.name;
                LoadSpriteData.set(index, data);
            }

            let count = LoadSpriteData.size
            let acc = 0;
            LoadSpriteData.forEach(function (data) {
                FileManager.LoadFile(true, "UI/UIUserPic", data.name, cc.SpriteFrame, (err, spriteFrame)=> {
                    if (err) {
                        
                    }
                    else{
                        let index = data.dir + "_" + data.name;
                        self.ImageSpriteData.set(index, spriteFrame);
                    }

                    acc++;
                    if (acc == count){
                        self.ImageSpriteFinish = true
                        
                        if (callback)
                            callback()
                    }
                })
            })
        });
    },

    //載入圖片
    ResetSpriteByName(image, spriteName, resize = false){
        if (image == null){
            console.log("************** image is null")
            return
        }

        if (image.node == null){
            console.log("************** image or image.node == null")
            return
        }

        if (this.ImageSpriteFinish == false)
            return;

        spriteName = "sprite_" + spriteName
        let file = this.ImageSprite.get(spriteName);
        if (file == null){
            console.log("*************** can not find spriteName " + spriteName)
            return
        }

        let index = file.dir + "_" + file.name;
        let spriteFrame = this.ImageSpriteData.get(index);
        if (spriteFrame == null){
            console.log("*************** can not find spriteFrame " + index)
            return
        }       

        let width = image.node.width
        let height = image.node.height

        image.spriteFrame = spriteFrame;

        if (resize){
            let size = spriteFrame.getOriginalSize()
            image.node.width = size.width
            image.node.height = size.height
        }
        else{
            image.node.width = width
            image.node.height = height
        }
    },
};

module.exports = UIUserPic;
