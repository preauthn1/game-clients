var SoundManager = require("SoundManager");
var GameManager = null;
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
        if (GameManager == null){
            GameManager = require("GameManager")
        }        
        return GameManager.GetGamePName()
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
    // PlayGameBGM(audioClipName) {
    //     SoundManager.PlayBGM(true, audioClipName);
    // },

    //播放音效
    // PlayGameSound(audioClipName, isLoop) {
    //     SoundManager.PlaySound(true, audioClipName, isLoop);
    // },

    //關閉循環音效
    // CloseLoopSound(audioClipName) {
    //     SoundManager.CloseLoopSound(audioClipName)
    // },

    //關閉音樂
    CloseBGMSound() {
        SoundManager.CloseBGMSound();
    },

    //關閉音效
    CloseSound() {
        SoundManager.CloseSound();
    },

    // 播放音效
    PlayBGM(clip) {
        if (clip != null){
            cc.audioEngine.playMusic(clip, true, 1);
        }
    },    

    // 播放音效
    PlaySound(clip, isLoop = false){
        if (clip != null){
            let number = cc.audioEngine.playEffect(clip, isLoop, 1);
            return number
        }
        else{
            console.error("!!!!!!!!!!!!!!!!!!!!!! PlaySound error")
            return null
        }
    },
    // 停止音效
    StopSound(number){
        if (number != null){
            cc.audioEngine.stop(number);
        }
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

    GetWorldPosition(node){
        let position = cc.v2(0, 0)
        while (node.parent != null && node.name != "Canvas"){
            position = position.add(node.position)
            node = node.parent  
        }
        return position;
    },

    GetScreenWidth() {
		let canvas = cc.find("Canvas").getComponent(cc.Canvas)
		ScreenWidth = canvas.designResolution.width
        return ScreenWidth
    },

    GetScreenHeight() {
        let canvas = cc.find("Canvas").getComponent(cc.Canvas)
        ScreenHeight = canvas.designResolution.height
        return ScreenHeight
    },


    //////////////////////////////////////////////////////////////////////////////
    /*
        Example usage: Output:
        console.log(FormatNum(9))						9
        console.log(FormatNum(999))					    999
        console.log(FormatNum(1000))					1, 000
        console.log(FormatNum('1333444.10'))			1, 333, 444.10
        console.log(FormatNum('US$1333400'))			US$1, 333, 400
        console.log(FormatNum('-$22333444.56'))         - $22, 333, 444.56
        console.log(FormatNum('($22333444.56)'))        ($22, 333, 444.56)
        console.log(FormatNum('NEG $22333444.563'))	    NEG $22, 333, 444.563
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
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        let t = "";
        for (let i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return t.split("").reverse().join("") + "." + r;
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
        return "202011301850";
    },

    LoadPoolSprite(root){
        this.poolSprite = new Map();

        for(let i in root.children){
            let sprite = root.children[i].getComponent(cc.Sprite)
            if(sprite != null){
                this.poolSprite.set(sprite.node.name, sprite.spriteFrame);
            }
        }
    },

    //載入圖片
    GetImageSprite(image, spriteName, resize = false){
        if (image == null){
            console.log("************** image is null")
            return
        }

        if (image.node == null){
            console.log("************** image or image.node == null")
            return
        }
        
        if (this.poolSprite.has(spriteName)){
            let spriteFrame = this.poolSprite.get(spriteName);
            image.spriteFrame = spriteFrame;

            let width = image.node.width
            let height = image.node.height

            if (resize){
                let size = spriteFrame.getOriginalSize()
                image.node.width = size.width
                image.node.height = size.height
            }
            else{
                image.node.width = width
                image.node.height = height
            }
        }
    },
    
    //////////////////////////////////////////////////////////////////////////////
    initSchedule(self)
    {
		ScheduleMap = new Map()
        ScheduleObj = self;
		ScheduleIndex = 0
    },

    ScheduleOnce(callback, delay){
        if(delay == null){
			delay = 1
		}
        ScheduleIndex = ScheduleIndex +1
		ScheduleMap.set(ScheduleIndex, callback)
        ScheduleObj.scheduleOnce(callback, delay);
        return ScheduleIndex;
    },

    Schedule(callback, interval, repeat, delay){
		if(interval == null){
			interval = 1
        }
        if(repeat == null){
            repeat = Number.MAX_SAFE_INTEGER
        }
        if(delay == 0){
            delay = 0.0001
        }
        ScheduleIndex = ScheduleIndex +1
		ScheduleMap.set(ScheduleIndex, callback)
        ScheduleObj.schedule(callback, interval, repeat, delay);
        return ScheduleIndex;
    },

    Unschedule(keyOrCallback){
		let callback = keyOrCallback
		if(ScheduleMap.has(keyOrCallback) == true){	
			callback = ScheduleMap.get(keyOrCallback)
			ScheduleMap.delete(keyOrCallback)
        }
		ScheduleObj.unschedule(callback);
    },

    //////////////////////////////////////////////////////////////////////////////
    NewTween(node){
        if (node == null)
        {
            console.log("NewTween, node is null")
            return null
        }

        var tween = cc.tween(node)
        return tween
    }, 
    //////////////////////////////////////////////////////////////////////////////
    StartCountdown(callback, interval, repeat){
        let count = interval * repeat
        return this.Schedule(function(){
            if(callback != null){
                callback(count)
            }
            count = count - interval
        }, interval, repeat, 0)
    },

    CancelCountdown(keyOrCallback){
        this.Unschedule(keyOrCallback)
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
        if(this.GameTimeScale == null)
            return 1
		return this.GameTimeScale		
    },	
    
    //////////////////////////////////////////////////////////////////////////////
    SetNodeLocalized(node, localizedKey){
        if(node == null){
            return
        }
        let label = node.getComponent(cc.Label)
        if(label != null){
            label.string = this.GetLocalizedString(localizedKey)
        }
    },

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
    //////////////////////////////////////////////////////////////////////////////  
    InitRandomSeed(seed){
        Math.seed = seed; 
    },

    Random() {
        return Math.random()     
    },

    MathRandom(min, max) {
        max = max || 1;
        min = min || 0; 
        console.error(min, max)
        // Math.seed = (Math.seed * 9301 + 49297) % 233280; 
        // var rnd = Math.seed / 233280.0;
        // return min + rnd * (max - min); 
        return Math.floor(Math.random() * (max - min)) + min;        
    },
    //////////////////////////////////////////////////////////////////////////////  
    CreateClone(prefab, parent){
        if(parent == null){
            parent = prefab.parent;
        }
        let clone = cc.instantiate(prefab);
        clone.parent = parent;
		clone.position = cc.v2(0, 0);
		clone.scale = 1;
        clone.active = true;
        
        return clone
    },

    InitRolePic(){
        this.RolePicSpriteManager = cc.find("Canvas/RolePic").getComponent("SpriteManager")
        this.RolePicSpriteManager.init()
    },

    SetRolePic(sprite, faceID){
        if (sprite == null){
            return
        }

        let spriteFrame = this.RolePicSpriteManager.get("sprite_" + faceID.toString())
        sprite.spriteFrame = spriteFrame
    },
    
    InitCardPic(){
        this.CardPicSpriteManager = cc.find("Canvas/CardPic").getComponent("SpriteManager")
        this.CardPicSpriteManager.init()
    },

    SetCardPic(sprite, tpye, value){
        if (sprite == null){
            return
        }

        let spriteFrame = this.CardPicSpriteManager.get("sprite_card_" + tpye.toString() + "_" + value.toString())
        if (spriteFrame == null){
            console.error("can not find card pic", tpye, value)
        }
        else{
            sprite.spriteFrame = spriteFrame
        }
    },
};

module.exports = GameGlobal;
