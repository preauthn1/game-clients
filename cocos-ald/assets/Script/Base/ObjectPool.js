var ObjectItem = cc.Class({
	name:"ObjectItem",

    properties: {
        poolName: cc.String,
        prefab: cc.Node
    },
    
    init(){
        this.waitFree = [] // 使用中
        if (this.pool == null){
            this.pool = new cc.NodePool(this.string);
        }
    },

    get(){
        let enemy = null;
        if (this.pool.size() == 0){
            enemy = cc.instantiate(this.prefab);
        }
        else{
            enemy = this.pool.get();
        }
        this.waitFree.push(enemy)
        return enemy;
    },
    //----------------------
    // free 跟 freeAll 兩個擇一使用
    free(object){
        this.pool.put(object)
    },

    freeAll(){
        for(let i in this.waitFree){
            this.pool.put(this.waitFree[i])
        }
        this.waitFree = []
    },
});

cc.Class({
    extends: cc.Component,

    properties: {
        itemList: {
            default: [],
            type: ObjectItem, 
        },
    },

    init(){
        this.dataList = new Map();
        for (let i = 0; i < this.itemList.length; i++){
            let ObjectItem = this.itemList[i];
            ObjectItem.init();
            this.dataList.set(ObjectItem.poolName, ObjectItem);
        }
    },

    get(poolName){
        if (this.dataList == null){
            this.init();
        }

        return this.dataList.get(poolName).get();
    },

    //----------------------
    // free 跟 freeAll 兩個擇一使用
    free(poolName, object){
        if (this.dataList == null){
            this.init();
        }

        this.dataList.get(poolName).free(object);
    },

    freeAll(){
        if (this.dataList == null){
            this.init();
        }
        let self = this
        this.dataList.forEach(function(value, poolName, map){
            self.dataList.get(poolName).freeAll()
        })
    },
});
