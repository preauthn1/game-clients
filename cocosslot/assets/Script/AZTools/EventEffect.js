cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    //onLoad(){},

    //給toggle用的，第一個參數會傳回所有，第二個參數則是傳遞CustomEventData字串
    setVisable: function (event, msg)
    {
        switch (msg)
        {
            case 'true':
                this.node.active = true;
                break;
            default:
                this.node.active = false;
                break;
        }
    },

    setTween: function (event, msg)
    {
        let msgArr = msg.split(",");     //傳進來的文字訊息會被轉成陣列 用逗號分開
        let len = msgArr.length;
        len--;
        switch (msgArr.shift())
        {
            case "o":                //陣列第一個值是o 則接下來做透明度tween
                switch (len)
                {
                    case 2:
                        cc.tween(this.node)
                          .to(parseFloat(msgArr[0]), { opacity: parseInt(msgArr[1]) })
                          .start();
                        break;
                    case 4:
                        cc.tween(this.node)
                          .to(parseFloat(msgArr[0]), { opacity: parseInt(msgArr[1]) })
                          .to(parseFloat(msgArr[2]), { opacity: parseInt(msgArr[3]) })
                          .start();
                        break;
                    case 6:
                        cc.tween(this.node)
                          .to(parseFloat(msgArr[0]), { opacity: parseInt(msgArr[1]) })
                          .to(parseFloat(msgArr[2]), { opacity: parseInt(msgArr[3]) })
                          .to(parseFloat(msgArr[4]), { opacity: parseInt(msgArr[5]) })
                          .start();
                        break;
                    case 8:
                        cc.tween(this.node)
                          .to(parseFloat(msgArr[0]), { opacity: parseInt(msgArr[1]) })
                          .to(parseFloat(msgArr[2]), { opacity: parseInt(msgArr[3]) })
                          .to(parseFloat(msgArr[4]), { opacity: parseInt(msgArr[5]) })
                          .to(parseFloat(msgArr[6]), { opacity: parseInt(msgArr[7]) })
                          .start();
                        break;
                    default:
                        this.node.active = false;
                        cc.tween(this.node)
                          .to(0.1, { opacity: 0 })
                          .start();
                        break;
                }
                break;
            case "s":                 //陣列第一個值是s 則接下來做縮放tween
                switch (len)
                {
                    case 2:
                        cc.tween(this.node)
                          .to(parseFloat(msgArr[0]), { scale: parseFloat(msgArr[1]) })
                          .start();
                        break;
                    case 4:
                        cc.tween(this.node)
                          .to(parseFloat(msgArr[0]), { scale: parseFloat(msgArr[1]) })
                          .to(parseFloat(msgArr[2]), { scale: parseFloat(msgArr[3]) })
                          .start();
                        break;
                    case 6:
                        cc.tween(this.node)
                          .to(parseFloat(msgArr[0]), { scale: parseFloat(msgArr[1]) })
                          .to(parseFloat(msgArr[2]), { scale: parseFloat(msgArr[3]) })
                          .to(parseFloat(msgArr[4]), { scale: parseFloat(msgArr[5]) })
                          .start();
                        break;
                    case 8:
                        cc.tween(this.node)
                          .to(parseFloat(msgArr[0]), { scale: parseFloat(msgArr[1]) })
                          .to(parseFloat(msgArr[2]), { scale: parseFloat(msgArr[3]) })
                          .to(parseFloat(msgArr[4]), { scale: parseFloat(msgArr[5]) })
                          .to(parseFloat(msgArr[6]), { scale: parseFloat(msgArr[7]) })
                          .start();
                        break;
                    default:
                        this.node.active = false;
                        cc.tween(this.node)
                          .to(0.1, { opacity: 0 })
                          .start();
                        break;
                }
                break;
            default:
                break;
        }
    },

});
