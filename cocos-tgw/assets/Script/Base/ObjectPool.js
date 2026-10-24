var ObjectItem = cc.Class({
	name:"ObjectItem",

    properties: {
        poolName: cc.String,
        prefab: cc.Node
    },
    
    init(){
        if (this.pool == null){
            this.pool = new cc.NodePool(this.string);
        }
    },

    get(){
        if (this.pool.size() == 0){
            return cc.instantiate(this.prefab);
        }
        else{
            return this.pool.get();
        }
    },

    free(object){
        this.pool.put(object)
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

    free(poolName, object){
        if (this.dataList == null){
            this.init();
        }

        this.dataList.get(poolName).free(object);
    },

});
