var SoundManager = require("SoundManager");
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
        return "202010191708";
    },
    
    //////////////////////////////////////////////////////////////////////////////
    initSchedule(self)
    {
        if (ScheduleObj != null){
            return
        }

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

    Random(min, max) {
        let de=max - min;
        return min + Math.random() * de;
        //return min + Math.random() * de;
    }, 

    RandomInt(min, max) {
        let de=max - min;
        return Math.floor(min + Math.random() * de);
    },    
};

module.exports = GameGlobal;
