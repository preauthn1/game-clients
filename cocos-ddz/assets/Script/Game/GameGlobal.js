var SoundManager = require("SoundManager");
var FileManager = require("FileManager");
var GameInfo = require("GameInfo")
var GameManager = require("GameManager")

var ScheduleObj;
var ScheduleMap;
var ScheduleIndex;

var userID = ""

var ScreenWidth = 0
var ScreenHeight = 0

var GameGlobal = {
    
    //獲取遊戲名稱
    GetGameName() {
        return GameInfo.GetGamePName(GameManager.getGameId())
    },

    getUserID(){
        if (userID == "") {
            var GameConfig = require("GameConfig")
            userID = GameConfig.getUserID()
        }
        return userID
    },

    //音效開關狀態 獲取
    GetSoundStatus() {
        return SoundManager.GetSound();
    },
    //音效開關狀態 設置
    SetSoundStatus(val) {
        SoundManager.SetSound(val);
    },    
    //音樂開關狀態 獲取
    GetMusicStatus() {
        return SoundManager.GetMusic();
    },
    //音樂開關狀態 設置
    SetMusicStatus(val) {
        SoundManager.SetMusic(val);
    },

    //播放音樂
    PlayGameBGM(audioClipName) {
        SoundManager.PlayBGM(true, audioClipName);
    },

    //播放音效
    PlayGameSound(audioClipName, isLoop) {
        SoundManager.PlaySound(true, audioClipName, isLoop);
    },

    //播放音效
    PlayHallSound(audioClipName, isLoop) {
        SoundManager.PlaySound(true, audioClipName, isLoop);
    },

    //關閉循環音效
    CloseLoopSound(audioClipName) {
        SoundManager.CloseLoopSound(audioClipName)
    },

    //關閉音樂
    CloseBGMSound() {
        SoundManager.CloseBGMSound();
    },

    //關閉音效
    CloseSound() {
        SoundManager.CloseSound();
    },


    Print(arg1, arg2){
        if (arg2)
            console.log(arg1, arg2)
        else
            console.log(arg1)
    },
	//////////////////////////////////////////////////////////////////////////////
    /**
	* 得到一個節點的世界座標
	* node的原點在中心
	*/
	LocalConvertWorldPointAR(node) {
		if (node) {
            let position = node.convertToWorldSpaceAR(cc.v2(0, 0))
			let x = (position.x - this.GetScreenWidth() * 0.5)
            let y = (position.y - this.GetScreenHeight() * 0.5)
			return cc.v2(x, y);
		}
		return null;
    },
    
    /**
	* 將座標轉換成local座標
	*/    
	WorldConvertLocalPointAR(node, pos) {
		if (node) {
            var position = node.convertToNodeSpaceAR(pos);
			let x = (position.x + this.GetScreenWidth() * 0.5)
            let y = (position.y + this.GetScreenHeight() * 0.5)            
			return cc.v2(x, y);
		}
		return null;
    },

    GetScreenWidth() {
        if (ScreenWidth == 0){
            let canvas = cc.find("Canvas").getComponent(cc.Canvas)
            ScreenWidth = canvas.designResolution.width
        }
        return ScreenWidth
    },

    GetScreenHeight() {
        if (ScreenHeight == 0){
            let canvas = cc.find("Canvas").getComponent(cc.Canvas)
            ScreenHeight = canvas.designResolution.height
        }
        return ScreenHeight
    },
    
    //////////////////////////////////////////////////////////////////////////////
    //離開遊戲
    ExitGame(){
        GameManager.leaveGame();
    },
    //獲取版本
    GetGameVersion(){
        return "202001211201";
    },

    InitAndLoadSprite(callback)
    {
        this.ImageSpriteData = new Map();
        this.ImageSprite = new Map();
        this.ImageSpriteFinish = false;

        let self = this;

        FileManager.LoadFile(true, "UISpritePrefab", "UISpritePrefab", cc.JsonAsset, (err, jsonData)=> {
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
                FileManager.LoadFile(true, "UI/" + data.dir, data.name, cc.SpriteFrame,(err, atlas)=> {
                    if (err) {
                        
                    }
                    else{
                        let index = data.dir + "_" + data.name;
                        self.ImageSpriteData.set(index, atlas);
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
    SetImageSprite(image, path, spriteName, resize = false){
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
        
        let width = image.node.width
        let height = image.node.height

        let index = file.dir + "_" + file.name;
        let spriteFrame = this.ImageSpriteData.get(index);    
        if (spriteFrame != null)
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
    
    initSchedule(self)
    {
		ScheduleMap = {}
        ScheduleObj = self;
		ScheduleIndex = 0
    },

    NewDelayOnce(callback, interval, key){
		this.CancelNewDelay(key)
		
		if(key == null){
			ScheduleIndex = ScheduleIndex +1
			key = ScheduleIndex
		}
		if(interval == null){
			interval = 0
		}
		ScheduleMap[key] = callback
        ScheduleObj.scheduleOnce(callback, interval);
    },

    NewDelay(callback, interval, key){
		this.CancelNewDelay(key)
		
		if(key == null){
			ScheduleIndex = ScheduleIndex +1
			key = ScheduleIndex
		}		
		ScheduleMap[key] = callback
        ScheduleObj.schedule(callback, interval);
    },    

    CancelNewDelay(keyOrCallback){		
		let callback = keyOrCallback
		if(ScheduleMap[keyOrCallback] != null){	
			callback = ScheduleMap[keyOrCallback]
			ScheduleMap[keyOrCallback] = null	
		}
		ScheduleObj.unschedule(callback);
    },

    NewTween(node){
        if (node == null)
        {
            console.log("NewTween, node is null")
            return null
        }

        var tween = cc.tween(node)
        return tween
    },

    StartCountDown(node, time, call){
        if (node == null)
        {
            console.log("StartCountDown, node is null")
            return null
        }

		let repeatTween = cc.tween(node)
		let tween = cc.tween(repeatTween)
	    .delay(time)
		.call(function(){
            call()
        })
        repeatTween.repeat(9999999999, tween).start()  
        return repeatTween
    },

    RemoveCountDown(tween){
        tween.stop()
    },
};

module.exports = GameGlobal;
