var GameG = require("GameGlobal");
var GameData = require("GameData");

cc.Class({
    extends: cc.Component,

    properties: {
        itemCount: 10,
        maxValue: 1000,
    },

    Init(){
        this.prefabItem = cc.find("table/item", this.node)
        this.prefabItem.active = false

        let label = cc.find("label", this.node)
        this.BB = cc.find("BB/obj", label)
        this.LabelBB =  cc.find("label_value", this.BB).getComponent(cc.Label)

        this.RB = cc.find("RB/obj", label)
        this.LabelRB =  cc.find("label_value", this.RB).getComponent(cc.Label)

        this.AT = cc.find("AT/obj", label)
        this.LabelAT =  cc.find("label_value", this.AT).getComponent(cc.Label)

        this.LabelTotal = cc.find("Total/label_value", label) .getComponent(cc.Label)
        this.LabelNow = cc.find("Now/label_value", label) .getComponent(cc.Label)

        this.dataList = []
        for (let i = 0; i < this.itemCount; ++i){
            let clone = GameG.CreateClone(this.prefabItem);

            let obj = {}
            obj.AT = cc.find("type/AT", clone)
            obj.AT.active = false
            obj.RB = cc.find("type/RB", clone)
            obj.RB.active = false
            obj.BB = cc.find("type/BB", clone)
            obj.BB.active = false

            obj.label_count = cc.find("label_count", clone).getComponent(cc.Label)
            obj.label_count.string = ""

            obj.points = []
            let point = cc.find("points", clone)
            var children = point.children;
            for (var j = 0; j < children.length; ++j) {
                children[j].active = false
                obj.points.push(children[j])    
            }

            this.dataList.push(obj)
        }

    },

    Show(){
        this.node.active = true
    },

    Hide(){
        this.node.active = false
    },

    ClearAll(){
        this.SetString(this.LabelBB, "")
        this.SetString(this.LabelRB, "")
        this.SetString(this.LabelAT, "")
        this.SetString(this.LabelTotal, 0)
        this.SetString(this.LabelNow, 0)

        for (let i = 0; i < this.dataList.length; ++i){
            let data = this.dataList[i]
            data.type = null
            data.value = 0
            if (data.effect != null){
                data.effect.stop()
                data.effect = null
            }

            data.AT.active = false
            data.RB.active = false
            data.BB.active = false
            data.label_count.string = ""

            for (let j = 0; j < data.points.length; ++j){
                data.points[j].active = false
            }
        }
    },
    
    SetString(lebal, value){
        if (lebal == null){
            return
        }

        if (value == null){
            lebal.string = "0"
        }
        else{
            lebal.string = (value).toString()
        }
    },

    SetStringByType(data){
        if (data.Type == 1){
            if (data.Count > 999){
                this.SetString(this.LabelRB, "999")
            }
            else{
                this.SetString(this.LabelRB, data.Count.toString())
            }
            this.RB.active = true
        }
        else if (data.Type == 2){
            if (data.Count > 999){
                this.SetString(this.LabelBB, "999")
            }
            else{
                this.SetString(this.LabelBB, data.Count.toString())
            }
            this.BB.active = true
        }
    },

    SetData(){
        let data = GameData.GetRoadMap()

        this.RB.active = false
        this.BB.active = false
        this.AT.active = false

        for (let i = 0; i < data.Bonus.length; ++i){
            this.SetStringByType(data.Bonus[i])
        }

        this.SetString(this.LabelTotal, data.Total)
        this.SetString(this.LabelNow, data.Spin)     

        if (data.Snapshots != null){
            for (let i = 0; i < data.Snapshots.length; ++i){
                this.ShowOneData(data.Snapshots[i])
            }
        }
    },

    ShowAllData(){
        this.ClearAll()

        this.SetData()
    },

    ShowOneData(data){
        if (data == null){
            return
        }

        let item = this.dataList[0]

        // 往右推
        for (let i = this.itemCount - 1; i >= 1; --i){
            this.SetItemData(this.dataList[i], this.dataList[i - 1].type, this.dataList[i - 1].value)
        }
        this.SetItemData(item, data.Type, data.Count)
    },

    SetItemData(item, type, value){
        if (type == null){
            return
        }

        if (value == null){
            return
        }

        item.type = type
        item.value = value

        item.AT.active = false
        item.RB.active = false
        item.BB.active = false
        
        // bb
        if (type == 1){
            item.RB.active = true
        }
        // rb
        else if (type == 2){
            item.BB.active = true
        }

        // point
        for (let i = 0; i < item.points.length; ++i){
            item.points[i].active = false
        }
        
        if (item.effect != null){
            item.effect.stop()
            item.effect = null
        }

        item.label_count.string = value.toString()

        let count = Math.floor((value - 1) / this.maxValue * item.points.length) + 1
        // 超過上限閃爍
        if (count > item.points.length){
            count = item.points.length

            let repeatTween = cc.tween(item.points[item.points.length -1])
            let tween = cc.tween(repeatTween)
            .to(0.3, {opacity: 0})
            .to(0.3, {opacity: 255})
            repeatTween.repeat(9999999999, tween)
            item.effect = repeatTween
            item.effect.start()
        }

        for (let i = 0; i < count; ++i){
            item.points[i].active = true
        }
    }
});