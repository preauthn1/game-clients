var GameG = require( "GameGlobal")
var GameConfig = require("GameConfig")

cc.Class({
    extends: cc.Component,

    start () {
        this.label_gameName = cc.find("Canvas/UI/name").getComponent(cc.Label)

        this.machineItem = cc.find("Canvas/UI/machine/item")
        this.machinePool = []
        for (let i = 0; i < 12; ++i){
            let data = {}
            var clone = cc.instantiate(this.machineItem);
            clone.parent = this.machineItem.parent
            clone.active = false

            data.obj = clone
            data.label_Id = cc.find("label_Id", clone).getComponent(cc.Label)
            data.btn_normal = cc.find("btn_normal", clone).getComponent(cc.Button)
            data.btn_notLock = cc.find("btn_notLock", clone).getComponent(cc.Button)
            data.btn_lock = cc.find("btn_lock", clone).getComponent(cc.Button)
            this.machinePool.push(data)
        }
        this.machineItem.active = false

        this.typeItem = cc.find("Canvas/UI/type/item")

        this.init()
    },

    init(){
        this.label_gameName.string = "將軍"

        let typeData = []
        let data = {}
        data.type = 0
        data.name = "全部"
        typeData.push(data)

        data = {}
        data.type = 1
        data.name = "50:1"
        typeData.push(data)
        
        data = {}
        data.type = 2
        data.name = "100:1"
        typeData.push(data)

        this.typeData = typeData

        let machineData = []
        for (let i = 0; i < 10; ++ i){
            let obj = {}
            obj.id = 10001 + i
            obj.state = GameG.RandomInt(0, 3)
            obj.type = GameG.RandomInt(1, 3)
            machineData.push(obj)
        }

        this.machineData = machineData

        this.showTypeButton()

        this.showByType(0)
    },

    showTypeButton(){
        for (let i = 0; i < this.typeData.length; ++i){
            let data = this.typeData[i]
            var clone = cc.instantiate(this.typeItem);
            clone.parent = this.typeItem.parent

            let label = cc.find("Background/Label", clone).getComponent(cc.Label)
            label.string = data.name

            let self = this     
            let btn = clone.getComponent(cc.Button)
            btn.node.on('click',function(){
                self.showByType(data.type)
            })
        }

        this.typeItem.active = false
    },

    clearAll(){
        for (let i = 0; i < this.machinePool.length; ++i){
            let data = this.machinePool[i]
            data.obj.active = false

            data.btn_normal.node.active = false
            data.btn_normal.node.targetOff()

            data.btn_notLock.node.active = false
            data.btn_notLock.node.targetOff()

            data.btn_lock.node.active = false
            data.btn_lock.node.targetOff()
        }
    },

    showByType(type)
    {
        this.clearAll()

        let accIndex = 0

        for (let obj in this.machineData){
            let data = this.machineData[obj]
            let isShow = false
            if (type == 0){
                isShow = true
            }
            else if (data.type == type){
                isShow = true
            }

            if (isShow == true){
                let item = this.machinePool[accIndex]
                item.obj.active = true

                item.label_Id.string = data.id.toString()

                if (data.state == 0){
                    item.btn_normal.node.active = true
                    item.btn_normal.node.on('click',function(){
                        /*
                        // 直接替換掉登入資訊 不需要重新載入遊戲
                        GameConfig.saveUserID(data.playerID)
                        GameConfig.saveCer(data.access_Token)
                        
                        if (GameConfig.saveConnectIP() == null){
                            if (window.location.href.indexOf("https://") != -1)
                                GameConfig.saveConnectIP("wss://" + data.serverConnection)
                            else
                                GameConfig.saveConnectIP("ws://" + data.serverConnection)
                        }
                        */

                        cc.director.loadScene("GameLoading");
                    })
                }
                else if (data.state == 1){
                    item.btn_notLock.node.active = true
                }
                else if (data.state == 2){
                    item.btn_lock.node.active = true
                }                  

                accIndex += 1
            }     
        }
    }
});
