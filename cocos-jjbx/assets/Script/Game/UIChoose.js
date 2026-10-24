var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameModel= require("GameModel")
var uislot = null
var utilities = require("MUtilities")
let MDoTween = require("MDoTween")
let MCountdown = require("MCountdown")
let Gold
let Choose
let Click
let CoinRing

var UIChoose = {
	extends: cc.Component,

//離開遊戲
	onExit(){
		
	},

	Init(root, closeDoorFunc){
		uislot = require("UISlot")

		this.rootRect = root
		this.rootRect.active =(false)
			
		this.doTween = new MDoTween(root)
		let self = this
		this.Door = {}
		this.Door.rootRT = cc.find("Door",this.rootRect)
		this.Door.imgBg = cc.find("Door/Bg",this.rootRect).getComponent(cc.Sprite)
		this.Door.whiteRT = cc.find("Door/White",this.rootRect)
		this.Door.whitePosY = this.Door.whiteRT.position.y
		this.Door.starParticle = cc.find("Door/White/freegame_ball",this.rootRect).getComponent("AnimationParticle")
		this.Door.SetActive = function(isActive){
			self.Door.rootRT.active =(isActive)
		}
		this.Door.Close = function(isUpDown){
			if(isUpDown){		
				GameG.PlayGameSound("se_cutscenes01")
			} 
			else{
				GameG.PlayGameSound("se_cutscenes02")
			}
		// 117是白色霧的高度
			let y1 = self.rootRect.height + 234
			let y2 = self.Door.whitePosY
			if(isUpDown == false){
				y1 = -y1
				y2 = -y2
			}
			self.rootRect.active =(true)
			self.Door.starParticle.play()
			self.Door.SetActive(true)
			self.Door.imgBg.node.opacity = 255
			self.Door.rootRT.position = cc.v2(0, y1)
			self.Door.whiteRT.position = cc.v2(0, y2)
			self.doTween.DOMove(self.Door.rootRT, cc.v2(0, 0), 1.8)
		}
		this.Door.Open = function(callback){
			self.Door.starParticle.stop()
			self.doTween.DOAlpha(self.Door.imgBg.node, 255, 0, 0.9)
			GameG.NewDelayOnce(function(){
				self.Door.SetActive(false)
				self.Hide()
				if(callback != null){
					callback()
				}
			}, 1)
		}
		
		Gold = {}
		Gold.root = cc.find("Gold",this.rootRect)
		Gold.imgGoldWin = cc.find("Gold/ImgGoldWin",this.rootRect).getComponent(cc.Sprite)
		Gold.txtGoldWin = cc.find("Gold/TextGoldWin",this.rootRect).getComponent("TextControl")
		Gold.goldValue = 0
		Gold.SetTextGold = function(value){
			Gold.goldValue = value
			Gold.txtGoldWin.string = GameG.AbbreviateNumber(Gold.goldValue, true)
			utilities.AdjustTextSize(Gold.txtGoldWin, 7, 0.1)
		}
		Gold.AddTextGold = function(value){
			Gold.SetTextGold(Gold.goldValue + value)
		}
		Gold.SetActive = function(isActive){ 
			Gold.root.active =(isActive)
		}
		Gold.Show = function(){
			Gold.SetActive(true)
			self.doTween.DOAlpha(Gold.imgGoldWin.node, 0, 255, 0.3)
			self.doTween.DOAlpha(Gold.txtGoldWin.node, 0, 255, 0.3)
		}
		Gold.SetActive(false)
		
		Choose = {}
		Choose.root = cc.find("Choose",this.rootRect)
		Choose.SetActive = function(isActive){
			Choose.root.active =(isActive)
		}
		Choose.SetActive(false)
		Choose.imgChoose = cc.find("Choose/ImgChoose",this.rootRect).getComponent(cc.Sprite)
		Choose.frame = cc.find("Choose/Frame",this.rootRect)
		Choose.frameAnim = cc.find("Choose/Frame",this.rootRect).getComponent(cc.Animation)
		Choose.ShowFrame = function(pos){
			Choose.SetFrameActive(true)
			Choose.frameAnim.play("JJBX_Pick")
			Choose.frame.position = pos
		}
		Choose.SetFrameActive = function(isActive){
			Choose.frame.active =(isActive)
		}
		Choose.SetFrameActive(false)
		Choose.Card = []
		Choose.imgBBg = cc.find("Choose/BBg",this.rootRect).getComponent(cc.Sprite)
		Choose.grid = cc.find("Choose/CardGrid",this.rootRect).getComponent(cc.Layout)
		Choose.SetGridSize = function(sizeValue){
			let size = cc.size(201 * sizeValue, 357 * sizeValue)
			Choose.grid.cellSize = size
		}
		Choose.SetGridSize(1)
		Choose.chooseData = null
		Choose.isTouch = false
		Choose.cards = []
		for(let  i = 1;  i <=  6; ++ i){
			Choose.cards[i] = {}
			Choose.cards[i].data = null
			Choose.cards[i].SetData = function(data){
				Choose.cards[i].data = data
				
				if(data.Option.Data != null && data.Option.Data.length > 0){
					JSON.parse(data.Option.Data,function(k, v){
						if(k == "info"){
							Choose.cards[i].SetCountText(v)
						}
					})
				} 
				else{
					Choose.cards[i].SetCountText("")
				}
			}
			Choose.cards[i].countText = cc.find("Choose/CardGrid/CardBtn_"+i+"/CountText",this.rootRect).getComponent("TextControl")
			Choose.cards[i].SetCountText = function(count){
				Choose.cards[i].countText.string = count
			}
			Choose.cards[i].btn = cc.find("Choose/CardGrid/CardBtn_"+i,this.rootRect).getComponent(cc.Button)
			Choose.cards[i].btn.node.on('click', function(){ Choose.cards[i].btnClickEvent()})
			Choose.cards[i].btnClickEvent = function(){
				
				if(Choose.isTouch == false){
					//console.log("AAA 還不能點")
					return
				}
				
				if(Choose.chooseData != null){
					//console.log("已經選擇了 : ", Choose.chooseData.ID)
				} 
				else{
					GameG.PlayGameSound("se_featureselect")
					//console.log("選擇 : ", Choose.cards[i].data.Options.ID)
					Choose.chooseData = Choose.cards[i].data
					Choose.ChooseCard(i)
					
					gameData.FreeSelectIndex = i
					gameData.SelectGameOptionsData = null
					
					self.countdown.Stop()
					GameG.NewDelayOnce(function(){
					
					// 關門
						self.Door.Close(true)
						
					// 等待門關好
						GameG.NewDelayOnce(function(){
							
						// 關閉金幣
							Gold.SetActive(false)
						// 關閉選擇						
							Choose.SetActive(false)
							
							if(closeDoorFunc != null){
								closeDoorFunc()
							}
							
						// 等待
							GameG.NewDelayOnce(function(){							
									
							// 送Server遊戲選擇
								let param = []
								param.Option = Choose.chooseData.Option
								gameModel.SendChooseGameOptions(param)
							}, 1)
						}, 1.5)
					}, 1)
				}
			}
		}
		Choose.ChooseCard = function(index){		
			for(let i in (Choose.cards)){ 
				let j = Choose.cards[i] 

				if(j.btn.node.active){
					if(i == index){
						let color = cc.Color.WHITE
						self.doTween.DOColor(j.btn.node, j.btn.node.color, color, 0.3)
						self.doTween.DOColor(j.countText.node, j.countText.node.color, color, 0.3)
						
					// 選擇框
						Choose.ShowFrame(GameG.LocalConvertWorldPointAR(j.btn.node))
					} 
					else{
						let color = cc.Color.GRAY
						self.doTween.DOColor(j.btn.node, j.btn.node.color, color, 0.3)
						self.doTween.DOColor(j.countText.node, j.countText.node.color, color, 0.3)
					}
				}
			}
		}
		Choose.SetCardBtnEnable = function(list){
			if(list.length +1 != Choose.cards.length){
				console.log("!!!!!!!!!!!! SetCardBtnEnable error")
				return
			}
			
			for(let i in (Choose.cards)){ 
				let j = Choose.cards[i] 
				if(list[i -1] == 1){
					j.btn.node.active =(true)
				} 
				else{
					j.btn.node.active =(false)
				}
			}
		}
		Choose.Show = function(goldMoney){
			let colorStart = 0
			let colorEnd = 255
			
			self.doTween.DOAlpha(Choose.root, colorStart, colorEnd, 1)

			let count = 0
			for(let i in Choose.cards){ 
				if(Choose.cards[i].data != null){
					count = count +1
				}
			}
			
			Choose.grid.node.width = count * Choose.grid.cellSize.width + (count -1) * Choose.grid.spacingX	
			Choose.SetFrameActive(false)
			Choose.SetActive(true)
		}
		Choose.SetIsTouch = function(isTouch){
			Choose.isTouch = isTouch
		}
		Choose.Reset = function(){
			Choose.chooseData = null
			Choose.SetIsTouch(false)
			for(let i in (Choose.cards)){ 
				let j = Choose.cards[i] 

				j.btn.node.opacity = 255
				j.countText.node.opacity = 255
			}
		}
		
	// 金幣環點擊特效
		Click = {}
		Click.root = cc.find("Click",root)
		Click.particle = cc.find("Particle",Click.root)
		Click.particle.active =(false)
		Click.prefabPool = cc.find("Click",root).getComponent("ObjectPool")
		Click.Play = function(pos){

			let pool = Click.prefabPool.get("Particle")
			pool.active = true
			pool.parent = Click.prefabPool.node
			pool.position = pos
			pool.scale = 1

			let particle = pool.getComponent("AnimationParticle")
			particle.play()		

			GameG.NewDelayOnce(function(){
				Click.prefabPool.free("Particle", pool)
			}, 1)
		}
		
	// 金幣環
		CoinRing = {}
		CoinRing.root = cc.find("CoinRing",root)
		CoinRing.particle = cc.find("Particle",CoinRing.root)
		CoinRing.particle.active =(false)
		CoinRing.prefabPool = cc.find("CoinRing",root).getComponent("ObjectPool")
	// 播放特效飛
		CoinRing.Play = function(startPos, endPos, t, endFunc){
			let pool = CoinRing.prefabPool.get("Particle")
			pool.active = true
			pool.parent = CoinRing.prefabPool.node
			pool.position = startPos
			pool.scale = 1

			let particle = pool.getComponent("AnimationParticle")	
			particle.play()
			
			self.doTween.Create(pool)
				.to(t, { position: endPos})
				.call(function(){
					if(endFunc != null){
						endFunc()
					}
					Click.Play(endPos)
					
					self.doTween.IntervalCallback(1, function(){
						CoinRing.prefabPool.free("Particle", pool)
					})
				})
				.delay(0.1)
				.call(function(){
					pool.active = false
				})
				.start()
		}
		
	// 倒數計時
		this.countdown = new MCountdown(cc.find("Countdown/Text",root))
		this.countdown.Init(cc.find("Countdown/Text",root).getComponent("TextControl"), gameData.CountdownTimeMax, gameData.CountdownTimeShow, function(){
		// console.log("UIChoose 自動選擇")
			let optionsData = gameData.SelectGameOptionsData
			if(optionsData.Options.length > 0){
				
				let list = []
				for(let i in (Choose.cards)){ 
					let j = Choose.cards[i] 
					
					if(j.btn.node.active){
						if(j.data != null){
							list.push(j)
						}
					}
				}
				
				let index = GameG.MathRandom(0, list.length)
			// console.log("!!!!!!!!!!!! 選擇了 : ", #list, index)
				list[index].btnClickEvent()
			} 
			else{
				console.log("!!!!!!!!!!!!!!!!!! SelectGameOptionsData 沒有資料")
			}
		})
	},

//取得目前是否在free spin
	InState(){
		if(this.rootRect.active == true){
			return true
		} 
		else{
			return false
		}
	},

// 顯示介面
	Show(isSpinHad){
	
		let optionsData = gameData.SelectGameOptionsData
		
		if(optionsData == null){
			return false
		}
		let times = optionsData.Times
		let goldMoney = optionsData.Data.GMoney
		let options = optionsData.Options
		let reelResult = optionsData.ReelResult
		
		let compare = function(obj1, obj2){
			return obj1.ID < obj2.ID
		}
		let self = this	
	// 排序
	// table.sort(options, compare)
		
		if(times > 0){
			
		// 選擇重置
			Choose.Reset()
			
		// 啟動表
			let enableList = [ 0, 0, 0, 0, 0, 0]
			
			for(let i in (options)){ 				
				let data = []
				data.Times = times
				data.Option = options[i]
				
				let index = parseInt(i) +1
			// FreeGame依照順序
				if(data.Option.Type == "free_spins"){
					enableList[i] = 1
					Choose.cards[index].SetData(data)
			// Lightning最後一個
				} 
				else if(data.Option.Type == "lightning"){
					enableList[enableList.length -1] = 1
					Choose.cards[enableList.length].SetData(data)
				} 
				else{
					console.log("!!!!!!!!!!!!!! 沒有這個 Tpye", data.Option.Type)
				}
			}
			
			this.rootRect.active =(true)
		// 關門
			self.Door.SetActive(false)
		// 設定按鈕啟動
			Choose.SetCardBtnEnable(enableList)
			
		// 完成
			let CompleteFunc = function(){	
				GameG.PlayGameBGM("bgm_fm")	
				Choose.SetIsTouch(false)
				Choose.Show(goldMoney)
			// 延遲 - 開點擊並開始計時
				GameG.NewDelayOnce(function(){
					Choose.SetIsTouch(true)
				// 計時開始
					self.countdown.Start()
				}, 1)
			} 
			
		// 不是斷線復原
			if(isSpinHad){
			// 設定牌面
				uislot.SetReelResult(reelResult)
				Gold.Show()
				Gold.SetTextGold(0)
				let soundCount = 0
				// 鬧鐘
				GameG.PlayGameSound("se_fstrigger")

				let Sequence = this.doTween.Create()
				Sequence.delay(2)
				for(let i in (reelResult)){ 
					let j = reelResult[i] 

					
					if(j.Symbol.SymbolName.match("g")){
						
						let symbol = j.Symbol
						let position = j.Position
						let symbolTarget = uislot.GetSymbol(position.Reel, symbol.SymbolID)
						let money = symbolTarget.gValue
						
						if(symbolTarget != null){
							let t = 0.5
							Sequence.delay(t)
							Sequence.call(function(){
								soundCount = soundCount + 1
								let value = soundCount
								if(value > 15){value = 15}
								let soundID = value.toString()
								if(soundID.length < 2){
									soundID = "0" + soundID
								}
								// console.log("soundID : ", soundID)
								GameG.PlayGameSound("se_redcount"+soundID)
								// 飛金幣環
								let startPosition = GameG.LocalConvertWorldPointAR(symbolTarget.imgIcon.node)
								let endPosition = GameG.LocalConvertWorldPointAR(Gold.txtGoldWin.node)
								CoinRing.Play(startPosition, endPosition, t, function(){
									Gold.AddTextGold(money)
								})
							})
						} 
						else{
							console.log("!!!!!!!!!!!!! 找不到 Symbol")
						}
					}
				}
				Sequence.delay(1)
				Sequence.call(function(){ CompleteFunc()})
				Sequence.start()
			} 
			else{
				Gold.SetActive(true)
				Gold.SetTextGold(goldMoney)
				CompleteFunc()
			}
			return true
		} 
		else{
			return false
		}
	},

// 關閉介面
	Hide(){
		this.rootRect.active =(false)	
	},

// 回合開始
	SetGameStart(){	
	
	},

// 回合結束
	SetGameEnd(){
		
	},

// 開始遊戲
	StartGame(){
	},


};

module.exports = UIChoose
