var GameG = require("GameGlobal");
var GameConfig = require("GameConfig");
var GameData = require("GameData");
var UIManager = require("UIManager");

cc.Class({
    extends: cc.Component,

    properties : {
        sound_GameStart : {
            default: null,
            type : cc.AudioClip,
        },
        sound_GameOver : {
            default: null,
            type : cc.AudioClip,
        },
        sound_Countdown : {
            default: null,
            type : cc.AudioClip,
        },
        hole : {
            default: [],
            type : cc.Node,
        },
        maxLength: 60, // 最大力量
        velocityAddition: 200, // 力量加成
        damging: 4, // 衰減係數

        ballRoot: cc.Node,
        ballAttach: cc.Node,
        ball: {
            default: [],
            type : cc.Node,
        },        
        fly_ball: {
            default: [],
            type : cc.Node,
        },
        cue_ball: {
            default: [],
            type : cc.Node,
        }, 
    },

    init (GameLayer) {
        this.GameLayer = GameLayer

        this.hide()
        
        this.UIPlayer1 = cc.find("Player1", this.node).getComponent("UIPlayer")
        this.UIPlayer2 = cc.find("Player2", this.node).getComponent("UIPlayer")

        this.PlayerControl1 = cc.find("control_1", this.node).getComponent("PlayerControl")
        this.PlayerControl1.init(this)
        this.PlayerControl1.hideCueBall()
        this.PlayerControl2 = cc.find("control_2", this.node).getComponent("PlayerControl")
        this.PlayerControl2.init(this)
        this.PlayerControl2.hideCueBall() 

        this.UIWait = cc.find("Wait", this.node)
        this.UIWait.active = false
        this.Label_WaitTime = cc.find("label_time", this.UIWait).getComponent(cc.Label)
    },

    /** 新增球
     * index 位置
     * type 類型 0:紅 1:白 2:黑
     */
    newBall(index, type){
        let node = cc.find("ball_" + index.toString(),  this.ballRoot)

        var clone = cc.instantiate(this.ball[type]);
        clone.active = true
        clone.parent = this.ballAttach
        clone.scale = 1
        clone.position = node.position

        let script = clone.getComponent("Ball")
        script.init(this)
        return script
    },

    show(){
        this.node.active = true

        this.newTable()

        // 設定玩家資料
        this.UIPlayer1.clear()
        this.UIPlayer2.clear()

        this.turn = 0

        let data = GameData.getGameSetting()
        if (data != null){
            for (let i = 0; i < data.Players.length; ++i){
                let player = data.Players[i]
                if (player.UserID == GameConfig.getUserID()){
                    this.UIPlayer1.initData(player)
                }
                else{
                    this.UIPlayer2.initData(player)
                }
            }

            // 倒數
            this.UIWait.active = true

            let dateTime = new Date().getTime();
            dateTime = Math.floor(dateTime / 1000)
            this.WaitTime = data.StartTime - dateTime + 1

            this.isPlaySound = false
            this.isUpdateTime = true
            this.updateWatiTime()
        }
        
        this.isBallInHole = [] // 進球資料
    },

    /** 新增桌上所有球 */
    newTable(){
        // 紅球
        this.newBall(1, 0)

        // 白球
        for (let i = 2; i <= 10; ++i){
            this.newBall(i, 1)
        }

        // 黑球
        for (let i = 11; i <= 19; ++i){
            this.newBall(i, 2)
        }
    },

    /** 移除桌上所有球 */
    clearTable(){
        var children = this.ballAttach.children;
        for (var i = 0; i < children.length; ++i) {
            children[i].destroy()
        }
    },

    /** 檢查是否已經清空桌上的所有球 */
    isClear(){
        var children = this.ballAttach.children;
        if (children == 0){
            return true
        }
        else{
            return false
        }
    },

    /** 遊戲開始 */
    gameStart(){
        this.UIWait.active = false

        GameG.PlaySound(this.sound_GameStart) 

        this.roundChange(true)        
    },

    /** 遊戲結束 */
    gameOver(callback){
        GameG.PlaySound(this.sound_GameOver)

        let self = this
        setTimeout(function () {
            self.hide();

            if (callback != null){
                callback()
            }
        }.bind(self), 1 * 1000);
    },

    hide(){
        this.node.active = false
    },

    isShow(){
        return this.node.active
    },

    /** 更換回合 
     * isChange 是否更換完蝦
    */
    roundChange(isChange){
        this.isBallInHole = []

        // 換人
        if (isChange == true){
            // 上一個玩家的球飛出去
            if (this.turn == 1){
                this.turn = 2
                this.PlayerControl1.ballFlyOut()
            }
            else{
                this.turn = 1
                this.PlayerControl2.ballFlyOut()
            }

            // 顯示下一個玩家，球飛進來
            if (this.turn == 1){
                this.UIPlayer1.setTrun(true)
                this.UIPlayer2.setTrun(false)
                this.PlayerControl1.ballFlyIn()
            }
            else{
                this.UIPlayer1.setTrun(false)
                this.UIPlayer2.setTrun(true)
                this.PlayerControl2.ballFlyIn()
            }            
        }
        // 同一個人繼續，重新指定母球位置
        else{
            if (this.turn == 1){
                this.PlayerControl1.resetBall()
            }
            else{
                this.PlayerControl2.resetBall()
            }
        }
    },

    /** 回合結束 */
    roundEnd(isChange){
        let self = this
        let doEnd = function(){
            if (self.isClear() == true){
                self.newTable()
            }
            self.roundChange(isChange)
        }

        // 有球進洞，球飛向玩家
        if (this.isBallInHole.length > 0){
            this.beginFlyBall()
            
            setTimeout(function () {
                doEnd()
            }.bind(this), 1 * 1000);             
        }
        else{
            doEnd()
        }    
    },

    /** 更新等待開始時間 */
    updateWatiTime(){
        let value = Math.floor(this.WaitTime)
        this.Label_WaitTime.string = value.toString()

        // 勝3秒時候播放音效
        if (value <= 3){
            if (this.isPlaySound == false){
                this.isPlaySound = true

                GameG.PlaySound(this.sound_Countdown)
            }
        }
    },

    update(dt){
        // 更新遊戲開始時間
        if (this.isUpdateTime == true){
            this.WaitTime -= dt
            if (this.WaitTime < 0){
                this.WaitTime = 0
                this.isUpdateTime = false
            }
            this.updateWatiTime()
        }
    },

    /**  更新玩家資料 */
    updateRank(data){
        for (let i = 0; i < data.Players.length; ++i){
            let player = data.Players[i]
            if (player.UserID == GameConfig.getUserID()){
                this.UIPlayer1.initData(player)
                this.UIPlayer1.updateData(player)
            }
            else{
                this.UIPlayer1.initData(player)
                this.UIPlayer2.updateData(player)
            }
        }
    },

    /** 母球停止 */
    ballStop(){
        let self = this
        setTimeout(function () {
            // 有進洞 同一個玩家
            if (self.isBallInHole.length > 0){
                self.roundEnd(false)
            }
            else{
                self.roundEnd(true)
            }
        }.bind(self), 0.5 * 1000);
    },

    /** 時間到 */
    timeOut(){
        UIManager.ShowMessage("time out")
        this.roundChange(true)
    },    

    /** 一般球進洞 */
    ballInHole(type, index){
        let obj = this.fly_ball[type - 1]
        if (obj == null){
            return
        }

        // 球掉到洞裡表現
        var clone = cc.instantiate(obj);
        clone.active = true
        clone.parent = obj.parent
        clone.scale = obj.scale

        let node = this.hole[index - 1]
        let startPos = GameG.GetWorldPosition(node)
        clone.position = startPos        

        let player 
        if (this.turn == 1){
            player = this.UIPlayer1
        }
        else{
            player = this.UIPlayer2
        }

        let tween = GameG.NewTween(clone)
        tween.to(0.1, {opacity: 100, scale: 0.5})
        tween.call(function(){
            clone.destroy()
        })
        tween.start()

        this.isBallInHole.push({type:type, startPos:startPos, player:player, obj:obj})
    },
    
    /** 球飛向玩家 */
    beginFlyBall(){
        for (let i = 0; i < this.isBallInHole.length; ++i){
            let data =  this.isBallInHole[i]

            // 球飛向玩家表現
            var clone = cc.instantiate(data.obj);
            clone.active = true
            clone.parent = data.obj.parent
            clone.position = data.startPos
            clone.opacity = 200
            clone.scale = 0.8
    
            let endPos = GameG.GetWorldPosition(data.player.icon)
    
            let tween = GameG.NewTween(clone)
            tween.to(0.8, {opacity: 255, position: endPos, scale: 1})
            tween.delay(0.2)
            tween.call(function(){
                data.player.updateScore(GameData.getScoreByType(data.type))
                clone.destroy()
            })
            tween.start()            
        }
    },

    /** 母球進洞 */
    cueBallInHole(type, index){
        UIManager.ShowMessage("cue ball in the hole")

        let obj = this.cue_ball[type - 1]
        if (obj == null){
            return
        }

        // 母球進洞表現
        var clone = cc.instantiate(obj);
        clone.active = true
        clone.parent = obj.parent
        clone.scale = obj.scale

        let node = this.hole[index - 1]
        let startPos = GameG.GetWorldPosition(node)
        clone.position = startPos        

        let self = this

        let tween = GameG.NewTween(clone)
        tween.to(0.1, {opacity: 100, scale: 0.5})
        tween.call(function(){
            clone.opacity = 0
        })
        // 等待其他球停止
        tween.delay(1)
        tween.call(function(){
            self.roundEnd(true)
            clone.destroy()
        })        
        tween.start()
    },
});
