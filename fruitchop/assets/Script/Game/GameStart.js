let GameG = require("GameGlobal")
let UIManager = require("UIManager")
let networkQueue = require("NetworkQueue");
let GameData = require("GameData")
let GameManager = require("GameManager")

cc.Class({
    extends: cc.Component,

    properties : {
      sound_BGM : {
          default: null,
          type : cc.AudioClip,
      },
  },

    onLoad () {
      GameG.initSchedule(this)

      let self=this
      cc.game.on(cc.game.EVENT_HIDE, function () {
        console.log("游戏进入后台");
        GameManager.closeConnect()
        self.FruitManager.end() // 避免進到後台還持續丟水果
      }, this);

      cc.game.on(cc.game.EVENT_SHOW, function () {
        console.log("重新返回游戏");
        GameManager.closeConnect()
        GameManager.clearGameStart()
        self.RequestReloadScene();
      }, this);      
    },

    start () {

      GameG.PlayBGM(this.sound_BGM)

      GameG.InitRolePic()
      GameData.init()
      
      this.Control = this.node.getComponent("Control")
      this.GameModel = this.node.getComponent("GameModel")
      this.GameLayer = cc.find("GameLayer", this.node).getComponent("GameLayer")
      this.FruitManager = cc.find("UIGame/FruitManager", this.GameLayer.node).getComponent("FruitManager")

      this.Control.init()
      this.GameModel.init(this)
      this.FruitManager.init(this)
      this.GameLayer.init(this)

      networkQueue.Resume()
      UIManager.HideLoading()

      if(window.AutoGame == true){
        let AutoBtn = cc.find("Canvas/Auto")
        AutoBtn.active = true
      }
    },

    RequestReloadScene()
    {
      console.error("**************** RequestReloadScene")

      GameManager.closeConnect()
      GameManager.clear()
        
      cc.director.loadScene("GameLoading");        
    }, 
});
