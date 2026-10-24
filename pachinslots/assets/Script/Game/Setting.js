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

    start () {
        this.root = cc.find("Canvas/Top/Setting")

        let self = this

        let btn_Lock = cc.find("Lock", this.root)
        btn_Lock.on('click',function(){
            UIManager.ShowMessageBox(
                "是否保留機台座位?\n按下確認候機台將保留60分鐘",
                function(){

                }, 
                function(){

                },
                "確定",
                "取消"
            )
        })

        let SettingPanel = cc.find("SettingPanel", this.root)
        SettingPanel.active = false

        let btn_Setting = cc.find("Setting", this.root)
        btn_Setting.on('click',function(){
            SettingPanel.active = true

            self.updateSound()
        })

        let btn_Close = cc.find("Mask", SettingPanel)
        btn_Close.on('click',function(){
            SettingPanel.active = false
        })

        
        this.btn_SoundOn = cc.find("Item/Sound/SoundOn", SettingPanel).getComponent(cc.Button)
        this.btn_SoundOn.node.on('click',function(){
            GameG.OpenMusicAndSound()
            self.updateSound()
        })

        this.btn_SoundOff = cc.find("Item/Sound/SoundOff", SettingPanel).getComponent(cc.Button)
        this.btn_SoundOff.node.on('click',function(){
            GameG.CloseMusicAndSound()
            self.updateSound()
        })

        // 虛寶卡
        let UIVCard = cc.find("Canvas/UIVCard").getComponent("UIVCard")
        UIVCard.Init()
        let btn_VCard = cc.find("Item/VCard/Button", SettingPanel)
        btn_VCard.on('click',function(){
            UIVCard.show()
        })

        // 幫助
        let UIHelp = cc.find("Canvas/UIHelp").getComponent("UIHelp")
        UIHelp.Init()
        let btn_Help = cc.find("Item/Help/Button", SettingPanel)
        btn_Help.on('click',function(){
            UIHelp.show()
        })

        // 機台資訊
        let UIMachineInfo = cc.find("Canvas/UIMachineInfo").getComponent("UIMachineInfo")
        UIMachineInfo.Init()
        let btn_MachineInfo = cc.find("Item/MachineInfo/Button", SettingPanel)
        btn_MachineInfo.on('click',function(){
            let roomId = GameConfig.getRoomId() 
            UIMachineInfo.showUI(roomId)
        })

        // 外贈說明
        let UIGiftDescription = cc.find("Canvas/UIGiftDescription").getComponent("UIGiftDescription")
        UIGiftDescription.Init()
        let btn_GiftDescription = cc.find("Item/GiftDescription/Button", SettingPanel)
        btn_GiftDescription.on('click',function(){
            UIGiftDescription.showUI(0, 2222)
        })

        // 離開
        let btn_Exit = cc.find("Item/Exit/Button", SettingPanel)
        btn_Exit.on('click',function(){
            //window.close()
            
            let GameManager = require("GameManager")
            GameManager.leaveGame();
            cc.director.loadScene("GameMachine");
        })

        // 獲得外贈
        this.UIGift = cc.find("Canvas/UIGift").getComponent("UIGift")
        this.UIGift.Init()

        this.setItemActive(this.Sound)
        this.setItemActive(this.VCard)
        this.setItemActive(this.Help)
        this.setItemActive(this.MachineInfo)
        this.setItemActive(this.GiftDescription)
        this.setItemActive(this.Exit)


        let label_version = cc.find("Canvas/Top/Setting/SettingPanel/version").getComponent(cc.Label)
        label_version.string = GameG.GetGameVersion()
    },

    setItemActive(item){
        if (item.obj != null){
            item.obj.active = item.isShow
        }
    },

    updateSound(){
        let soundStatus = GameG.GetSoundStatus()
        if (soundStatus == true){
            this.btn_SoundOn.interactable = false
            this.btn_SoundOff.interactable = true
        }
        else{
            this.btn_SoundOn.interactable = true
            this.btn_SoundOff.interactable = false
        }
    },
});
