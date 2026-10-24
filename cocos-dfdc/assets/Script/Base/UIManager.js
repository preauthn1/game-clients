var BClass = require("BClass")
var Common = require("Common")
var networkQueue = require("NetworkQueue");
var GameG = null

var UIManager = {

    Init(root){
        if (this.init == true)
            return

        // 不移除
        cc.game.addPersistRootNode(root);

        this.init = true
        this.root = root;
        this.prefab = cc.find("UIMessage", root)
        this.prefab.active = false;
        this.prefabFull = cc.find("UIMessageFull", root)
        this.prefabFull.active = false;
        this.prefabGameFull = cc.find("UIMessageGameFull", root)
        this.prefabGameFull.active = false;
        this.prefabGameFullBg = cc.find("UIMessageGameFull/BackgroundFull", root)
        this.prefabBox = cc.find("UIMessageBox", root)
        this.prefabBox.active = false;
        this.uiLoading = cc.find("UILoading", root)
        this.uiLoading.active = false;
        this.uiLoadingText = cc.find("UILoading/Text", root).getComponent(cc.Label)
        this.progressBar = cc.find("UILoading/progressBar", root).getComponent(cc.ProgressBar);
        this.progressBar.node.active = false;

        GameG = require("GameGlobal")
        networkQueue.RegMsgHook(BClass.Common, Common.TipMessageID, 
            function(receiveMsg)
            {
                // MsgType 1 房间主动踢出  2 大厅主动踢出 3 普通提示
                // 您的账号在别处登录,您已被强制下线
                if (receiveMsg.MsgType == 2){
                    var GameManager = require("GameManager");
                    GameManager.closeConnect()

                    UIManager.ShowMessageFull(receiveMsg.Message);
                }
                else{
                    UIManager.ShowMessage(receiveMsg.Message);
                }
            }
        , "Base");
    },
    
    ShowMessage(Message, Time = 1){
        if (Message.length == 0){
            return
        }        
        
        Message = GameG.GetLocalizedString(Message)

        let clone = cc.instantiate(this.prefab)
        clone.parent = this.root
        clone.position = cc.v3(0,0,0)
        clone.scale = 1
        clone.active = true

        let txt = cc.find("Text", clone).getComponent(cc.Label)
        txt.string = Message

        cc.tween(clone)
        .to(Time, {position: cc.v2(0, 100)})
        .call(function(){
            clone.active = false
            clone.destroy()
		})
        .start()
    },

    ShowMessageFull(Message){
        if (Message.length == 0){
            return
        }        

        Message = GameG.GetLocalizedString(Message)

        this.prefabFull.active = true

        let txt = cc.find("Text", this.prefabFull).getComponent(cc.Label)
        txt.string = Message
    },

    HideMessageFull(){
        this.prefabFull.active = false
    },
    
    ShowMessageGameFull(Message, bgAlphaValue = 180){
        if (Message.length == 0){
            return
        }

        Message = GameG.GetLocalizedString(Message)

        this.prefabGameFull.active = true
        this.prefabGameFullBg.opacity = bgAlphaValue

        let txt = cc.find("Text", this.prefabGameFull).getComponent(cc.Label)
        txt.string = Message
    },

    HideMessageGameFull(){
        this.prefabGameFull.active = false
    },
    

    ShowMessageBox(Message, CallbackOK, CallbackCancel, TextOK, TextCancel){
        if (Message.length == 0){
            return
        }

        Message = GameG.GetLocalizedString(Message)

        let clone = cc.instantiate(this.prefabBox)
        clone.parent = this.root
        clone.position = cc.v3(0,0,0)
        clone.scale = 1
        clone.active = true

        let txt = cc.find("Text", clone).getComponent(cc.Label)
        txt.string = Message
        let txtOK = cc.find("BtnOK/Text", clone).getComponent(cc.Label)
        txtOK.string = TextOK
        let txtCancel = cc.find("BtnCancel/Text", clone).getComponent(cc.Label)
        txtCancel.string = TextCancel

        this.btnOK = cc.find("BtnOK", clone).getComponent(cc.Button)
        this.btnOK.node.on('click', function () {
            clone.destroy()

            if (CallbackOK){
                CallbackOK()
            }
        })

        this.btnCancel = cc.find("BtnCancel", clone).getComponent(cc.Button)
        this.btnCancel.node.on('click', function () {
            clone.destroy()

            if (CallbackCancel){
                CallbackCancel()
            }
        })
    },
    
    ShowLoadingBar(visible){
        if (this.progressBar != null)
            this.progressBar.node.active = visible
    },

    SetLoadingBarProgress(value){
        if (this.progressBar != null)
            this.progressBar.progress = value;
    },

    ShowLoading(Message, ShowLoading = true){
        this.uiLoading.active = true;
        this.uiLoadingText.string = GameG.GetLocalizedString(Message);
    },

    HideLoading(){
        this.uiLoading.active = false;
    }
};

module.exports = UIManager;