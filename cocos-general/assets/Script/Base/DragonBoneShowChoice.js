//用來選擇顯示同級唯一顯示的元件
let dataListArray=[];
let dataListObject={};
let dataList=cc.Enum({ "default" : - 1 });
let setEnumAttr=function (obj, propName, enumDef) {
    cc.Class.Attr.setClassAttr(obj, propName, "type", "Enum");
    cc.Class.Attr.setClassAttr(obj, propName, "enumList", cc.Enum.getList(enumDef));
};

cc.Class({
    extends : cc.Component,
    properties : {
        targetNode : {
            default : null,
            type : cc.Node,
            notify() {
                this.initData();
            },
        },
        //TextType : sp.DragonBones,
        data : {
            default : null,
            type : dragonBones.ArmatureDisplay,
            visible() {
                return false;
            },
            notify() {
                this.getData();
            },
        },
        _path : {
            type : cc.String,
            default : [],
        },
        path : {
            type : cc.String,
            default : [],
            readonly: true,
            tooltip:"Read Only",
        },

        ATTACHED_NODE : {
            displayName : "同級唯一顯示Node",
            default : - 1,
            type : dataList,
            notify() {
                this.refreshInspector(this.ATTACHED_NODE);
            },
        },
        memData : {
            default : "",
            visible() {
                return false;
            },
        },
        runOnStart : {
            displayName : "載入時直接設定",
            default : true,
            tooltip : "也可之後執行.set()即可套用設定",
        },
    },

    //開始
    start() {
        if (this.targetNode === null) {
            this.targetNode=this.node;
        }
        //在這邊賦值後觸發notify()
        this.data=this.targetNode.getComponent(dragonBones.ArmatureDisplay);
        if (this.targetNode !== null && this.data === null) {
            this.targetNode=null;
        }
        if (this.runOnStart) {
            this.set(this.data);
        }
    },

    initData() {
        if (this.targetNode !== null) {
            this.data=this.targetNode.getComponent(dragonBones.ArmatureDisplay);
        }
    },

    //設定同級中元件的啟動與關閉
    set(data) {
        let armature=data.armature();
        let openNode=this.getNodeFromeArr(this.path, armature); //在這行讀取this.path中的設定值
        if (openNode) {
            let brothers=openNode.armature.parent.childArmature.getSlots();
            let i=0, l=brothers.length;
            for (i=0; i<l; i ++) {
                brothers[i]._visible=(brothers[i].name === openNode.name);
            }
        }
    },

    //從記錄的陣列資料取得啟動元件
    getNodeFromeArr(pList, armature, i=0) {
        let dbnd=armature.getSlot(pList[i]);
        i ++;
        if (pList.length>i) {
            dbnd=this.getNodeFromeArr(pList, dbnd._childArmature, i);
        }
        return dbnd;
    },

    //檢查DragonBone設定是否更新(只在編輯器下運作)
    update() {
        if (this.data && CC_EDITOR) {
            let newData=this.data.armatureName + "/" + this.data.animationName;
            if (this.memData !== newData) {
                this.data=null;
                this.data=this.targetNode.getComponent(dragonBones.ArmatureDisplay);
                this.ATTACHED_NODE=0;
                this.memData=newData;
            }
        }
    },

    //更新編輯器中參數時更新列表資料(只在編輯器下運作)
    refreshInspector(index) {
        if (this.data && CC_EDITOR) {
            let pathArray=Object.keys(dataListObject)[index].split("/");
            pathArray.shift();
            let i=0, l=pathArray.length, arr=[];
            for (i=0; i<l; i ++) {
                if (pathArray[i] !== "root") {
                    arr.push(pathArray[i]);
                }
            }
            this._path=arr;
            this.path=this._path;
        }
    },

    //取得DragonBone元件中隱藏的元件樹(只在編輯器下運作)
    getData() {
        if (this.data && CC_EDITOR) {
            let wasNodeTree=false;
            let childList=this.targetNode.children;
            let i, l=childList.length;
            for (i=0; i<l; i ++) {
                if (childList[i].name === "ATTACHED_NODE_TREE") {
                    wasNodeTree=true;
                }
            }
            let newNode=this.data.attachUtil.generateAllAttachedNodes();//創建DragonBone樹狀元件(只會有空的Node)
            dataListArray=this.treeChild(this.data.attachUtil._attachedRootNode);
            if (!wasNodeTree) newNode.destroy();//本來沒有NODE_TREE，由工具產生，用完也由工具刪除
            dataListObject={};
            l=dataListArray.length;
            for (i=0; i<l; i ++) {
                dataListObject=Object.assign(dataListObject, dataListArray[i]);
            }
            dataList=Object.assign({}, dataListObject);
            i=0;
            for (l in dataList) {
                dataList[l]=i ++;
            }
            if (this.ATTACHED_NODE === - 1 || this.ATTACHED_NODE>=i) {
                this.ATTACHED_NODE=0;
            }
            dataList=cc.Enum(dataList);
            setEnumAttr(this, "ATTACHED_NODE", dataList);
            Editor.Utils.refreshSelectedInspector("node", this.targetNode.uuid);
        }
    },

    //紀錄元件樹中的元件路徑，製作下拉式選單(只在編輯器下運作)
    treeChild(node, path="") {
        let pathList=[];
        let name=node.name.replace("ATTACHED_NODE:", "");

        path=path + name;
        let listData={};
        listData[path]=name;
        pathList.push(listData);
        let i=0, l=node.children.length;
        for (i=0; i<l; i ++) {
            pathList=pathList.concat(this.treeChild(node.children[i], path + "/"));
        }

        return pathList;
    },

    //設定在編輯器中可以運作
    editor : {
        executeInEditMode : true
    },
});
