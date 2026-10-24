var BClass = require("BClass")
var Common = require("Common")

var networkQueue = require("NetworkQueue");

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
        this.prefabBox = cc.find("UIMessageBox", root)
        this.prefabBox.active = false;
        this.uiLoading = cc.find("UILoading", root)
        this.uiLoading.active = false;
        this.uiLoadingText = cc.find("UILoading/Text", root).getComponent(cc.Label)
        this.InitLoadingAnimation()

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

        this.prefabFull.active = true

        let txt = cc.find("Text", this.prefabFull).getComponent(cc.Label)
        txt.string = Message
    },

    HideMessageFull(){
        this.prefabFull.active = false
    },
    
    ShowMessageBox(Message, CallbackOK, CallbackCancel, TextOK, TextCancel){

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

    InitLoadingAnimation(){

        this.LoadingAni = cc.find("Animation", this.uiLoading)

        this.tween = []

        for (let i = 1; i < 10; i++) {
            let node = cc.find("Animation/sprite_" + i, this.uiLoading)
            node.opacity = 0

            this.tween[i] = cc.tween(node)
            var tween = cc.tween(this.tween)
            .delay(0.2 * i)           
            .to(0.4, {opacity: 255, scale: 1.5})          
            .to(0.4, {opacity: 0, scale: 1})
            .delay(1.8 - (i * 0.2))
            this.tween[i].repeat(9999999999, tween).start()
        }
    },

    ShowLoading(Message, ShowLoading = true){
        this.uiLoading.active = true;
        this.uiLoadingText.string = Message;

        this.LoadingAni.active = ShowLoading
    },

    HideLoading(){
        this.uiLoading.active = false;
    }
};

module.exports = UIManager;