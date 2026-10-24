cc.Class({
    extends: cc.Component,

    properties: {
        itemCount: 10,
        maxValue: 800,
    },

    Init(){
        let root = this.node
        this.root = root

        this.ItemPrefab = cc.find("table/item", root)
        this.ItemAttach = this.ItemPrefab.parent

        let bb = cc.find("label/BB", root)
        if (bb != null){
            this.Label_BB = bb.getComponent(cc.Label)
        }

        let rb = cc.find("label/RB", root)
        if (rb != null){
            this.Label_RB = rb.getComponent(cc.Label)
        }

        let total = cc.find("label/Total", root)
        if (total != null){
            this.Label_Total = total .getComponent(cc.Label)
        }

        this.dataList = []
        for (let i = 0; i < this.itemCount; ++i){
            let clone = cc.instantiate(this.ItemPrefab);
            clone.parent = this.ItemAttach

            let obj = {}
            obj.green_BB = cc.find("type/green_BB", clone)
            obj.yellow_RB = cc.find("type/yellow_RB", clone)
            obj.red_BB = cc.find("type/red_BB", clone)
    
            obj.green_BB.active = false
            obj.yellow_RB.active = false
            obj.red_BB.active = false

            obj.points = []
            let point = cc.find("points", clone)
            var children = point.children;
            for (var j = 0; j < children.length; ++j) {
                children[j].active = false
                obj.points.push(children[j])    
            }
            this.dataList.push(obj)
        }

        this.ItemPrefab.active = false
    },

    show(){
        this.node.active = true
    },

    hide(){
        this.node.active = false
    },

    clearAll(){
        this.setString(this.Label_BB, 0)
        this.setString(this.Label_RB, 0)
        this.setString(this.Label_Total, 0)

        for (let i = 0; i < this.dataList.length; ++i){
            let data = this.dataList[i]
            data.type = null
            data.value = 0

            data.green_BB.active = false
            data.yellow_RB.active = false
            data.red_BB.active = false
            
            for (let j = 0; j < data.points.length; ++j){
                data.points[j].active = false
            }
        }
    },

    setData(data){
        this.setString(this.Label_BB, data.bb)
        this.setString(this.Label_RB, data.rb)
        this.setString(this.Label_Total, data.total)

        if (data.data != null){
            for (let i = 0; i < data.data.length; ++i){
                this.showOneData(data.data[i])
            }
        }
    },

    addOneData(data){
        this.tempData = data
    },
    
    setString(lebal, value){
        if (lebal == null){
            return
        }

        if (value == null){
            return
        }

        lebal.string = (value).toString()
    },

    showOneData(data = null){
        if (data == null){
            data = this.tempData

            this.setString(this.Label_BB, data.bb)
            this.setString(this.Label_RB, data.rb)
            this.setString(this.Label_Total, data.total)
        }

        if (data == null){
            return
        }

        let item = this.dataList[0]

        // 資料不一樣，往右移
        if (item.type != data.type){
            for (let i = this.itemCount - 1; i >= 1; --i){
                this.setItemData(this.dataList[i], this.dataList[i - 1].type, this.dataList[i - 1].value)
            }
            this.setItemData(item, data.type, data.value)
        }
        else
        {
            this.setItemData(item, data.type, item.value + data.value)
        }
    },

    setItemData(item, type, value){
        if (type == null){
            return
        }

        item.type = type
        item.value = value

        item.green_BB.active = false
        item.yellow_RB.active = false
        item.red_BB.active = false

        // normal bb
        if (type == 0){
            item.green_BB.active = true
        }        
        // super bb
        else if (type == 1){
            item.red_BB.active = true
        }
        // rb
        else if (type == 2){
            item.yellow_RB.active = true
        }

        // point
        for (let i = 0; i < item.points.length; ++i){
            item.points[i].active = false
        }

        let count = Math.floor(value / this.maxValue * item.points.length)
        if (count > item.points.length)
            count = item.points.length
        
        for (let i = 0; i < count; ++i){
            item.points[i].active = true
        }
    }
});