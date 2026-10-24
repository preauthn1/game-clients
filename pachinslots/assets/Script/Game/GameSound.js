var GameG = require("GameGlobal")

cc.Class({
    extends: cc.Component,

    properties: {
        preLoadData: {
            default: [],
            type: cc.String,
            displayName: "預先下載聲音",
        },

        background: {
            default: [],
            type: cc.String,
            displayName: "背景音樂",
        },

        startSpin: {
            default: [],
            type: cc.String,
            displayName: "開始Spin",
        },
        stopSpin: {
            default: [],
            type: cc.String,
            displayName: "停止Spin",
        },
        loopSpin: {
            default: [],
            type: cc.String,
            displayName: "Spin中",
        },
        
        showUI: {
            default: "",
            displayName: "顯示介面",
        },
        closeUI: {
            default: "",
            displayName: "關閉介面",
        },
        clickButton: {
            default: "",
            displayName: "按下按鈕",
        },
    },

    playBackGround(mode){
        let name = this.background[mode]
        if (name == null || name == ""){
            name = this.background[0]
        }
        GameG.PlayGameBGM(name, false)
    },

    playStartSpin(mode){
        let name = this.startSpin[mode]
        if (name == null || name == ""){
            name = this.startSpin[0]
        }
        GameG.PlayGameSound(name, false)
    },

    playStopSpin(mode){
        let name = this.stopSpin[mode]
        if (name == null || name == ""){
            name = this.stopSpin[0]
        }
        GameG.PlayGameSound(name, false)
    },

    playLoopSpin(mode){
        let name = this.loopSpin[mode]
        if (name == null || name == ""){
            name = this.loopSpin[0]
        }
        GameG.PlayGameSound(name, false)
    },

    stopLoopSpin(mode){
        mode=1
        let name = this.loopSpin[mode]
        if (name == null || name == ""){
            name = this.loopSpin[0]
        }        
        GameG.CloseLoopSound(name)
    },

    playShowUI(){
        GameG.PlayGameSound(this.showUI, false)
    },

    playCloseUI(){
        GameG.PlayGameSound(this.closeUI, false)
    },

    playButton(){
        GameG.PlayGameSound(this.clickButton, false)
    },

    playSound(name, isLoop = false){
        GameG.PlayGameSound(name, isLoop)
    },

    stopSound(name) {
        GameG.CloseLoopSound(name)
    },    
});
