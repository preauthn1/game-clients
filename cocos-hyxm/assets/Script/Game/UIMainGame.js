let GameG = require("GameGlobal")
let gameData = require("GameData")
let gameConfig=require("GameConfig")

let rootRect = null
let rootBackground = null
let rootSlot = null
let rootJackpotPool = null

/** 用途: 遊戲類型-main game介面(對應gameData.EnumGameType.MainGame) */
var UIMainGame = {
    /** 初始化 */
    Init(root){        
		rootRect = root
		rootRect.active = false
        
        let self = this

		rootBackground = cc.find("Canvas/GameLayer/MainGame")
		rootBackground.active = true
		// 盤面存放位置
		rootSlot = cc.find("Canvas/GameLayer/MainGame/RootSlot")
        // 獎金池存放位置
		rootJackpotPool = cc.find("Canvas/GameLayer/MainGame/RootJackpotPool")
        
		// 停止按鈕
		this.btnStop = cc.find("ButtonStop",root).getComponent(cc.Button)
		this.SetBtnStopEnabled(false)
		// 開始按鈕	
		this.btnStart = cc.find("ButtonStart",root).getComponent(cc.Button)		
        // 手動按鈕
        this.txtManual = cc.find("ButtonManual/Text",root).getComponent(cc.Label)
		this.btnManual = cc.find("ButtonManual",root).getComponent(cc.Button)
		// 自動按鈕
		this.btnAuto = cc.find("ButtonAuto",root).getComponent(cc.Button)
		// 加速按鈕
		this.btnSpeedUp = cc.find("ButtonSpeedUp",root).getComponent(cc.Button)
		this.btnSpeedUp.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.ChangeTimeScale(2) 
		})
		// 減速按鈕
		this.btnSlowDown = cc.find("ButtonSlowDown",root).getComponent(cc.Button)
		this.btnSlowDown.node.on('click',function(){ 
			GameG.PlayGameSound("se_click")
			self.ChangeTimeScale(1) 
		})
		// 切換下注金額
	    this.btnChip = cc.find("ButtonChip",root).getComponent(cc.Button)
	    this.btnChipDecrease = cc.find("ButtonChipDecrease",root).getComponent(cc.Button)
	    this.btnChipIncrease = cc.find("ButtonChipIncrease",root).getComponent(cc.Button)
		// 賠付表
	    this.btnPayTable = cc.find("ButtonPayTable",root).getComponent(cc.Button)
		// 設定介面
		this.btnSetting = cc.find("ButtonSetting",root).getComponent(cc.Button)
		// 離開遊戲
		this.btnExit = cc.find("ButtonExit",root).getComponent(cc.Button)
		this.btnExit.node.on('click',function(){
			GameG.ExitGame()
		})
		let Referrer = gameConfig.getReferrer()
        if (Referrer == "0")
            this.btnExit.interactable = false
        else
			this.btnExit.interactable = true
			
		// 熊貓動畫
		this.animPanda = cc.find("panda_c_ske", root).getComponent(dragonBones.ArmatureDisplay)
    },
    /** 盤面存放位置(依遊戲畫面需求，切換層級用) */
	GetRootSlot(){
		return rootSlot
	},
    /** 獎金池存放位置(依遊戲畫面需求，切換層級用) */
	GetRootJackpotPool(){
		return rootJackpotPool
	},
    /** 顯示介面 */
    Show(){
		if(gameData.GetGameTypeIndex() != gameData.EnumGameType.MainGame){
			GameG.PlayGameBGM("bgm_mg")
		}
		GameG.LogProcess("[UIMainGame] Show")
		rootRect.active = true
		rootBackground.active = true
		gameData.SetGameTypeIndex(gameData.EnumGameType.MainGame)		
    },
    /** 關閉介面 */
    Hide(){
		GameG.LogProcess("[UIMainGame] Hide")
		rootRect.active = false
		rootBackground.active = false
	},

    /** 輪軸開始轉動 */
	SetStartSpin(){
		
	},

	/** 停止旋轉 */
	SetStopSpin(){
		this.SetBtnStopEnabled(false)
	},    
    //////////////////////////////////////////////////////////////////////////////  
    /** 開始按鈕回調 */
    SetBtnStartCallback(callback){
        this.btnStart.node.on('click',function(){
            GameG.PlayGameSound("se_click")
            if(callback != null){
                callback()
            }
		})
    },
 	/** 開始按鈕開關 */
	SetBtnStartEnabled(enabled){
		this.btnStart.node.active = enabled
	},
    //////////////////////////////////////////////////////////////////////////////  
    /** 停止按鈕回調 */
    SetBtnStopCallback(callback){        
		this.btnStop.node.on('click',function(){
			GameG.PlayGameSound("se_click")
            if(callback != null){
                callback()
            }
		})
    },
	/** 停止轉動按鈕 */
	SetBtnStopEnabled(enabled){
		this.btnStop.node.active = enabled
	},
    //////////////////////////////////////////////////////////////////////////////  
	/** 加速按鈕開關 */
	SetBtnSpeedUpEnabled(enabled){
		this.btnSpeedUp.node.active = enabled
	},

	/** 減速按鈕開關 */
	SetBtnSlowDownEnabled(enabled){
		this.btnSlowDown.node.active = enabled
	},
    //////////////////////////////////////////////////////////////////////////////  
	/** 設定按鈕回調 */
    SetBtnSettingCallback(callback){
		this.btnSetting.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			if(callback != null){
				callback()
			}
		})
	},
	/** 設定按鈕開關 */
	SetBtnSettingEnabled(enabled){
		this.btnSetting.node.active = enabled
	},
    //////////////////////////////////////////////////////////////////////////////  
	/** 賠付表按鈕回調 */
    SetBtnPayTableCallback(callback){
	    this.btnPayTable.node.on('click',function(){
			GameG.PlayGameSound("se_click")
            if(callback != null){
                callback()
            }
	    })	
    },
	/** 賠付表按鈕開關 */
	SetBtnPayTableEnabled(enabled){
		this.btnPayTable.node.active = enabled
	},
    //////////////////////////////////////////////////////////////////////////////  
    /** 手動旋轉按鈕回調 */
    SetBtnManualCallback(callback){
        this.btnManual.node.on('click',function(){
			GameG.PlayGameSound("se_click")
            if(callback != null){
                callback()
            }
		})
    },
	/** 手動旋轉按鈕開關 */
	SetBtnManualEnabled(enabled){
		this.btnManual.node.active = enabled
	},
	//////////////////////////////////////////////////////////////////////////////  
	/** 設置自動旋轉次數 */
    SetAutoSpinLeftCount(count){
        this.txtManual.string = count -1
        if(count == -1){
            this.txtManual.string = "∞"
        }
    }, 
    /** 自動按鈕回調 */
    SetBtnAutoCallback(callback){        
	    this.btnAuto.node.on('click',function(){
			GameG.PlayGameSound("se_click")
            if(callback != null){
                callback()
            }
		})
    },
	/** 自動按鈕開關 */
	SetBtnAutoEnabled(enabled){
		this.btnAuto.node.active = enabled
	},

    /** 關閉自動下注 */
    SetCloseAutoSpin(){
        this.SetBtnStartEnabled(true)
        this.SetBtnManualEnabled(false)
    },
    //////////////////////////////////////////////////////////////////////////////    
    /** 下注按鈕回調 */
    SetBtnChipCallback(callback){
	    this.btnChip.node.on('click',function(){
			GameG.PlayGameSound("se_click")
            if(callback != null){
                callback()
            }
	    })	
    },
	/** 減少下注按鈕回調 */
    SetBtnChipDecreaseCallback(callback){
	    this.btnChipDecrease.node.on('click',function(){
			GameG.PlayGameSound("se_click")
            if(callback != null){
                callback()
            }
	    })	
    },
	/** 增加下注按鈕回調 */
    SetBtnChipIncreaseCallback(callback){
	    this.btnChipIncrease.node.on('click',function(){
			GameG.PlayGameSound("se_click")
            if(callback != null){
                callback()
            }
		})
    },
	/** 下注按鈕開關 */
	SetBtnChipEnabled(enabled){
		this.btnChip.node.active = enabled
		this.btnChipIncrease.node.active = enabled
		this.btnChipDecrease.node.active = enabled
    },
    //////////////////////////////////////////////////////////////////////////////
	/** 設定按鈕狀態 */
	SetInteractable(enabled){
		this.btnStart.interactable = enabled
		this.btnChipIncrease.interactable = enabled
		this.btnChipDecrease.interactable = enabled
		this.btnPayTable.interactable = enabled
		this.btnAuto.interactable = enabled
		this.btnSetting.interactable = enabled
		this.btnChip.interactable = enabled
    },
    //////////////////////////////////////////////////////////////////////////////
    /** 更改遊戲速度 */
	ChangeTimeScale(scale){
		GameG.ChangeTimeScale(scale)
		this.SetBtnSpeedUpEnabled(scale == 1)
		this.SetBtnSlowDownEnabled(scale > 1)
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 中獎場景動畫 */
	ShowWinMoneyAnimation(data){
		if(data.WinMoney > 0){
			this.animPanda.playAnimation("MG_panda_win")
			this.animPanda.addAnimation("MG_panda_idle")
		}
	},
    //////////////////////////////////////////////////////////////////////////////
	/** 切換場景動畫 */
	ShowCutSceneAnimation(){
		if(gameData.GetGameModeIndex() != gameData.EnumGameType.MainGame){
			return
		}
		this.animPanda.playAnimation("MG_start_lightning")
		this.animPanda.addAnimation("MG_panda_idle")
	}
};

module.exports = UIMainGame