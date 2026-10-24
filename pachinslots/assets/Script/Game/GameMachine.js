var GameG = require( "GameGlobal")

let gameName = "將軍"
var roomTypeName = [
    "",
    "[鑽石廳]",
    "[白金廳]",
    "[一般廳]",
]

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

        let self = this

        this.btn_left = cc.find("Canvas/UI/info/btn_left").getComponent(cc.Button)
        this.btn_left.node.on('click',function(){
            self.selectIndex -= 1

            self.updateInfo()
        })

        this.btn_right = cc.find("Canvas/UI/info/btn_right").getComponent(cc.Button)
        this.btn_right.node.on('click',function(){
            self.selectIndex += 1

            self.updateInfo()
        })        

        this.labal_id = cc.find("Canvas/UI/info/label_id").getComponent(cc.Label)

        this.btn_back = cc.find("Canvas/UI/btn_back").getComponent(cc.Button)
        this.btn_back.node.on('click',function(){
            cc.director.loadScene("GameLoading");
        })

        this.UIInfo = cc.find("Canvas/UI/info/UIInfo")
        this.UIInfo.active = false

        this.btn_counter = cc.find("Canvas/UI/info/btn_counter").getComponent(cc.Button)
        this.btn_counter.node.on('click',function(){
            self.UICounter.show()
            self.UIInfo.active = false
        })

        this.btn_info = cc.find("Canvas/UI/info/btn_info").getComponent(cc.Button)
        this.btn_info.node.on('click',function(){
            self.UICounter.hide()
            self.UIInfo.active = true
        })

        this.UICounter = cc.find("Canvas/UI/info/UICounter").getComponent("UICounter")
        this.UICounter.Init()        

        this.init()
    },

    init(){
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

        this.showTypeButton()

        this.showByRoom(0)
    },

    showTypeButton(){
        for (let i = 0; i < this.typeData.length; ++i){
            let data = this.typeData[i]
            var clone = cc.instantiate(this.typeItem);
            clone.parent = this.typeItem.parent

            let label_all = cc.find("Background/label_all", clone).getComponent(cc.Label)
            let label_ratio = cc.find("Background/label_ratio", clone).getComponent(cc.Label)
            let label_pieces = cc.find("Background/label_pieces", clone).getComponent(cc.Label)

            if (data.type == 0){
                label_all.string = "全部"
                label_all.node.active = true
                label_ratio.node.active = false
                label_pieces.node.active = false
            }
            else{
                label_ratio.string = data.ratio.toString() + ":1"
                label_pieces.string = "一轉" + data.pieces.toString() + "枚"
                label_all.node.active = false
                label_ratio.node.active = true
                label_pieces.node.active = true
            }

            let self = this     
            let btn = clone.getComponent(cc.Button)
            btn.node.on('click',function(){
                self.showByRoom(i)
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
    
    getDataByRoom(room){
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

    showByRoom(room)
    {
        this.clearAll()

        this.room = this.typeData[room]
        this.selectData = this.getDataByRoom(room)
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
                }

                accIndex++
            }
        }

        this.updateInfo()
    },

    updateInfoButton(){
        if (this.selectData == null){
            this.btn_left.node.active = false
            this.btn_right.node.active = false
            return
        }

        if (this.selectIndex >= this.machinePool.length){
            this.selectIndex = this.machinePool.length - 1
        }
        
        if (this.selectIndex < 0){
            this.selectIndex = 0
        }

        if (this.selectIndex == 0){
            this.btn_left.node.active = false
            this.btn_right.node.active = true
        }
        else if (this.selectIndex == this.machinePool.length - 1){
            this.btn_left.node.active = true
            this.btn_right.node.active = false
        }
        else{
            this.btn_left.node.active = true
            this.btn_right.node.active = true
        }
    },

    updateInfo(){        
        this.updateInfoButton()

        if (this.selectData == null){
            this.labal_id.string = ""
            this.UICounter.clearAll()
            this.label_gameName.string = ""
            return
        }

        let data = this.selectData[this.selectIndex]
        this.labal_id.string = "機台 " + data.id.toString()
        this.UICounter.clearAll()
        this.UICounter.setData(data.counter)
        
        this.label_gameName.string = gameName + roomTypeName[this.room.type]     
    }
});
