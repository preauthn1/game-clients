var websocket = require("./websocket.js");
var proto = require("./proto");
var http = require("http");

cc.Class({

    extends: cc.Component,

    properties: {
        button: cc.Button,
        sprite: cc.Sprite,
        spine: sp.Skeleton
    },

    onLoad: function ()
    {
        // 初始化封包解析方式
        proto.InitProto();
        proto.RegMsgHook("111", 1, 5, this.HeartBeatConfigRet);
        //proto.RemoveMsgHook("111", 1, 5, this.HeartBeatConfigRet);
        //proto.RemoveMsgHookByGroup("111");

        this.button.node.on('click',
            function (event)
            {
                websocket.Resume();
            },
            this
        );
    },

    start: function ()
    {
        // tf api
        var onConnect = this.onConnect;
        var spriteImg = this.sprite;
        let url = "http://0.0.0.0:160";
        let path = "/ServerNode/Transfer";
        let data = "data=2EB4063277570D57EC50678BDAA0A591C9A475489694A6D603E097203C5C5844EE5D801D9BE7CE8CD1D7F0807DED21981927BC601BCFD7CD7EA166FBFF2CE2B9A38479342496BAA0D7A07DE0A7452AA166E073717E44EF93BA7B239EBA8C04F0B76A98CCF9645BF568D7F4726170E3201C86D67007FAA23F3B7ECD38672F09FE1597785C4803EE235ED99A30C7836D30";
        http.get(url, path, data, function (err, ret)
        {
            if (err)
            {
                console.log(err);
                return;
            }

            console.log(ret);

            // 連線
            websocket.connect("ws://0.0.0.0:5000/ws", onConnect);
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

        // tween
        // https://example.invalid/creator/manual/zh/scripting/tween.html 
        /*
         cc.tween(this.spine.node)
         .to(1, { position: cc.v2(300, 300) })
         .to(1, { scale: 2 })
         .to(1, { scale: 1 })
         .call(() => { cc.log('This is a callback') })        
         .start()
         */
    },

    onConnect: function ()
    {
        websocket.Pause();
        websocket.sendData(1, 5, { BeatInterval: 111, ConnLoseTimeSpan: 222 });

        //websocket.sendString("1_4");
    },

    HeartBeatConfigRet: function (data)
    {
        console.log("Get HeartBeatConfigRet");
    },
});
