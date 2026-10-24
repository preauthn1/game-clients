var FileManager = require("FileManager");

var isInit = false;

var SoundManager = {

    Init()
    {
        if (isInit == false)
        {
            console.log("SoundManager Init");

            isInit = true;
            this.loopAudioDic = new Map();
            this.playLoopAudioNameDic = new Map();

            SoundManager.UpdateSound();
            SoundManager.UpdateMusic();
        }
    },

    UpdateSound()
    {
        if (SoundManager.GetSound() == false)
            cc.audioEngine.setEffectsVolume(0.0);
        else
            cc.audioEngine.setEffectsVolume(1.0);
    },
    
    SetSound(value)
    {
        let IsSoundOn;
        if (value == false)
            IsSoundOn = 0;
        else
            cc.audioEngine.setEffectsVolume(1.0);

        cc.sys.localStorage.setItem('IsSoundOn', IsSoundOn);
        window.IsSoundOn = IsSoundOn
		
		SoundManager.UpdateSound();
    },

    GetSound()
    {
        var IsSoundOn = cc.sys.localStorage.getItem('IsSoundOn');
        if (IsSoundOn == null){
            if (window.IsSoundOn != null){
                IsSoundOn = window.IsSoundOn
            }
        }

        if (IsSoundOn == null)
        {
            return true;
        }
        else
        {
            if (IsSoundOn == 0)
                return false;
            else
                return true;
        }
    },

    UpdateMusic()
    {
        if (SoundManager.GetMusic() == false)
            cc.audioEngine.setMusicVolume(0.0);
        else
            cc.audioEngine.setMusicVolume(1.0);
    },

    SetMusic(value)
    {
        let IsMusicOn;
        if (value == false)
            IsMusicOn = 0;
        else
            IsMusicOn = 1;
        
        cc.sys.localStorage.setItem('IsMusicOn', IsMusicOn);
        window.IsMusicOn = IsMusicOn
		
		SoundManager.UpdateMusic();
    },

    GetMusic()
    {
        var IsMusicOn = cc.sys.localStorage.getItem('IsMusicOn');
        if (IsMusicOn == null){
            if (window.IsMusicOn != null){
                IsMusicOn = window.IsMusicOn
            }
        }

        if (IsMusicOn == null)
        {
            return true;
        }
        else
        {
            if (IsMusicOn == 0)
                return false;
            else
                return true;
        }
    },

    PlayBGM(isGame, audioClipName)
    {
        if(this.currentBGM == audioClipName){
            return
        }
		let self = this
		this.currentBGM = audioClipName
        SoundManager.LoadAudioClip(isGame, audioClipName, (audioClip) =>
        {
			if(self.currentBGM == audioClipName){
                cc.audioEngine.playMusic(audioClip, true, 1);
            }
        });
    },

    CloseBGMSound()
    {
        cc.audioEngine.stopMusic();
    },

    PlaySound(isGame, audioClipName, isLoop)
    {
        if (isLoop == true){
            if (this.playLoopAudioNameDic.get(audioClipName) == undefined){
                this.playLoopAudioNameDic.set(audioClipName, audioClipName);
            }
        }

        SoundManager.LoadAudioClip(isGame, audioClipName, (audioClip) =>
        {
            if (isLoop == true)
            {
                // 載入的過程中沒被移除
                if (this.playLoopAudioNameDic.get(audioClipName) != undefined){
                    // 避免重複播放同一個loop聲音
                    if (this.loopAudioDic.get(audioClipName) == undefined){
                        let number = cc.audioEngine.playEffect(audioClip, true, 1);
                        this.loopAudioDic.set(audioClipName, number);
                    }
                }
            }
            else
            {
                cc.audioEngine.playEffect(audioClip, false, 1);
            }
        });
    },

    CloseLoopSound(audioClipName)
    {
        if (this.loopAudioDic.get(audioClipName) != undefined)
        {
            let number = this.loopAudioDic.get(audioClipName);
            cc.audioEngine.stop(number);
            this.loopAudioDic.delete(audioClipName);
        }

        if (this.playLoopAudioNameDic.get(audioClipName) != undefined){
            this.playLoopAudioNameDic.delete(audioClipName);
        }        
    },

    CloseSound()
    {
        this.loopAudioDic.forEach(function (value, key) {
            cc.audioEngine.stop(value);
        })
        this.loopAudioDic.clear();

        cc.audioEngine.uncacheAll();        
    },

    LoadAudioClip(isGame, audioClipName, callBack)
    {
        FileManager.LoadFile(isGame, "Audio", audioClipName, cc.AudioClip,(err, audioClip)=> {
            if (err) {
                return;
            }
            
            if (callBack)
                callBack(audioClip);
        });
    },
};

module.exports = SoundManager;
