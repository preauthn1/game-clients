if (CC_DEBUG) {
    //////////////////////////////////////////////////////////////////////////////////////////////
    //
    //  AZLDC 遇到設計盲點的時候，協助分析解析用的工具，使用時機於Cocos編輯器的測試模式
    //  在測試模式下直接在Console中直接呼叫對應function即可。
    //  可使用Function目前有nodePath(inode)、CheckNodeMiss(check)、SuperFindNode(name)和tree(node)
    //
    //////////////////////////////////////////////////////////////////////////////////////////////
    
    /**
     * 印出Node的路徑、並記錄到Node.path中
     * @param {cc.Node} inode 目標物件(Node)
     * @return {string|*}
     */
    window.nodePath=function (inode) {
        if (!inode) return "[undefine]";
        let node=inode.node || inode;
        let getTop=function (n) {
            if (n.parent) {
                return getTop(n.parent) + "/" + n.name;
            }
            return n.name;
        };
        if (node.parent !== null && node.parent !== undefined) {
            node.path=getTop(node).replace("Game/", "");
        }
        return node.path;
    };

    /**
     * 當某物件運作不如預期，從畫面上消失或者移動方式怪異時供監聽、檢查用
     * @param {cc.Node} check 受檢查的物件
     */
    window.CheckNodeMiss=function (check) {
        let missNode=check.node || check;
        if (!missNode) return;

        missNode.on("active-in-hierarchy-changed", function () {
            cc.error(missNode.name, missNode.active);
        });
        missNode.on(cc.Node.EventType.COLOR_CHANGED, function () {
            cc.error(missNode.name, missNode.color);
        });
        missNode.on(cc.Node.EventType.POSITION_CHANGED, function () {
            cc.error(missNode.name, missNode.position);
        });
        missNode.on(cc.Node.EventType.SCALE_CHANGED, function () {
            cc.error(missNode.name, missNode.scale);
        });
        missNode.on(cc.Node.EventType.SIZE_CHANGED, function () {
            cc.error(missNode.name, missNode.getContentSize());
        });
    };

    /**
     * 從場景上找出符合這個名字的物件並列出路徑
     * @param {string} name 目標名稱
     * @return {[]} 找到的幾個目標
     */
    window.SuperFindNode=function (name) {
        let scene=cc.director.getScene();//取得場景
        let rechAllChild=function (parents) {
            let c=parents.children;
            let i, len=c.length;
            let ret=[];
            for (i=0; i<len; i ++) {
                if (c[i].name.toLowerCase().includes(name.toLowerCase())) {
                    nodePath(c[i]);
                    ret.push(c[i]);
                }
                ret=ret.concat(rechAllChild(c[i]));
            }
            return ret;
        };
        let ACArr=rechAllChild(scene);
        cc.log("%c found \"" + name + "\" :", "color : \"#7090FF\";", ACArr);
        return ACArr;
    };

    /**
     * 印出以這個物件為開始的整個子系樹狀關係，同時印出物件名稱和其中附帶的元件等資料
     * @param {cc.Node} node 指定要印的物件頂點，當這個為空值時，印出整個場景
     */
    window.tree=function (node=cc.director.getScene()) {
        let style=`color: ${node.parent === null || node.activeInHierarchy ? "#7090FF" : "#38487F"}; font-weight:bold;`;
        if (node.childrenCount>0) {
            if (node._components.length>0) {
                console.groupCollapsed(`%c${node.name}`, style, node._components);
            } else {
                console.groupCollapsed(`%c${node.name}`, style);
            }
            node.children.forEach(child => tree(child));
            console.groupEnd();
        } else {
            if (node._components.length>0) {
                console.log(`%c${node.name}`, style, node._components);
            } else {
                console.log(`%c${node.name}`, style, node);
            }
        }
    };
}