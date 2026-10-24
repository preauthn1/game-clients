var Websocket    = require("Websocket");
var networkQueue = require("NetworkQueue");
var http         = require("http");


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

window.CheckNodeMiss = function(check){
    
    let missNode = check.node || check;
    if(!missNode) return;
    
    missNode.on("active-in-hierarchy-changed", function(){
        cc.error(missNode.name, missNode.active);
    });
    missNode.on(cc.Node.EventType.COLOR_CHANGED, function(){
        cc.error(missNode.name, missNode.color);
    });
    missNode.on(cc.Node.EventType.POSITION_CHANGED, function(){
        cc.error(missNode.name, missNode.position);
    });
    missNode.on(cc.Node.EventType.SCALE_CHANGED, function(){
        cc.error(missNode.name, missNode.scale);
    });
    missNode.on(cc.Node.EventType.SIZE_CHANGED, function(){
        cc.error(missNode.name, missNode.getContentSize());
    });
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


cc.Class({
    extends   : cc.Component, properties : {
        button : cc.Button, sprite : cc.Sprite, spine : sp.Skeleton
    }, onLoad : function(){
        // 初始化封包解析方式
        networkQueue.InitProto();
        networkQueue.RegMsgHook(1, 5, this.HeartBeatConfigRet, "111");
        //networkQueue.RemoveMsgHook("111", 1, 5, this.HeartBeatConfigRet);
        //networkQueue.RemoveMsgHookByGroup("111");
        /*this.button.node.on('click',
         function (event)
         {
         Websocket.Resume();
         },
         this
         );*/
    },
    
    start : function(){
        // tf api
        var onConnect = this.onConnect;
        var spriteImg = this.sprite;
        let url       = "http://0.0.0.0:160";
        let path      = "/ServerNode/Transfer";
        let data      = "data=2EB4063277570D57EC50678BDAA0A591C9A475489694A6D603E097203C5C5844EE5D801D9BE7CE8CD1D7F0807DED21981927BC601BCFD7CD7EA166FBFF2CE2B9A38479342496BAA0D7A07DE0A7452AA166E073717E44EF93BA7B239EBA8C04F0B76A98CCF9645BF568D7F4726170E3201C86D67007FAA23F3B7ECD38672F09FE1597785C4803EE235ED99A30C7836D30";
        http.get(url, path, data, function(err, ret){
            if(err){
                console.log(err);
                return;
            }
            console.log(ret);
            
            // 連線
            Websocket.connect("Hall", "ws://0.0.0.0:5000/ws", onConnect);
        });
        
        // 載入外部圖片
        /*
         cc.loader.load({url: 'http://0.0.0.0/Logo.png', type: 'png'}, function(err, ret) {
         if(err) {
         console.log(err);
         return;
         }
         let frame = new cc.SpriteFrame(ret);
         spriteImg.spriteFrame = frame;
         spriteImg.node.setContentSize(new cc.Size(308, 202)); // 使用這個圖片的大小
         });
         */
        
        // 非同步方法
        // https://example.invalid/caolan/async 
        // https://example.invalid/async 
        /*
         var arr = [0, 1, 2, 3, 4];
         //async.forEachOfLimit(arr, 5, () => { // 按順序
         async.eachLimit(arr, 5, () => {
         console.log('Cocos Creator');
         });        
         */
        
        // spine
        // https://example.invalid/MaximilianLiu/article/details/79356242 
        //this.spine.setAnimation(0, 'win', true);
        
        /*
         // time scale
         cc.director.calculateDeltaTime = function (now) {
         if (!now) now = performance.now();
         this._deltaTime = (now - this._lastUpdate) / 1000;
         this._deltaTime *= 10;
         this._lastUpdate = now;
         }
         */
        
        /*
         // 間隔多久呼叫
         var interval = 5; // 以秒为单位的时间间隔
         var repeat = 3; // 重复次数
         var delay = 10; // 开始延时
         this.schedule(function() {
         
         }, interval, repeat, delay);
         
         //註銷
         this.unschedule(this.callback);
         */
        
        // 按鈕事件
        /*
         this.node.on('mousedown',function(event){
         console.log('Hello');
         });
         */
        
        // tween
        /*
         this.sprite.node.opacity = 0
         var tween = cc.tween(this.sprite.node)
         // 延遲
         .delay(1)
         // 累加
         .by(2, {position: cc.v2(0, 20)})
         // 完成上面呼叫
         .call(function(){
         console.log("111")
         })
         //指定
         .to(0.5, {opacity: 1})
         
         tween.by(2, {position: cc.v2(0, 20)})
         .call(function(){
         console.log("222")
         })
         // 開始
         tween.start()
         // 停止
         tween.stop()
         */
        
        /*
         "编辑器":  CC_EDITOR,
         "编辑器 或 预览":  CC_DEV,
         "编辑器 或 预览 或 构建调试":  CC_DEBUG,
         "网页预览":  CC_PREVIEW && !CC_JSB,
         "模拟器预览":  CC_PREVIEW && CC_JSB,
         "构建调试":  CC_BUILD && CC_DEBUG,
         "构建发行":  CC_BUILD && !CC_DEBUG,
         */
    },
    
    onConnect : function(){
        Websocket.Pause();
        Websocket.sendData(1, 5, { BeatInterval : 111, ConnLoseTimeSpan : 222 });
        
        //Websocket.sendString("1_4");
    },
    
    HeartBeatConfigRet : function(data){
        console.log("Get HeartBeatConfigRet");
    },
});
