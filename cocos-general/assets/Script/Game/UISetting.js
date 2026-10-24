var GameG = require("GameGlobal")
var UIManager = require("UIManager")
var GameConfig = require("GameConfig")

var SettingItem = cc.Class({    
    name : "SettingItem",

    properties: {
        obj: {
            default: null, 
            type: cc.Node,
        },

        btn: {
            default: null, 
            type: cc.Button,
        },

        isShow: true,
    },    
})

cc.Class({
    extends: cc.Component,

    properties: {
        Sound: {
            default: null, 
            type: SettingItem,
        },
        VCard: {
            default: null, 
            type: SettingItem,
        },
        Help: {
            default: null, 
            type: SettingItem,
        },
        MachineInfo: {
            default: null, 
            type: SettingItem,
        },
        GiftDescription: {
            default: null, 
            type: SettingItem,
        },
        Exit: {
            default: null, 
            type: SettingItem,
        },
    },

    ctor() {
        this.Sound = new SettingItem();
        this.VCard = new SettingItem();
        this.Help = new SettingItem();
        this.MachineInfo = new SettingItem();
        this.GiftDescription = new SettingItem();
        this.Exit = new SettingItem();
    },    

    onLoad () {
        this.GameSound = cc.find("Canvas/GameSound").getComponent("GameSound")

        let self = this

        // 保留座位
        this.keepSeatUI = cc.find("KeepSeatUI", this.node)
        
        let btnKeepSeatUINask = cc.find("mask", this.keepSeatUI)
        btnKeepSeatUINask.on('click',function(){
            self.GameSound.playButton()
            self.keepSeatUI.active = false
        })

        this.btnKeepCancel = cc.find("cancel", this.keepSeatUI)
        this.btnKeepCancel.on('click',function(){
            self.GameSound.playButton()
            self.keepSeatUI.active = false
        })
        this.btnKeepOk = cc.find("ok", this.keepSeatUI)
        this.btnKeepOk.on('click',function(){
            self.GameSound.playButton()
            self.keepSeatUI.active = false
        })

        this.btnLock = cc.find("btn_lock", this.node).getComponent(cc.Button)
        this.btnLock.node.on('click',function(){
            self.GameSound.playButton()
            self.keepSeatUI.active = true
        })
        
        // 設定介面
        let SettingPanel = cc.find("SettingPanel", this.node)
        SettingPanel.active = false

        this.btnSetting = cc.find("btn_setting", this.node).getComponent(cc.Button)
        this.btnSetting.node.on('click',function(){
            self.GameSound.playButton()
            SettingPanel.active = true

            self.UpdateSound(999)
        })

        let btnClose = cc.find("Mask", SettingPanel)
        btnClose.on('click',function(){
            self.GameSound.playButton()
            SettingPanel.active = false
        })

        // 聲音
        this.SoundBtnAni = cc.find("Item/Sound/Sound", SettingPanel).getComponent(cc.Animation)
        
        this.btnSoundOn = cc.find("Item/Sound/SoundOn", SettingPanel).getComponent(cc.Button)
        this.btnSoundOn.node.on('click',function(){
            GameG.OpenMusicAndSound()
            self.UpdateSound(0)
        })

        this.btnSoundOff = cc.find("Item/Sound/SoundOff", SettingPanel).getComponent(cc.Button)
        this.btnSoundOff.node.on('click',function(){
            GameG.CloseMusicAndSound()
            self.UpdateSound(0)
        })

        // 虛寶卡
        let UIVCard = cc.find("Canvas/UIVCard").getComponent("UIVCard")
        UIVCard.Init()
        if (this.VCard != null && this.VCard.btn != null){
            this.VCard.btn.node.on('click',function(){
                self.GameSound.playButton()
                UIVCard.show()
            })
        }

        // 幫助
        let UIHelp = cc.find("Canvas/UIHelp").getComponent("UIHelp")
        UIHelp.Init()
        if (this.Help != null && this.Help.btn != null){
            this.Help.btn.node.on('click',function(){
                self.GameSound.playButton()
                UIHelp.show()
            })
        }

        // 機台資訊
        let UIMachineInfo = cc.find("Canvas/UIMachineInfo").getComponent("UIMachineInfo")
        UIMachineInfo.Init()
        if (this.MachineInfo != null && this.MachineInfo.btn != null){
            this.MachineInfo.btn.node.on('click',function(){
                self.GameSound.playButton()
                let roomId = GameConfig.getRoomId() 
                UIMachineInfo.showUI(roomId)
            })
        }

        // 外贈說明
        let UIGiftDescription = cc.find("Canvas/UIGiftDescription").getComponent("UIGiftDescription")
        UIGiftDescription.Init()
        if (this.GiftDescription != null && this.GiftDescription.btn != null){
            this.GiftDescription.btn.node.on('click',function(){
                self.GameSound.playButton()
                UIGiftDescription.ShowUI(0, 2222)
            })
        }

        // 離開
        if (this.Exit != null && this.Exit.btn != null){
            this.Exit.btn.node.on('click',function(){
                //window.close()
                self.GameSound.playButton()
                
                let GameManager = require("GameManager")
                GameManager.leaveGame();
                cc.director.loadScene("GameMachine");
            })
        }

        // 獲得外贈
        this.UIGift = cc.find("Canvas/UIGift").getComponent("UIGift")
        this.UIGift.Init()

        // 版號
        let labelVersion = cc.find("version", SettingPanel).getComponent(cc.Label)
        labelVersion.string = GameG.GetGameVersion()

        this.lastItem = null

        this.SetItemActive(this.Sound)
        this.SetItemActive(this.VCard)
        this.SetItemActive(this.Help)
        this.SetItemActive(this.MachineInfo)
        this.SetItemActive(this.GiftDescription)
        this.SetItemActive(this.Exit)

        if (this.lastItem != null){
            let line = cc.find("line", this.lastItem.obj)
            line.active = false
        }
    },

    SetEnable(enabled){
        this.btnLock.interactable = enabled
        this.btnSetting.interactable = enabled
    },

    SetItemActive(item){
        if (item.obj != null){
            item.obj.active = item.isShow
        }

        if (item.isShow == true){
            this.lastItem = item
        }
    },

    UpdateSound(time){
        let soundStatus = GameG.GetSoundStatus()
        if (soundStatus == true){
            this.btnSoundOn.node.active = false
            this.btnSoundOff.node.active = true
            this.SoundBtnAni.play(this.SoundBtnAni.getClips()[1].name, time)
        }
        else{
            this.btnSoundOn.node.active = true
            this.btnSoundOff.node.active = false
            this.SoundBtnAni.play(this.SoundBtnAni.getClips()[0].name, time)
        }
    },
});
