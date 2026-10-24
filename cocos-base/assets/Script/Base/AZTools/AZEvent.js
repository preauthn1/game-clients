//import AZEvent from "./AZEvent";            //繼承步驟1
cc.AZState=cc.Enum({
    IDLE : 0,
    INIT : 1,
    DELAY : 2,
    START : 3,
    UPDATE : 4,
    END : 5,
    STOPPING : 10
});

cc.Class({
    // extends : AZEvent,                      //繼承步驟2
    extends : cc.Component,

    properties : {
        eventName : "",
        eventTag : "",
        start_start : {
            default : [],
            type : cc.AZEvent,
            tooltip : "在設置的延遲啟動之後，實際運作開始時，啟動目標事件。"
        },
        start_stop : {
            default : [],
            type : cc.AZEvent,
            tooltip : "在設置的延遲啟動之後，實際運作開始時，停止目標事件。"
        },
        end_start : {
            default : [],
            type : cc.AZEvent,
            tooltip : "在事件運作結束之後，開始目標事件。"
        },
        end_stop : {
            default : [],
            type : cc.AZEvent,
            tooltip : "在事件運作結束之後，停止目標事件。"
        },
        state : {
            default : cc.AZState.IDLE,
            type : cc.AZState
        },
        delay : {
            default : 0,
        },
        delayCounter : {
            default : 0,
            visible : false
        },
        endToDestory : true
    },
    statics : {
        triggerByName : function (gname="", toStart=true) {
            if (gname !== "") {
                let scene=cc.director.getScene();//取得場景
                let ttEvent=scene.getComponentsInChildren("AZEvent");
                let i, l=ttEvent.length;
                for (i=0; i<l; i ++) {
                    if (ttEvent[i].eventName === gname) {
                        if (toStart) ttEvent[i].triggerStart();
                        else ttEvent[i].triggerStop();
                    }
                }
            }
        },
        triggerByTag : function (gtag="", toStart=true) {
            if (gtag !== "") {
                let scene=cc.director.getScene();//取得場景
                let ttEvent=scene.getComponentsInChildren("AZEvent");
                let i, l=ttEvent.length;
                for (i=0; i<l; i ++) {
                    if (ttEvent[i].eventTag === gtag) {
                        if (toStart) ttEvent[i].triggerStart();
                        else ttEvent[i].triggerStop();
                    }
                }
            }
        },
    },

    start() {
        this.delayCounter=0;
    },

    update(dt) {
        let i, l;
        switch (this.state) {
            case cc.AZState.IDLE:
                break;
            case cc.AZState.INIT:
                this.delayCounter=0;
                this.state=cc.AZState.DELAY;
                break;
            case cc.AZState.DELAY:
                this.delayCounter+=dt;
                if (this.delayCounter>=this.delay) {
                    this.state=cc.AZState.START;
                }
                break;
            case cc.AZState.START:
                l=this.start_start.length;
                for (i=0; i<l; i ++) {
                    this.start_start[i].triggerStart();
                }
                l=this.start_stop.length;
                for (i=0; i<l; i ++) {
                    this.start_stop[i].triggerStop();
                }
                this.event_start();
                this.state=cc.AZState.UPDATE;
                break;
            case cc.AZState.UPDATE:
                if (this.event_update()) {
                    this.state=cc.AZState.END;
                }
                break;
            case cc.AZState.END:
                l=this.end_start.length;
                for (i=0; i<l; i ++) {
                    this.end_start[i].triggerStart();
                }
                l=this.end_stop.length;
                for (i=0; i<l; i ++) {
                    this.end_stop[i].triggerStop();
                }
                this.event_end();
                if (this.endToDestory) {
                    this.destroy();
                } else {
                    this.state=cc.AZState.IDLE;
                }
                break;
            case cc.AZState.STOPPING:
                this.event_stop();
                this.state=cc.AZState.IDLE;
                break;
        }
    },

    triggerStart() {
        this.state=cc.AZState.INIT;
    },

    triggerStop() {
        this.state=cc.AZState.STOPPING;
    },

    //延遲後呼叫event_start接著是event_update
    event_start() {

    },
    //event_update跟Update一樣每個frame被呼叫一次，直到return true狀態跳往end或者被triggerStop強制跳往event_stop
    event_update() {
        return true;
    },

    event_stop() {

    },

    event_end() {

    },

    editor : {
        executionOrder : - 10,//繼承者從-9開始往0遞增
        menu : "AZEventComponent/DefaultEvent",//記得改
    }
});