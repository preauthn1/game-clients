var BClass=require("BClass")
var Common=require("Common")

var networkQueue=require("NetworkQueue");
var GameConfig=require("GameConfig")

var UIManager={

    Init(root) {
        if (this.init == true)
            return

        // 不移除
        cc.game.addPersistRootNode(root);

        this.init=true
        this.root=root;
        this.prefab=cc.find("UIMessage", root)
        this.prefab.active=false;
        this.prefabFull=cc.find("UIMessageFull", root)
        this.prefabFull.active=false;
        this.prefabGameFull=cc.find("UIMessageGameFull", root)
        this.prefabGameFull.active=false;
        this.prefabGameFullBg=cc.find("UIMessageGameFull/BackgroundFull", root)
        this.prefabBox=cc.find("UIMessageBox", root)
        this.prefabBox.active=false;
        this.uiLoading=cc.find("UILoading", root)
        this.uiLoading.active=false;
        this.uiLoadingText=cc.find("UILoading/Text", root).getComponent(cc.Label)
        this.progressBar = cc.find("UILoading/progressBar", root).getComponent(cc.ProgressBar);
        this.progressBar.node.active = false;        

        let self=this

        networkQueue.RegMsgHook(BClass.Common, Common.TipMessageID,
            function(receiveMsg)
            {
                // MsgType 1 房间主动踢出  2 大厅主动踢出 3 普通提示
                // 您的账号在别处登录,您已被强制下线
                if (receiveMsg.MsgType == 2) {
                    var GameManager=require("GameManager");
                    GameManager.closeConnect()

                    UIManager.ShowMessageFull(receiveMsg.Message);
                }
                else if (receiveMsg.MsgType == 1)
                {
                    var GameManager=require("GameManager");
                    GameManager.closeConnect()
                    GameManager.clear()

                    // 切换AB服,断线,指定IP,重新连线
                    if (receiveMsg.Param == 5) {
                        UIManager.ShowMessageFull(receiveMsg.Message);

                        self.ShowMessageBox("是否继续游戏",
                            function () {
                                cc.director.loadScene("GameLoading");
                            },
                            function () {
                                var GameGlobal=require("GameGlobal")
                                GameGlobal.ExitGame()
                            },
                            "继续",
                            "离开游戏"
                        )
                    }
                    else if (receiveMsg.Param == 1) {
                        self.ShowMessageBox(receiveMsg.Message,
                            function () {
                                var GameGlobal=require("GameGlobal")
                                GameGlobal.ExitGame()
                            },
                            function () {

                            },
                            "确定",
                            "",
                            true
                        )
                    }
                    else {
                        UIManager.ShowMessage(receiveMsg.Message);
                    }
                }
                else {
                    UIManager.ShowMessage(receiveMsg.Message);
                }
            }
            , "Base");
    },

    ShowMessage(Message, Time=1) {
        if (Message.length == 0) {
            return
        }

        var GameGlobal=require("GameGlobal")
        Message=GameGlobal.GetLocalizedString(Message)

        let clone=cc.instantiate(this.prefab)
        clone.parent=this.root
        clone.position=cc.v3(0, 0, 0)
        clone.scale=1
        clone.active=true

        let txt=cc.find("Text", clone).getComponent(cc.Label)
        txt.string=Message

        cc.tween(clone)
          .to(Time, { position : cc.v2(0, 100) })
          .call(function () {
              clone.active=false
              clone.destroy()
          })
          .start()
    },

    ShowMessageFull(Message) {
        if (Message.length == 0) {
            return
        }


        var GameGlobal=require("GameGlobal")
        Message=GameGlobal.GetLocalizedString(Message)

        this.prefabFull.active=true

        let txt=cc.find("Text", this.prefabFull).getComponent(cc.Label)
        txt.string=Message
    },

    HideMessageFull() {
        this.prefabFull.active=false
    },

    ShowMessageGameFull(Message, bgAlphaValue=180) {
        if (Message.length == 0) {
            return
        }

        var GameGlobal=require("GameGlobal")
        Message=GameGlobal.GetLocalizedString(Message)

        this.prefabGameFull.active=true
        this.prefabGameFullBg.opacity=bgAlphaValue

        let txt=cc.find("Text", this.prefabGameFull).getComponent(cc.Label)
        txt.string=Message
    },

    HideMessageGameFull() {
        this.prefabGameFull.active=false
    },


    ShowMessageBox(Message, CallbackOK, CallbackCancel, TextOK, TextCancel, OnlyButton=false) {
        if (Message.length == 0) {
            return
        }

        var GameGlobal=require("GameGlobal")
        Message=GameGlobal.GetLocalizedString(Message)

        let clone=cc.instantiate(this.prefabBox)
        clone.parent=this.root
        clone.position=cc.v3(0, 0, 0)
        clone.scale=1
        clone.active=true
        clone.name="MessageBox"

        let txt=cc.find("Text", clone).getComponent(cc.Label)
        txt.string=Message
        let txtOK=cc.find("BtnOK/Text", clone).getComponent(cc.Label)
        txtOK.string=GameGlobal.GetLocalizedString(TextOK)
        let txtCancel=cc.find("BtnCancel/Text", clone).getComponent(cc.Label)
        txtCancel.string=GameGlobal.GetLocalizedString(TextCancel)
        let txtOnly=cc.find("BtnOK/Text", clone).getComponent(cc.Label)
        txtOnly.string=GameGlobal.GetLocalizedString(TextOK)

        let btnOK=cc.find("BtnOK", clone).getComponent(cc.Button)
        btnOK.node.on('click', function () {
            clone.destroy()

            if (CallbackOK) {
                CallbackOK()
            }
        })

        let btnCancel=cc.find("BtnCancel", clone).getComponent(cc.Button)
        btnCancel.node.on('click', function () {
            clone.destroy()

            if (CallbackCancel) {
                CallbackCancel()
            }
        })

        let btnOnly=cc.find("BtnOnly", clone).getComponent(cc.Button)
        btnOnly.node.on('click', function () {
            clone.destroy()

            if (CallbackOK) {
                CallbackOK()
            }
        })

        if (OnlyButton == true) {
            btnOK.node.active=false;
            btnCancel.node.active=false;
            btnOnly.node.active=true;
        }
        else {
            btnOK.node.active=true;
            btnCancel.node.active=true;
            btnOnly.node.active=false;
        }
    },

    ClearMessageBox() {
        var children=this.root.children;
        for (var i=0; i<children.length; ++ i) {
            if (children[i].name == "MessageBox")
                children[i].destroy()
        }
    },

    ShowLoadingBar(visible){
        if (this.progressBar != null)
            this.progressBar.node.active = visible
    },

    SetLoadingBarProgress(value){
        if (this.progressBar != null)
            this.progressBar.progress = value;
    },

    ShowLoading(Message, ShowLoading=true) {
        var GameGlobal=require("GameGlobal")
        this.uiLoadingText.string=GameGlobal.GetLocalizedString(Message);

        this.uiLoading.active=true;
    },

    HideLoading() {
        this.uiLoading.active=false;
    },
};

module.exports=UIManager;