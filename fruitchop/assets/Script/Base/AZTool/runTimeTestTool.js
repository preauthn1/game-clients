if (CC_DEBUG) {
    //印出Node的路徑、並記錄到Node.path中
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

    //當某物件運作不如預期，從畫面上消失或者移動方式怪異時供監聽、檢查用
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

    //從場景上找出符合這個名字的物件並列出路徑
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