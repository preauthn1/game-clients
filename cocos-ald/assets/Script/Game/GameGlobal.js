var gameData = require("GameData")
var SoundManager = require("SoundManager");
var FileManager = require("FileManager");
var GameInfo = require("GameInfo")
var GameManager = require("GameManager")
var i18n = null;

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

    //獲取遊戲ID
    GetGameId() {
        return GameManager.getGameId()
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
        if(pos == null){
            pos = cc.v2(0, 0)
        }

		if (node) {
            var position = node.convertToNodeSpaceAR(cc.v2(pos.x, pos.y));
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
    /*
        Example usage: Output:
        print(FormatNum(9))						9
        print(FormatNum(999))					999
        print(FormatNum(1000))					1, 000
        print(FormatNum('1333444.10'))			1, 333, 444.10
        print(FormatNum('US$1333400'))			US$1, 333, 400
        print(FormatNum('-$22333444.56')) - $22, 333, 444.56
        print(FormatNum('($22333444.56)'))($22, 333, 444.56)
        print(FormatNum('NEG $22333444.563'))	NEG $22, 333, 444.563
    */
    /*
    * 参数说明：
    * s：要格式化的数字
    * n：保留几位小数
    * */
    FormatNum(s, n = 2) { //credit http://richard.warburton.it
        n = n > 0 && n <= 20 ? n : 2;
        s = s * 0.01;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        return s
        .toString()
        .replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function (all, pre, groupOf3Digital) {
            return pre + groupOf3Digital.replace(/\d{3}/g, ',$&');
        });
    },

    FormatUnit(n) {
        if (gameData.UnitPrefix == null) {
            return GameGlobal.FormatNum(n)
        }

        var compare = function (dataA, dataB) {
            return dataA.Multiple > dataB.Multiple
        }

        var unit = ""
        var temp = n * 0.01

        gameData.UnitPrefix.sort(compare);

        var breakFlag = false;
        gameData.UnitPrefix.forEach(function (v, k) {
            if (breakFlag == true) {
                return false;
            }            

            var multiple = v.Multiple * 100
            if (parseFloat(n) >= multiple) {
                unit = v.Name
                temp = n / multiple
                breakFlag = true
            }
        })

        return GameGlobal.FormatNum(temp * 100)+unit
    },

        
    AbbreviateNumber(value,formatNum = false){
        if (formatNum) {
            value = this.FormatNum(value)
        }
        if (value.replace != null){
            value = value.replace(/,/g, "");
       }
        let number = parseFloat(value);
        var SI_SYMBOL = ["", "K", "M"];
        var tier = Math.log10(Math.abs(number)) / 3 | 0;
        if(tier == 0) return number.toFixed(2);
        if(tier > SI_SYMBOL.length - 1) tier = SI_SYMBOL.length - 1;
        var suffix = SI_SYMBOL[tier];
        var scale = Math.pow(10, tier * 3);
        var scaled = number / scale;
        var num = parseFloat(scaled.toFixed(2));
        return num + suffix;
    },
    
    //////////////////////////////////////////////////////////////////////////////
    //離開遊戲
    ExitGame(){
        if (GameManager == null){
            GameManager = require("GameManager")
            GameManager.leaveGame();
        }

        var GameConfig = require("GameConfig")
        let Referrer = GameConfig.getReferrer()
        if (Referrer=="0") {
            window.close();
        }
        else {
            window.location.href=Referrer;
        } 
    },
    //獲取版本
    GetGameVersion(){
        return "202001010000";
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
    
    //////////////////////////////////////////////////////////////////////////////
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
        return key;
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

    // interval 以秒为单位的时间间隔
    // delay 开始延时
    NewDelayInterval(callback, interval, delay, key){
		this.CancelNewDelay(key)
		
		if(key == null){
			ScheduleIndex = ScheduleIndex +1
			key = ScheduleIndex
		}
		if(key == null){
			ScheduleIndex = ScheduleIndex +1
			key = ScheduleIndex
		}		
        ScheduleMap[key] = callback        
        ScheduleObj.schedule(callback, interval, 9999999999, delay);
        return key;
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
	
	//////////////////////////////////////////////////////////////////////////////
    ChangeTimeScale(timeScale){
		this.GameTimeScale = timeScale
        cc.director.calculateDeltaTime = function (now) {
            if (!now) now = performance.now();
            this._deltaTime = (now - this._lastUpdate) / 1000;
            this._deltaTime *= timeScale;
            this._lastUpdate = now;
        }
	},	
	
	GetTimeScale(){
		return this.GameTimeScale		
    },	
    
    //////////////////////////////////////////////////////////////////////////////
    
    SetLanguage(language){
        i18n = require('LanguageData');
        i18n.init(language);
    },

    GetLocalizedString(dataID){
        if (dataID == "")
            return dataID;

        if (i18n == null)
            return dataID;
            
        let getStr = i18n.t("label_text." + dataID);
        if(getStr.includes("label_text."))
            return dataID;
        return getStr;
    },
    
    //////////////////////////////////////////////////////////////////////////////    
    SpritePreserveAspect(sprite){
        if(sprite == null)
            return;
        if(sprite.spriteFrame == null)
            return;
        
        let size = sprite.spriteFrame.getOriginalSize()
        if(sprite.node.width > sprite.node.height)
            sprite.node.width = sprite.node.height * size.width / size.height
        else
            sprite.node.height = sprite.node.width * size.height / size.width
    },
};

module.exports = GameGlobal;
