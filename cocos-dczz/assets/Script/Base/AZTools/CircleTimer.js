//圓形時鐘，掛載於圓形時鐘上，直接呼叫SetTime(秒)則啟動 時間到自動隱藏，或者呼叫break()隱藏時鐘的顯示
//by AZLDC
cc.Class({
    extends : cc.Component,
    
    properties : {
        warningCD        : 0, //設置警告時間,大於0啟用,小於或等於0則是不啟用警告
        warinigTextSize  : 1.7, //設置警告時文字跳動最大比例
        normalRingColor  : cc.Color.WHITE, //一般外圈染色
        warningRingColor : cc.Color.RED, //警戒外圈染色
        normalTextColor  : cc.color(255, 255, 255), //一般數字染色
        warningTextColor : cc.color(255, 255, 128), //警告數字染色
    },
    
    wasSet : false,
    
    endTimerCallBack : null,
    
    tweenNum : null,
    
    /**
     * 設置時間和callBack，設置後時間即刻啟動。
     * @param {float} num 設置倒數時間
     * @param {Function} callBack 時間結束後呼叫
     */
    setTime(num, callBack){
        this.CD               = num || 10;
        this.DCD              = this.CD;
        this.endTimerCallBack = callBack;
        this.enabled          = true;
    },
    
    /**
     * 馬上關閉時鐘。
     */
    break(){
        this.DCD = 0;
    },
    
    start(){
        this.init();
    },
    
    //剛進場景抓取所需的元件
    init(){
        if(this.CD == undefined) this.CD = 0.0; //設置本次倒數時間
        if(this.DCD == undefined) this.DCD = 0.0; //倒數中的時間值   
        let sprites = this.node.getComponentsInChildren(cc.Sprite);
        if(sprites.length >= 2){
            this.CDCircle            = sprites[1];
            this.CDCircle.Type       = cc.Sprite.Type.FILLED;
            this.CDCircle.FillType   = cc.Sprite.FillType.RADIAL;
            this.CDCircle.fillCenter = cc.v2(0.5, 0.5);
            this.CDCircle.fillStart  = 0.25;
            this.CDCircle.fillRange  = 0.001;
        }else{
            cc.warn("there's no circle ring.");
            return;
        }
        this.Text = this.node.getComponentInChildren(cc.Label) || this.node.getComponentInChildren("TextControl") || this.node.getComponentInChildren(cc.RichText);
        if(this.Text){
            this.TextNode = this.Text.node;
        }else{
            this.TextNode          = new cc.Node("Text");
            this.TextNode.parent   = this.node;
            this.TextNode.position = cc.v2(0, 0);
            this.Text              = this.TextNode.addComponent(cc.Label);
        }
        this.LastTime = 0;
        if(!this.tweenNum){
            this.tweenNum = cc.tween(this.TextNode)
                              .to(0.2, { scale : this.warinigTextSize })
                              .to(0.3, { scale : 1 });
        }
        this.wasSet = this.Text !== null && this.CDCircle !== null;//設置完成無誤
    },
    
    update(dt){
        //避免分母等於0的溢出現象，直接不顯示
        if(this.CD == 0 || !this.wasSet){
            this.node.opacity = 0;
            return;
        }
        this.DCD -= dt;//時間倒數中
        let showTime    = Math.floor(this.DCD) + 1;//顯示的時間
        let CDfillRange = this.DCD / this.CD;//0～1 圓圈填滿程度
        if(this.DCD > 0){
            //還剩餘時間就顯示
            this.CDCircle.fillRange = CDfillRange < 0 ? 0 : CDfillRange;//圖片顯示剩餘時間條
            this.Text.string        = showTime.toString();//文字剩餘時間
            if(this.LastTime != showTime){//不在每個Frame做的事情放這邊
                if(this.warningCD > 0 && showTime <= this.warningCD){//進入警告時間內
                    //設置警告顏色
                    this.CDCircle.node.color = this.warningRingColor;
                    this.TextNode.color      = this.warningTextColor;
                    //設置警告動態(tween)以及回收用變數    
                    this.tweenNum.start();
                    
                }else{
                    //不在警告時間內，設置為正常顏色
                    this.CDCircle.node.color = this.normalRingColor;
                    this.TextNode.color      = this.normalTextColor;
                }
                //無論顏色是否變化，等到設置完成後才顯示
                this.node.opacity = 255;
            }
        }else{
            //沒剩餘時間就藏起來      
            this.CD                  = 0;
            this.DCD                 = 0;
            this.node.opacity        = 0;
            this.CDCircle.node.color = this.normalRingColor;
            this.TextNode.color      = this.normalTextColor;
            if(this.endTimerCallBack){
                this.endTimerCallBack();
            }
            this.enabled = false;
        }
        //紀錄時間(秒)用來實現每秒執行一次的部分
        this.LastTime = showTime;
    },
    
    onDestroy(){
        if(this.tweenNum){
            this.tweenNum.stop();
            this.tweenNum = null;
        }
    },
});
