var gameData = require("GameData")
var SoundManager = require("SoundManager");
var GameInfo = require("GameInfo")
var GameManager = require("GameManager");
var networkQueue = require("NetworkQueue");
var i18n = null;

var ScheduleObj;
var ScheduleMap;
var ScheduleIndex;

var userID = ""

var ScreenWidth = 0
var ScreenHeight = 0

var GameGlobal = {
    
    /** 獲取遊戲名稱 */
    GetGameName() {
        return GameInfo.GetGamePName(GameManager.getGameId())
    },

    /** 獲取遊戲ID */
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

    /** 獲取音效開關狀態 */
    GetSoundStatus() {
        return SoundManager.GetSound();
    },
    /** 設置音效開關狀態 */
    SetSoundStatus(val) {
        SoundManager.SetSound(val);
    },    
    /** 獲取音樂開關狀態 */
    GetMusicStatus() {
        return SoundManager.GetMusic();
    },
    /** 設置音樂開關狀態 */
    SetMusicStatus(val) {
        SoundManager.SetMusic(val);
    },

    /** 播放背景音樂(同時期只會有一個) */
    PlayGameBGM(audioClipName) {
        SoundManager.PlayBGM(true, audioClipName);
    },

    /** 播放音效 */
    PlayGameSound(audioClipName, isLoop) {
        SoundManager.PlaySound(true, audioClipName, isLoop);
    },

    /** 關閉循環音效 */
    CloseLoopSound(audioClipName) {
        SoundManager.CloseLoopSound(audioClipName)
    },

    /** 關閉音樂 */
    CloseBGMSound() {
        SoundManager.CloseBGMSound();
    },

    /** 關閉音效 */
    CloseSound() {
        SoundManager.CloseSound();
    },
	//////////////////////////////////////////////////////////////////////////////
    /** 取得node的世界座標 */
	LocalConvertWorldPointAR(node) {
		if (node) {
            let position = node.convertToWorldSpaceAR(cc.v2(0, 0))
			let x = (position.x - this.GetScreenWidth() * 0.5)
            let y = (position.y - this.GetScreenHeight() * 0.5)
			return cc.v2(x, y);
		}
		return null;
    },
    
    /** 將座標轉換成local座標 */    
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
    /** 取得node的世界座標 */
    GetWorldPosition(node){
        let position = cc.v2(0, 0)
        while (node.parent != null && node.name != "Canvas"){
            position = position.add(node.position)
            node = node.parent  
        }
        return position;
    },
    /** 取得設計分辨率的寬 */
    GetScreenWidth() {
		let canvas = cc.find("Canvas").getComponent(cc.Canvas)
		ScreenWidth = canvas.designResolution.width
        return ScreenWidth
    },
    /** 取得設計分辨率的高 */
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
    /** 格式化金額
    *  @param {number} s 金額
    *  @param {number} n 保留幾位小數
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
    /** 格式化金額 */
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
    /** 離開遊戲 */
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
    /** 獲取版本 */
    GetGameVersion(){
        return "202001010000";
    },

    /** 載入圖片 */
    LoadPoolSprite(root){
        this.poolSprite = new Map();

        for(let i in root.children){
            let sprite = root.children[i].getComponent(cc.Sprite)
            if(sprite != null){
                this.poolSprite.set(sprite.node.name, sprite.spriteFrame);
            }
        }
    },

    /** 取得圖片 */
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
    /** 初始化計時器 */
    initSchedule(self)
    {
		ScheduleMap = new Map()
        ScheduleObj = self;
		ScheduleIndex = 0
    },
    /** 計時器(只呼叫一次) */
    ScheduleOnce(callback, delay){
        if(delay == null){
			delay = 1
		}
        ScheduleIndex = ScheduleIndex +1
		ScheduleMap.set(ScheduleIndex, callback)
        ScheduleObj.scheduleOnce(callback, delay);
        return ScheduleIndex;
    },
    /** 計時器(重複呼叫) */
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
    /** 取消計時器 */
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
    /** 開始倒數計時
     * @param {number} interval 間格時間
     * @param {number} repeat 重複次數
     */
    StartCountdown(callback, interval, repeat){
        let count = interval * repeat
        return this.Schedule(function(){
            if(callback != null){
                callback(count)
            }
            count = count - interval
        }, interval, repeat, 0)
    },
    /** 取消倒數計時 */
    CancelCountdown(keyOrCallback){
        this.Unschedule(keyOrCallback)
    },
    //////////////////////////////////////////////////////////////////////////////
    /** 更改遊戲時間縮放 */
    ChangeTimeScale(timeScale){
		this.GameTimeScale = timeScale
        cc.director.calculateDeltaTime = function (now) {
            if (!now) now = performance.now();
            this._deltaTime = (now - this._lastUpdate) / 1000;
            this._deltaTime *= timeScale;
            this._lastUpdate = now;
        }
	},	
	/** 取得遊戲時間縮放 */
	GetTimeScale(){
        if(this.GameTimeScale == null)
            return 1
		return this.GameTimeScale		
    },	
    
    //////////////////////////////////////////////////////////////////////////////
    /** 設置node的文字用多國語言 */
    SetNodeLocalized(node, localizedKey){
        if(node == null){
            return
        }
        let label = node.getComponent(cc.Label)
        if(label != null){
            label.string = this.GetLocalizedString(localizedKey)
        }
    },
    /** 多國語言初始化 */
    SetLanguage(language){
        i18n = require('LanguageData');
        i18n.init(language);
    },
    /** 取得多國語言 */
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
    /** 圖片等比例在目前長寬縮放 */
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
    /** 亂數 */
    MathRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    //////////////////////////////////////////////////////////////////////////////  
    /** 克隆物件 */
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
    //////////////////////////////////////////////////////////////////////////////
    /** 一般訊息 */
    Log(...arg){
        if(networkQueue.IsShowLog() != false){
            console.log(...arg)
        }
    },
    /** 錯誤訊息 */
    Error(...arg){
        if(networkQueue.IsShowLog() != false){
            console.error(...arg)
        }
    },
};

module.exports = GameGlobal;
