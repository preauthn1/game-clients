var GameG = require("GameGlobal")

let gameName = "將軍"
var roomTypeName = [
    "",
    "[鑽石廳]",
    "[白金廳]",
    "[一般廳]",
]

cc.Class({
    extends: cc.Component,

    onLoad () {
        this.labelGameName = cc.find("Canvas/UI/name").getComponent(cc.Label)

        this.machineItem = cc.find("Canvas/UI/machine/item")
        this.machinePool = []
        for (let i = 0; i < 12; ++i){
            let data = {}
            var clone = cc.instantiate(this.machineItem);
            clone.parent = this.machineItem.parent
            clone.active = false

            data.obj = clone
            data.labelId = cc.find("label_Id", clone).getComponent(cc.Label)
            data.btnNormal = cc.find("btn_normal", clone).getComponent(cc.Button)
            data.btnUnLock = cc.find("btn_notLock", clone).getComponent(cc.Button)
            data.btnLock = cc.find("btn_lock", clone).getComponent(cc.Button)
            this.machinePool.push(data)
        }
        this.machineItem.active = false

        this.btnBack = cc.find("Canvas/UI/btn_back").getComponent(cc.Button)
        this.btnBack.node.on('click',function(){
            cc.director.loadScene("GameLoading");
        })

        this.typeItem = cc.find("Canvas/UI/type/item")

        let self = this

        let info = cc.find("Canvas/UI/info")

        this.btnLeft = cc.find("btn_left", info).getComponent(cc.Button)
        this.btnLeft.node.on('click',function(){
            self.selectIndex -= 1
            self.UpdateInfo()
        })

        this.btnRight = cc.find("btn_right", info).getComponent(cc.Button)
        this.btnRight.node.on('click',function(){
            self.selectIndex += 1
            self.UpdateInfo()
        })        

        this.labalId = cc.find("label_id", info).getComponent(cc.Label)

        this.UICounter = cc.find("UICounter", info).getComponent("UICounter")
        this.UICounter.Init()     

        this.UIInfo = cc.find("Canvas/UI/info/UIInfo")
        this.UIInfo.active = false        

        this.btnCounter = cc.find("btn_counter", info).getComponent(cc.Button)
        this.btnCounter.node.on('click',function(){
            self.UICounter.Show()
            self.UIInfo.active = false
        })

        this.btnInfo = cc.find("btn_info", info).getComponent(cc.Button)
        this.btnInfo.node.on('click',function(){
            self.UICounter.Hide()
            self.UIInfo.active = true
        })

        this.Init()
    },

    Init(){
        let newRoomData = function(room, type, ratio, pieces){
            let data = {}
            data.room = room
            data.type = type
            data.ratio = ratio
            data.pieces = pieces
            return data
        }

        let typeData = []
        typeData.push(newRoomData(0, 0, 0, 0))
        typeData.push(newRoomData(1, 1, 100, 15))
        typeData.push(newRoomData(2, 2, 100, 9))
        typeData.push(newRoomData(3, 2, 100, 6))
        typeData.push(newRoomData(4, 2, 100, 3))
        typeData.push(newRoomData(5, 3, 50, 3))

        this.typeData = typeData

        let machineData = []
        for (let i = 0; i < 100; ++ i){
            let obj = {}
            obj.id = 10001 + i
            obj.state = GameG.RandomInt(0, 3)
            obj.room = GameG.RandomInt(1, 6)

            obj.counter = {}            
            obj.counter.bb = GameG.RandomInt(20, 50)
            obj.counter.rb = GameG.RandomInt(20, 50)
            obj.counter.at = GameG.RandomInt(20, 50)
            obj.counter.total = GameG.RandomInt(50, 100)
            obj.counter.data = []

            for (let i = 0; i < 10; ++i){
                let bb = {}
                bb.type = GameG.RandomInt(0, 3)
                bb.value = 1
                obj.counter.data.push(bb)
            }
            
            machineData.push(obj)
        }

        this.machineData = machineData

        this.ShowTypeButton()

        this.ShowByRoom(0)
    },

    ShowTypeButton(){
        for (let i = 0; i < this.typeData.length; ++i){
            let data = this.typeData[i]
            var clone = cc.instantiate(this.typeItem);
            clone.parent = this.typeItem.parent

            let labelAll = cc.find("Background/label_all", clone).getComponent(cc.Label)
            let labelRatio = cc.find("Background/label_ratio", clone).getComponent(cc.Label)
            let labelPieces = cc.find("Background/label_pieces", clone).getComponent(cc.Label)

            if (data.type == 0){
                labelAll.string = "全部"
                labelAll.node.active = true
                labelRatio.node.active = false
                labelPieces.node.active = false
            }
            else{
                labelRatio.string = data.ratio.toString() + ":1"
                labelPieces.string = "一轉" + data.pieces.toString() + "枚"
                labelAll.node.active = false
                labelRatio.node.active = true
                labelPieces.node.active = true
            }

            let self = this     
            let btn = clone.getComponent(cc.Button)
            btn.node.on('click',function(){
                self.ShowByRoom(i)
            })
        }

        this.typeItem.active = false
    },

    ClearAll(){
        for (let i = 0; i < this.machinePool.length; ++i){
            let data = this.machinePool[i]
            data.obj.active = false

            data.btnNormal.node.active = false
            data.btnNormal.node.targetOff()

            data.btnUnLock.node.active = false
            data.btnUnLock.node.targetOff()

            data.btnLock.node.active = false
            data.btnLock.node.targetOff()
        }
    },
    
    GetDataByRoom(room){
        let dataList = []
        let accIndex = 0
        for (let obj in this.machineData){
            let data = this.machineData[obj]
            let isShow = false
            if (room == 0){
                isShow = true
            }
            else if (data.room == room){
                isShow = true
            }

            if (isShow == true){
                dataList.push(data)

                accIndex += 1
                if (accIndex == this.machinePool.length){
                    return dataList
                }
            }
        }
        return null
    },

    ShowByRoom(room)
    {
        this.ClearAll()

        this.room = this.typeData[room]
        this.selectData = this.GetDataByRoom(room)
        this.selectIndex = 0

        let accIndex = 0

        for (let obj in this.selectData){
            let data = this.selectData[obj]
            let isShow = false
            if (room == 0){
                isShow = true
            }
            else if (data.room == room){
                isShow = true
            }

            if (isShow == true){
                let item = this.machinePool[accIndex]
                if (item != null){
                    item.obj.active = true

                    item.labelId.string = data.id.toString()

                    if (data.state == 0){
                        item.btnNormal.node.active = true
                        item.btnNormal.node.on('click',function(){
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
                        item.btnUnLock.node.active = true
                    }
                    else if (data.state == 2){
                        item.btnLock.node.active = true
                    }                  
                }

                accIndex++
            }
        }

        this.UpdateInfo()
    },

    UpdateInfoButton(){
        if (this.selectData == null){
            this.btnLeft.node.active = false
            this.btnRight.node.active = false
            return
        }

        if (this.selectIndex >= this.machinePool.length){
            this.selectIndex = this.machinePool.length - 1
        }
        
        if (this.selectIndex < 0){
            this.selectIndex = 0
        }

        if (this.selectIndex == 0){
            this.btnLeft.node.active = false
            this.btnRight.node.active = true
        }
        else if (this.selectIndex == this.machinePool.length - 1){
            this.btnLeft.node.active = true
            this.btnRight.node.active = false
        }
        else{
            this.btnLeft.node.active = true
            this.btnRight.node.active = true
        }
    },

    UpdateInfo(){        
        this.UpdateInfoButton()

        if (this.selectData == null){
            this.labalId.string = ""
            this.UICounter.ClearAll()
            this.labelGameName.string = ""
            return
        }

        let data = this.selectData[this.selectIndex]
        this.labalId.string = "機台 " + data.id.toString()
        this.UICounter.ClearAll()
        this.UICounter.SetData()
        
        this.labelGameName.string = gameName + roomTypeName[this.room.type]     
    }
});
