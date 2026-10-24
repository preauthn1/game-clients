//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G=require("Global");
var GameG=require("GameGlobal");
var fmg=require("FFunction");
var SoundManager=require("SoundManager");

var GameAudio={
    extends : cc.Component,

    //- 析构
    onExit() {
        if (SoundManager == null || SoundManager.Instance == null) {
            return
        }
        cc.audioEngine.stop();
    },

    //- 初始化数据
    initData() {
        this.hAudio=[];        // 播放音效句柄
        this.resAudio={};      // 音效资源

        this.resAudio.turn=[];
        // this.resAudio.turn[1]=["", "adBetStart", "adBetStartMan"];
        this.resAudio.turn[1]=["", "adBetStart"];
        this.resAudio.turn[2]=["", "adBetLast3"];
        // this.resAudio.turn[3]=["", "adBetStop", "adBetStopMan"];
        this.resAudio.turn[3]=["", "adBetStop"];
        this.resAudio.turn[4]=["", "adTurnCardDeal", "adTurnCardShow"];
        this.resAudio.turn[5]=["", "adRst", "adRstTitle"];
        this.resAudio.turn[6]=["", "adBGMRstWin", "adBGMRstLose"];
        this.resAudio.turn[7]=["", "adeBetLast4"];
        this.resAudio.turn[8]=["", "adVS"];
        // this.resAudio.turn[9]=["", "win_longying", "win_heying", "win_huying"];//龍贏 虎贏 和

        this.resAudio.btnClick="adBtnClick";
        this.resAudio.addCoin="adAddCast";
        this.resAudio.outCoin="adOutCast";

        this.resAudio.bgm={};
        this.resAudio.bgm.openCard="adBGMTurnCardOpen";
        this.resAudio.bgm.normal="adBGMNormal";
        this.resAudio.bgm.rstWin="adBGMRstWin";
        this.resAudio.bgm.rstLose="adBGMRstLose";

    },

    // 列表中选中一首
    rand(ary) {
        return ary.length == 1 && ary[1] || ary[Math.random() * ary.length + 1];
    },

    //- 设置音效状态
    soundState(bOn) {
        if (bOn) {
            if (gameData.dtBetState == 0) {
                this.eStartBetBg();
            }
        } else {
            this.eStopBetBg();
        }
    },

    //- 播放背景音乐
    bgmNormal() {
        if (this.hAudio.bgm != this.resAudio.bgm.normal) {
            this.hAudio.bgm=this.resAudio.bgm.normal;
            // SoundManager.PlayBGM(G.GetGamePName(), this.resAudio.bgm.normal);
            GameG.PlayGameBGM(this.hAudio.bgm);
        }
    },

    //- 播放开牌音乐
    bgmOpenCard() {
        if (this.hAudio.bgm != this.resAudio.bgm.openCard) {
            this.hAudio.bgm=this.resAudio.bgm.openCard;
            // SoundManager.PlayBGM(G.GetGamePName(), this.resAudio.bgm.openCard);
            GameG.PlayGameBGM(this.hAudio.bgm);
        }
    },

    //- 播放输/赢牌音乐
    bgmRst(bWin) {
        if (this.hAudio.bgm != this.resAudio.bgm.rstWin) {
            this.hAudio.bgm=bWin && this.resAudio.bgm.rstWin || this.resAudio.bgm.rstLose;
            GameG.PlayGameSound(this.hAudio.bgm, false);
            // SoundManager.PlayBGM(G.GetGamePName(), bgm)
        }
    },

    //- 普通按钮点击音效
    btnClick() {
        GameG.PlayGameSound("ButtonClick", false);
    },

    //- 筹码增加音效
    addCoin() {
        //this.hAudio.addCoin = SoundManager.PlaySound(G.GetGamePName(), this.resAudio.addCoin, false);
        this.hAudio.addCoin=GameG.PlayGameSound(this.resAudio.addCoin, false);
    },

    //- 添加筹码音效
    outCoin() {
        // this.hAudio.addCoin=SoundManager.PlaySound(G.GetGamePName(), this.resAudio.outCoin, false);

        this.hAudio.addCoin=GameG.PlayGameSound(this.resAudio.outCoin, false);
    },

    //- 停止开奖音效
    stopTurnStep() {
        if (this.hAudio.turnStep) {
            this.hAudio.turnStep=this.hAudio.turnStep || [];
            for (let _ in (this.hAudio.turnStep)) {
                let v=this.hAudio.turnStep[_];
                if (v.loop) {
                    GameG.CloseLoopSound(v.res);
                }
            }
            this.hAudio.turnStep=[];
        }
    },

    //- 播放开奖音效
    turnStep(step, args) {
        if (SoundManager == null) {
            return
        }
        this.hAudio.turnStep=this.hAudio.turnStep || [];
        this.stopTurnStep();
        this.hAudio.turnStep=[];
        let res=this.hAudio.turnStep;

        let loop=false;
        let tm=0;
        if (step == 1) {
            res[1]={ res : this.resAudio.turn[1][1], loop : false };
            // res[2]={ res : this.resAudio.turn[1][2], loop : false };
        } else if (step == 2) {
            res[1]={ res : this.resAudio.turn[2][1], loop : false };
        } else if (step == 3) {
            res[1]={ res : this.resAudio.turn[3][1], loop : false };
            // res[2]={ res : this.resAudio.turn[3][2], loop : false };
        } else if (step == 4) {
            res[1]={ res : (args[1] == 1 && this.resAudio.turn[4][1] || this.resAudio.turn[4][2]), loop : false };
        } else if (step == 5) {
            res[1]={ res : (args[1] == 1 && this.resAudio.turn[5][1] || this.resAudio.turn[5][2]), loop : false };
        } else if (step == 6) {
            res[1]={ res : (args[1] && this.resAudio.turn[6][1] || this.resAudio.turn[6][2]), loop : false };
        } else if (step == 7) {
            res[1]={ res : this.resAudio.turn[7][1], loop : false };
        } else if (step == 8) {
            res[1]={ res : this.resAudio.turn[8][1], loop : false };
        } else {
            return;
        }

        for (let _ in (res)) {
            let v=res[_];
            SoundManager.PlaySound(G.GetGamePName(), v.res, v.loop);
        }
        if (tm && tm>0) {
            let self=this;

            GameG.NewDelayOnce(function (adt) {
                self.stopTurnStep();
            }, tm);
        }

    },

    //- 播放龍虎贏
    ePlayPlayerOrBankWin(Number) {
        // GameG.PlayGameSound(this.resAudio.turn[9][Number], false);
    },


};

module.exports=GameAudio;
