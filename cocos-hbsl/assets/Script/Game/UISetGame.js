var SoundManager = require("SoundManager");

var UISetGame = {
    
    Init(root){
        UISetGame.root = root

        this.btn_shade = cc.find("shade", this.root).getComponent(cc.Button)
        this.btn_shade.node.on('click', UISetGame.Hide, this)

        this.btn_close = cc.find("close", this.root).getComponent(cc.Button)
        this.btn_close.node.on('click', UISetGame.Hide, this)

        this.btn_music = cc.find("sound/music", this.root).getComponent(cc.Button)
        this.btn_music.node.on('click', function(){
            UISetGame.music_state = !UISetGame.music_state
            SoundManager.SetMusic(UISetGame.music_state)
            UISetGame.event_music()
        }, this)

        this.btn_sound = cc.find("sound/musicef", this.root).getComponent(cc.Button)
        this.btn_sound.node.on('click', function(){
            UISetGame.sound_state = !UISetGame.sound_state
            SoundManager.SetSound(UISetGame.sound_state)
            UISetGame.event_sound()
        }, this)

        this.music_state = SoundManager.GetMusic()
        this.music_on = cc.find("on", this.btn_music.node)
        this.music_off = cc.find("off", this.btn_music.node)
    
        this.sound_state = SoundManager.GetSound()
        this.sound_on = cc.find("on", this.btn_sound.node)
        this.sound_off = cc.find("off", this.btn_sound.node)
    
        let txt_version = cc.find("version", this.root).getComponent(cc.Label)
        txt_version.string = ""
        //txt_version.string = "V.11111"

        UISetGame.event_music()
        UISetGame.event_sound()
        
		this.root.active = false
    },

    Show(){
        this.root.active = true
    },

    Hide(){
        this.root.active = false
    },

    event_music(){
        if (this.music_state == true) {
            this.music_on.active = true
            this.music_off.active = false
        }
        else {
            this.music_on.active = false
            this.music_off.active = true
        }
    },

    event_sound(){
        if (this.sound_state == true) {
            this.sound_on.active = true
            this.sound_off.active = false
        }
        else {
            this.sound_on.active = false
            this.sound_off.active = true
        }
    },
};

module.exports = UISetGame;