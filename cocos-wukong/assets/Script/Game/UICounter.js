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
        this.Label_BB = cc.find("label/BB", root).getComponent(cc.Label)
        this.Label_RB = cc.find("label/RB", root).getComponent(cc.Label)
        this.Label_Total = cc.find("label/Total", root).getComponent(cc.Label)

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

    setData(data){
        this.Label_BB.string = (data.bb).toString()
        this.Label_RB.string = (data.rb).toString()
        this.Label_Total.string = (data.total).toString()

        if (data.data != null){
            for (let i = 0; i < data.data.length; ++i){
                this.showOneData(data.data[i])
            }
        }
    },

    addOneData(data){
        this.tempData = data
    },
    
    showOneData(data = null){
        if (data == null){
            data = this.tempData

            this.Label_BB.string = (data.bb).toString()
            this.Label_RB.string = (data.rb).toString()
            this.Label_Total.string = (data.total).toString()
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