
var hallSelf = null

cc.Class({
    extends: cc.Component,

    properties: {
        canvas : cc.Canvas,
        backgroundA : cc.Node,
        backgroundL : cc.Node,
        roomPrefab : cc.Node,
        roomAttach : cc.Node,
        roomLayout : cc.Layout,
        maskWidget : cc.Widget,
    },

    start () {
        hallSelf = this

        this.i18n = require('LanguageData');

        var pathName = window.document.location.pathname;
        var dir = pathName.split('/')
        var lang = dir[dir.length - 2]
        if (lang != null && lang != ""){
            this.i18n.init(lang);
            console.log("lang", lang)
        }
        else{
            console.log("lang error", pathName)
        }
        
        let urlData = window.location.search.substring(1);
        // if (urlData == null || urlData == ""){        
        //     this.i18n.init("EN-US");
        //     urlData = "gameID=2004&token=[REDACTED]"
        // }

        // this.parseData(urlData)
        this.parseDataNew(urlData)

        this.updateCanvasSize();
        cc.view.setResizeCallback(() => {
            this.updateCanvasSize();
        })

        let self = this
        cc.game.on(cc.game.EVENT_HIDE, function(){
            console.log("进入后台");
        },this);
        
        cc.game.on(cc.game.EVENT_SHOW, function(){
            console.log("重新返回");
            self.parseDataNew(urlData)
        },this);        
    },

    parseDataNew(urlData){
        if (urlData == null || urlData == ""){
            console.log("json error")
            this.showMessage("资料错误", true)
            return
        }
        urlData = urlData.split('&nsukey=')[0]

        urlData = "?" + urlData

        let getQueryString = function(url, name){
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = url.substring(1).match(reg);
            if(r!=null){
                return  decodeURI(r[2]);
            }
            else{
                return null;
            }
        }

        this.gameID = getQueryString(urlData, "gameID")
        if (this.gameID == null){
            console.log("gameID error")
            this.showMessage("游戏资讯错误", true)
            return
        }

        this.access_token = [REDACTED], "token")
        if (this.access_token == null){
            console.log("token error")
            this.showMessage("游戏资料错误", true)
            return
        }

        this.getRoomData()
    },

    parseData(urlData){
        if (urlData == null || urlData == ""){
            console.log("json error")
            this.showMessage("资料错误", true)
            return
        }
        urlData = urlData.split('&nsukey=')[0]

        let urlDatas = urlData.split('/')
        if (urlDatas.length > 1){
            urlData = urlDatas[urlDatas.length - 1]
            urlData = urlData.substring(1);
        }

        urlData = window.atob(urlData)

        let datas = JSON.parse(urlData)
        if (datas == null){
            console.log("json error")
            this.showMessage("资料错误", true)
            return
        }

        this.gameID = datas.data.gameID;
        if (this.gameID == null){
            console.log("gameID error")
            this.showMessage("游戏资讯错误", true)
            return
        }

        this.access_token = [REDACTED];
        if (this.access_token == null){
            console.log("token error")
            this.showMessage("游戏资料错误", true)
            return
        }

        this.getRoomData()
    },

    getRoomData(){
        let timestamp = Math.floor(Date.now() / 1000);
        var beforeMD5 = "gameid=" + this.gameID + "&ts=" + timestamp
        var signKey = md5(beforeMD5);

        // console.error("gameID", this.gameID)
        // console.error("Ts", timestamp)
        // console.error("signKey", signKey)
        // console.error("access_token", this.access_token)

        let params = {}
        params.gameID = this.gameID
        params.Ts = timestamp
        
        let url = window.room
        // url = "http://example.invalid/v1/player/game-rooms"
        // url = "http://example.invalid/v1/player/game-rooms"
        // url = "https://example.invalid/v1/player/game-rooms"
        if (url == null){
            this.showMessage("Api url error", true)
        }
        else{
            this.callApi(url, params, this.access_token, signKey, this.showRooms)
        }
    },
    
    params(obj) {
        var str = "";
        for (var key in obj) {
            if (str != "") {
                str += "&";
            }
            str += key + "=" + encodeURIComponent(obj[key]);
        }
        return str
    },

    callApi(url, params, access_token, signKey, callback) {
        let self = this

        url = url + "?" + this.params(params)

        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
                'access_token': access_token,
                'X-SignKey': signKey,
            },
        }).then(function (res) {
            if (res.status>=200 && res.status<300) {
                return res.json()
            } else {
                console.log(res)
                self.showMessage("区厅失败", false)
                var error=new Error(res.statusText);
                throw error
            }
        }).then((jsonData) => {
            callback(jsonData.data)
        // }).then(callback).catch(function (error) {
        //     if (error)
        //         console.error("error =", error);
        //     return ""
        }).then(function (errorData) {
            if (errorData) {
                console.error("errorData =", errorData);
            }
        });
    },

    showRooms(data){
        //console.error("data", data)

        let roomPrefab = cc.find("Canvas/RoomUI/RoomPrefab")
        let roomAttach = cc.find("Canvas/RoomUI/Room/Mask/Content")

        var children = roomAttach.children;
        for (var i = 0; i < children.length; ++i) {
            children[i].destroy()
        }

        let gameRoomA = cc.find("Canvas/BackgroundA/Logo/label_GameName").getComponent(cc.Label)
        let gameRoomL = cc.find("Canvas/BackgroundL/Logo/label_GameName").getComponent(cc.Label)
        let gameName = hallSelf.GetLocalizedString(data.gameName)
        gameRoomA.string = gameName
        gameRoomL.string = gameName

        for (var k in data.servers){
            let roomData = data.servers[k]
    
            let clone = cc.instantiate(roomPrefab)
            clone.active = true
            clone.parent = roomAttach
    
            let gameNameText = cc.find("label_RoomName", clone).getComponent(cc.Label)
            gameNameText.string = hallSelf.GetLocalizedString(roomData.roomLevelName)
    
            let minAvailableMoneyText = cc.find("label_MinAvailableMoney", clone).getComponent(cc.Label)
            let text = hallSelf.GetLocalizedString("進場") + " : " + roomData.minAvailableMoney// + " / " + hallSelf.GetLocalizedString("免費")
            minAvailableMoneyText.string = text
    
            let btn = cc.find("button_GO", clone).getComponent(cc.Button)
            btn.node.on("click", function(){
                if (data.balanceAmount != null){
                    if (data.balanceAmount < roomData.minAvailableMoney){
                        hallSelf.showMessage1("携带金额不足")
                        return
                    }
                }
                else{
                    console.error("balanceAmount is null")
                }
                
                window.location.href = roomData.url;
            })
        }
    },

    showMessage(message, isClose){
        let self = this
        if (this.MessageUI == null){
            this.MessageUI = cc.find("Canvas/Message")

            this.btnOK = cc.find("button_OK", this.MessageUI).getComponent(cc.Button)
            this.btnOK.node.on('click', function () {
                self.MessageUI.active = false
                self.getRoomData()
            })

            this.btnCancel = cc.find("button_Cancel", this.MessageUI).getComponent(cc.Button)
            this.btnCancel.node.on('click', function () {
                window.close();
            })

            this.btnClose = cc.find("button_Close", this.MessageUI).getComponent(cc.Button)
            this.btnClose.node.on('click', function () {
                window.close();
            })

            this.btnClose1 = cc.find("button_Close1", this.MessageUI).getComponent(cc.Button)
            this.btnClose1.node.on('click', function () {
                window.close();
            })
        }
        this.MessageUI.active = true

        let txt = cc.find("label_message", this.MessageUI).getComponent(cc.Label)
        txt.string = this.GetLocalizedString(message)

        if (isClose == false){
            this.btnOK.node.active = true
            this.btnCancel.node.active = true
            this.btnClose.node.active = false
        }
        else{
            this.btnOK.node.active = false
            this.btnCancel.node.active = false
            this.btnClose.node.active = true
        }
    },

    showMessage1(Message, Time = 1){
        if (this.MessageUI1 == null){
            this.MessageUI1 = cc.find("Canvas/Message1")
            this.MessageUI1.active=false;
        }


        Message = this.GetLocalizedString(Message)

        let clone = cc.instantiate(this.MessageUI1)
        clone.parent = this.MessageUI1.parent
        clone.position = cc.v3(0, 0, 0)
        clone.scale = 1
        clone.active = true

        let txt = cc.find("Text", clone).getComponent(cc.Label)
        txt.string = Message

        cc.tween(clone)
          .to(Time, { position : cc.v2(0, 100) })
          .call(function () {
              clone.active=false
              clone.destroy()
          })
          .start()        
    },

    GetLocalizedString(dataID){
        if (dataID == "")
            return dataID;
        
        if (this.i18n == null)
            return dataID;
        
        let getStr = this.i18n.t("label_text." + dataID);
        if (getStr == null){
            console.error("getStr is null")
            return
        }
        if(getStr.includes("label_text."))
        {
            return dataID;
        }
        return getStr;
        // return i18n.t("label_text." + dataID)
    },

    updateCanvasSize() {
        let size = cc.view.getFrameSize();
        if (size.width > size.height) {
            this.canvas.fitWidth = false;
            this.canvas.fitHeight = true;
            this.canvas.designResolution = cc.size(1334, 750);

            this.backgroundA.active = false
            this.backgroundL.active = true

            example.invalid = 20
        } else {
            this.canvas.fitWidth = true;
            this.canvas.fitHeight = false;
            this.canvas.designResolution = cc.size(750, 1334);

            this.backgroundA.active = true
            this.backgroundL.active = false       

            example.invalid = 134
        }
    },

    update(){
        // 置中房間
        if (this.preWidth != this.node.width){
            this.preWidth = this.node.width

            let count = Math.floor(this.node.width / (this.roomPrefab.width + this.roomLayout.spacingX))
            let wdith = this.roomPrefab.width + (this.roomPrefab.width + this.roomLayout.spacingX) * (count - 1)
            var paddingLeft = (this.node.width - wdith) * 0.5
            this.roomLayout.paddingLeft = paddingLeft
        }
    },
});
