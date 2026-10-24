//用來選擇顯示同級唯一顯示的元件
let dataListArray=[];
let dataListObject={};
let dataList=cc.Enum({ "default" : 0 });
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
            visible() {
                return false;
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
        attachedNode : {
            displayName : "同級唯一顯示Node",
            default : 0,
            type : dataList,
            notify(oldValue) {
                if (this.attachedNode !== oldValue) {
                    this.refreshInspector(this.attachedNode);
                }
            },
        },
        _path : {
            type : cc.String,
            default : [],
        },
        path : {
            type : cc.String,
            default : [],
            //readonly : true,
            visible() {
                return false;
            },
            tooltip : "唯讀，只由上方\"同級唯一顯示Node\"的設定值變動，實際運作時則會依照這邊的字串進行路徑搜尋以及設定，其他用來取值和產生選項等功能在實際運行中不會運作，節約運算資源。",
        },
        memData : {
            default : "",
            visible() {
                return false;
            },
        },
    },

    resetInEditor() {
        this.start();
    },
    //開始
    start() {
        if (CC_EDITOR) {
            this.UIActionData=this.node.getComponent("UIActionData");
            if (this.UIActionData.type !== 6) {
                let allData=this.node.getComponents("UIActionData");
                for (let k in allData) {
                    if (allData[k].type === 6) {
                        this.UIActionData=allData[k];
                        break;
                    }
                }
            }
            let found=cc.find(this.UIActionData.path);
            if (!this.targetNode) {
                this.targetNode=cc.instantiate(found);
                this.targetNode.parent=this.node;
                this.targetNode.active=true;
            }
            this.memData="";

            //在這邊賦值後觸發notify()  
            this.data=this.targetNode.getComponent(dragonBones.ArmatureDisplay);
            this.firstGet=false;
        }
    },

    //設定同級中元件的啟動與關閉
    set(data) {
        if (!data) return;
        let armature=data.armature();
        let openNode=this.getNodeFromeArr(this.path, armature); //在這行讀取this.path中的設定值
        if (openNode) {
            if (openNode.armature.parent) {
                let brothers=openNode.armature.parent.childArmature.getSlots();
                let i=0, l=brothers.length;
                for (i=0; i<l; i ++) {
                    brothers[i]._visible=(brothers[i].name === openNode.name);
                }
            }
        }
    },

    //從記錄取得啟動的陣列資料元件
    getNodeFromeArr(pList, armature, i=0) {
        let dbnd=armature.getSlot(pList[i ++]);
        if (pList.length>i && dbnd) {
            dbnd=this.getNodeFromeArr(pList, dbnd._childArmature, i);
        }
        return dbnd;
    },

    //檢查DragonBone設定是否更新(只在編輯器下運作)
    update() {
        if (this.data && CC_EDITOR) {
            let newData=this.UIActionData.dragonBonesArmatureName + "/" + this.UIActionData.dragonBonesAnimationName;
            if (this.memData !== newData && this.targetNode) {
                this.data=null;
                this.data=this.targetNode.getComponent(dragonBones.ArmatureDisplay);
                this.memData=newData;
            }
            if (this.needUpdate) {
                this.needUpdate=false;
                this.needUpdate=this.getData();
            }
        }
    },

    //更新編輯器中參數時更新列表資料(只在編輯器下運作)
    refreshInspector(index) {
        if (CC_EDITOR) {
            if (Object.keys(dataListObject)[index] !== undefined) {
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
            this.data=null;
            if (this.targetNode) {
                this.targetNode.destroy();
                this.targetNode=null;
            }
        }
    },

    //取得DragonBone元件中隱藏的元件樹(只在編輯器下運作)
    getData() {
        if (CC_EDITOR) {
            if (!this.targetNode) {
                this.UIActionData=this.node.getComponent("UIActionData");
                this.targetNode=cc.instantiate(cc.find(this.UIActionData.path));
                this.targetNode.parent=this.node;
                this.targetNode.active=true;
            }
            if (this.data) {
                if (this.data.dragonAsset._armaturesEnum)
                    this.data._defaultArmatureIndex=this.data.dragonAsset._armaturesEnum[this.UIActionData.dragonBonesArmatureName];

                if (this.node.name === "hunting_deer copy") {
                    this.openAllNode(this.data);
                }

                this.data.attachUtil.generateAllAttachedNodes();//創建DragonBone樹狀元件(只會有空的Node)

                if (this.node.name === "hunting_deer copy") {
                    cc.log("=========================================================");
                    this.listAllKeys(this.data.attachUtil);
                }

                dataListArray=this.treeChild(this.data.attachUtil._attachedRootNode);
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
                if (this.attachedNode === - 1 || this.attachedNode>=i) {
                    this.attachedNode=0;
                }
                dataList=cc.Enum(dataList);
                setEnumAttr(this, "attachedNode", dataList);
                this.data=null;
                if (this.targetNode) {
                    this.targetNode.destroy();
                    this.targetNode=null;
                }
                //Editor.Utils.refreshSelectedInspector("node", this.node.uuid);
            }
        }
    },

    //從記錄取得啟動的陣列資料元件
    openAllNode(data) {
        let armature=data.armature();
        cc.log("armature", armature);
        //cc.log("armature",armature._bones);
        //cc.log("armature",armature._slots);
    },

    listAllKeys(o) {
        for (let k in o) {
            cc.log(k, o[k].constructor);
        }
    },


    //紀錄元件樹中的元件路徑，製作下拉式選單(只在編輯器下運作)
    treeChild(node, path="") {
        let pathList=[];
        if (!node) {
            cc.log("treeChild node = null");
            return null;
        }
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
