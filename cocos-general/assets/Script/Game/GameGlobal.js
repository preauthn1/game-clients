var SoundManager = require("SoundManager");
var GameManager = require("GameManager")
var i18n = null;

var ScheduleMapTemp;
var ScheduleObj;
var ScheduleMap;
var ScheduleIndex;

var userID = ""

var ScreenWidth = 0
var ScreenHeight = 0

var GameGlobal = {
    
    //獲取遊戲名稱
    GetGameName() {
        return GameManager.getGameId()
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
        if (audioClipName == null || audioClipName == "")
            return
                
        SoundManager.PlayBGM(true, audioClipName);
    },

    //播放音效
    PlayGameSound(audioClipName, isLoop) {
        if (audioClipName == null || audioClipName == "")
            return
        
        SoundManager.PlaySound(true, audioClipName, isLoop);
    },

    //關閉循環音效
    CloseLoopSound(audioClipName) {
        if (audioClipName == null || audioClipName == "")
            return
        
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

    //關閉音樂音效
    OpenMusicAndSound() {
        this.SetSoundStatus(true);
        this.SetMusicStatus(true);
    },

    //關閉音樂音效
    CloseMusicAndSound() {
        this.SetSoundStatus(false);
        this.SetMusicStatus(false);
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
    
    GetScreenWidth() {
		let canvas = cc.find("Canvas").getComponent(cc.Canvas)
		ScreenWidth = canvas.designResolution.width
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
        console.log(FormatNum(9))						9
        console.log(FormatNum(999))					    999
        console.log(FormatNum(1000))					1, 000
        console.log(FormatNum('1333444.10'))			1, 333, 444.10
        console.log(FormatNum('US$1333400'))			US$1, 333, 400
        console.log(FormatNum('-$22333444.56'))         - $22, 333, 444.56
        console.log(FormatNum('($22333444.56)'))        ($22, 333, 444.56)
        console.log(FormatNum('NEG $22333444.563'))	    NEG $22, 333, 444.563
    */
    /**
    * 参数说明：
    * s：要格式化的数字
    * n：保留几位小数
    * */
    FormatNum(s, n = 2) { //credit http://richard.warburton.it
        n = n >= 0 && n <= 20 ? n : 2;
        s = s * 0.01;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        let t = "";
        for (let i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return t.split("").reverse().join("") + ((r != null)? "." + r : "");
    },

    FormatNo(s, n = 3) {
        s = '' + s;
        return s.length >= n ? s : new Array(n - s.length + 1).join("0") + s;
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
        return "202011050933";
    },
    
    //////////////////////////////////////////////////////////////////////////////
    initSchedule(self)
    {
        if (ScheduleObj != null){
            return
        }

        ScheduleMapTemp = new Map()
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

        return key
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
    ScheduleOnce(callback, delay){
        delay = (delay == null)? 1 : delay
        if(delay == 0 && callback != null){
            callback()
        }
        else{
            this.FixSchedule(callback, delay, 1);
        }
        return ScheduleIndex;
    },

    Schedule(callback, interval, repeat, delay){
        this.FixSchedule(callback, interval, repeat, delay);
        return ScheduleIndex;
    },

    FixSchedule(callback, interval, repeat, delay){
        ScheduleIndex = ScheduleIndex +1
        ScheduleMapTemp.set(ScheduleIndex, callback)
        
        interval = (interval == null) ? 1000 : interval * 1000
        repeat = (repeat == null) ? Number.MAX_SAFE_INTEGER : repeat
        delay = (delay == null)? 0 : delay * 1000
        let startTime = new Date().getTime()
        let recordTime = startTime
        let self = this
        let scheduleCallback = function(){
            let currentTime = new Date().getTime()
            if(currentTime >= (startTime + delay)){
                while (currentTime - recordTime >= interval) {
                    recordTime = recordTime + interval
                    repeat = repeat -1
                    if(callback != null){
                        callback()
                    }
                    if(repeat <= 0){
                        self.Unschedule(callback)
                        ScheduleObj.unschedule(scheduleCallback);
                        return;
                    }
                }
            }
        }
        ScheduleObj.schedule(scheduleCallback, 0);
    },

    Unschedule(keyOrCallback){
		let callback = keyOrCallback
		if(ScheduleMapTemp.has(keyOrCallback) == true){	
			callback = ScheduleMapTemp.get(keyOrCallback)
			ScheduleMapTemp.delete(keyOrCallback)
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
        let count = interval.toString().split(".")[1]
        let number = interval * repeat * Math.pow(10, count)
        return this.Schedule(function(){
            if(callback != null){
                callback(number / Math.pow(10, count))
            }
            number = number - interval * Math.pow(10, count)
            if(number < 0){
                number = 0
            }
        }, interval, repeat +1, 0)
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
    Random(min, max) {
        let de=max - min;
        return min + Math.random() * de;
        //return min + Math.random() * de;
    }, 

    RandomInt(min, max) {
        let de=max - min;
        return Math.floor(min + Math.random() * de);
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
};

module.exports = GameGlobal;
