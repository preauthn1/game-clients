window.nodePath = function(inode){
    if(!inode) return;
    let node   = inode.node || inode;
    let getTop = function(n){
        if(n.parent){
            return getTop(n.parent) + "/" + n.name;
        }
        if(n._parent){
            return getTop(n._parent) + "/" + n.name;
        }
        return n.name;
    };
    if(node._parent != null && node._parent != undefined){
        node.path = getTop(node);
    }
    return node.path;
};

window.CheckNodeMiss = function(check, times){
    if(!check) return;
    let missNode = check.node || check;
    times        = times || 1;
    
    let aih_change   = function(){
        times--;
        cc.warn(missNode.name, missNode.active);
        if(!times) missNode.off("active-in-hierarchy-changed", aih_change);
    };
    let color_change = function(){
        times--;
        cc.warn(missNode.name, missNode.color);
        if(!times) missNode.off(cc.Node.EventType.COLOR_CHANGED, color_change);
    };
    let pos_change   = function(){
        times--;
        cc.warn(missNode.name, missNode.position);
        if(!times) missNode.off(cc.Node.EventType.POSITION_CHANGED, pos_change);
    };
    let scale_change = function(){
        times--;
        cc.warn(missNode.name, missNode.scale);
        if(!times) missNode.off(cc.Node.EventType.SCALE_CHANGED, scale_change);
    };
    let size_change  = function(){
        times--;
        cc.warn(missNode.name, missNode.getContentSize());
        if(!times) missNode.off(cc.Node.EventType.SIZE_CHANGED, size_change);
    };
    
    let group_changed = function(){
        times--;
        cc.warn(missNode.name, nodePath(missNode));
        if(!times) missNode.off(cc.Node.EventType.GROUP_CHANGED, size_change);
    };
    
    missNode.on("active-in-hierarchy-changed", aih_change);
    missNode.on(cc.Node.EventType.COLOR_CHANGED, color_change);
    missNode.on(cc.Node.EventType.POSITION_CHANGED, pos_change);
    missNode.on(cc.Node.EventType.SCALE_CHANGED, scale_change);
    missNode.on(cc.Node.EventType.SIZE_CHANGED, size_change);
    missNode.on(cc.Node.EventType.GROUP_CHANGED, group_changed);
};

window.SuperFindNode = function(name){
    let scene        = cc.director.getScene();//取得場景
    let rechAllChild = function(parents){
        let c      = parents.children;
        let i, len = c.length;
        let ret    = [];
        for(i = 0; i < len; i++){
            if(c[i].name == name){
                nodePath(c[i]);
                ret.push(c[i]);
            }
            ret = ret.concat(rechAllChild(c[i]));
        }
        return ret;
    };
    cc.error("find \"" + name + "\" :", rechAllChild(scene));
};
