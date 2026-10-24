let GameG = require("GameGlobal")
let gameData = require("GameData")
let gameConfig=require("GameConfig")

let rootRect = null
let rootBackground = null
let rootSlotground = null

/** 用途: 遊戲類型-main game介面 */
var UIMainGame = {
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = false
        
        let self = this
                
        rootBackground = cc.find("Canvas/GameLayer/MainGame")
		// 盤面存放位置
        rootSlotground = cc.find("Canvas/GameLayer/MainGame/Slotground")
        
		//停止按鈕
		this.btnStop = cc.find("ButtonStop",root).getComponent(cc.Button)
		this.SetBtnStopEnabled(false)
		//開始按鈕	
		this.btnStart = cc.find("ButtonStart",root).getComponent(cc.Button)		
        //手動按鈕
        this.txtManual = cc.find("ButtonManual/Text",root).getComponent(cc.Label)
		this.btnManual = cc.find("ButtonManual",root).getComponent(cc.Button)
		//自動按鈕
		this.btnAuto = cc.find("ButtonAuto",root).getComponent(cc.Button)
		//加速按鈕
		this.btnSpeedUp = cc.find("ButtonSpeedUp",root).getComponent(cc.Button)
		this.btnSpeedUp.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.ChangeTimeScale(2) 
		})
		//減速按鈕
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
		//設定介面
		this.btnSetting = cc.find("ButtonSetting",root).getComponent(cc.Button)
		//離開遊戲
		this.btnExit = cc.find("ButtonExit",root).getComponent(cc.Button)
		this.btnExit.node.on('click',function(){
			GameG.ExitGame()
		})
		let Referrer = gameConfig.getReferrer()
        if (Referrer == "0")
            this.btnExit.interactable = false
        else
            this.btnExit.interactable = true
    },

	SetParentSlotground(root){
		root.parent = rootSlotground
		root.position = cc.v2(0, 0)	
	},
    /** 顯示介面 */
    Show(){
		GameG.PlayGameBGM("bgm_mg")
		gameData.SetGameTypeIndex(0)
		rootRect.active = true
    },
    /** 關閉介面 */
    Hide(){
        rootRect.active = false
        
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
		this.btnStart.node.active =(enabled)
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
		this.btnStop.node.active =(enabled)
	},
    //////////////////////////////////////////////////////////////////////////////  
	/** 加速按鈕開關 */
	SetBtnSpeedUpEnabled(enabled){
		this.btnSpeedUp.node.active =(enabled)
	},
	/** 減速按鈕開關 */
	SetBtnSlowDownEnabled(enabled){
		this.btnSlowDown.node.active =(enabled)
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
		this.btnSetting.node.active =(enabled)
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
		this.btnPayTable.node.active =(enabled)
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
		this.btnManual.node.active =(enabled)
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
		this.btnAuto.node.active =(enabled)
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
		this.btnChip.node.active =(enabled)
		this.btnChipIncrease.node.active =(enabled)
		this.btnChipDecrease.node.active =(enabled)
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
};

module.exports = UIMainGame