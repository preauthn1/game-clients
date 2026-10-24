var G = require( "Global")
var GameG = require( "GameGlobal")
var sf = require("NiuNiuSF")
var UIUserPic = require("UIUserPic")
var UserState = require("UserState")

var pkintervalwidth = 24
var pkgroupwidth = 24
var selfpkintervalwidth = 9

var paixinname = [ ]
paixinname[0] = "小"
paixinname[1] = "炸"
paixinname[2] = "花"
paixinname[3] = "n"
paixinname[4] = "N"
paixinname[5] = "无"
var dxNum = [ ]
dxNum[1] = "一"
dxNum[2] = "二"
dxNum[3] = "三"
dxNum[4] = "四"
dxNum[5] = "五"
dxNum[6] = "六"
dxNum[7] = "七"
dxNum[8] = "八"
dxNum[9] = "九"

function UIUser(root, userdata, selfData) {
	let self = this

	// region 用户相关的功能模块
	// this 当前上下文，userdata需要创建的用户信息，当前用户的信息
	this.SeatNo = 0
	this.UserID = userdata.UserID
	let maxSeatNo = 5
	let seatNo = 0
	let isSelf = true
	let lookon = false
	// 当前玩家扑克牌缩小后的位置及大小
	let pk0min = [ ]
	// 判断是否为当前用户,不是当前用户时需要计算客户端座位
	if (selfData != null && userdata.UserID != selfData.UserID) {
		seatNo = userdata.SeatNo - selfData.SeatNo
		seatNo = G.CaseWhen(seatNo < 0,(maxSeatNo + seatNo), seatNo)
		isSelf = false
	}
	this.UserData = userdata
	this.SeatNo = seatNo

	let pathstart = "bggroup/player" + seatNo

	let ui_player =cc.find(pathstart, root)

	let txt_username =cc.find(pathstart + "/userinfo/username", root).getComponent(cc.Label)
	let txt_coinnum =cc.find(pathstart + "/userinfo/usercoin/coinnum", root).getComponent(cc.Label)

	let img_head =cc.find(pathstart + "/userinfo/head/ico", root).getComponent(cc.Sprite)
	let ui_unonline =cc.find(pathstart + "/userinfo/head/unonline", root)
	let ui_readystate =cc.find(pathstart + "/userinfo/head/readystate", root)

	let ui_texiao =cc.find(pathstart + "/userinfo/zhongxin", root)
	let ui_cashchange =cc.find(pathstart + "/cashchange", root)
	let ui_cashchange_win =cc.find("win", ui_cashchange).getComponent("TextControl")
	let ui_cashchange_lose =cc.find("lose", ui_cashchange).getComponent("TextControl")
	let ui_cashchangetxt =cc.find(pathstart + "/cashchangetxt", root)
	let ui_cashchangetxt_win =cc.find("win", ui_cashchangetxt).getComponent("TextControl")
	let ui_cashchangetxt_lose =cc.find("lose", ui_cashchangetxt).getComponent("TextControl")

	let non_paixin =cc.find(pathstart + "/paixin/non", root).getComponent(cc.Sprite)
	let txt_paixin =cc.find(pathstart + "/paixin/txt", root).getComponent("TextControl")
	let ui_paixin =cc.find(pathstart + "/paixin", root)
	let ui_paixin_dh =cc.find(pathstart + "/paixin/dh", root)
	let ui_beishu =cc.find(pathstart + "/beishu", root)
	let txt_betnum =cc.find(pathstart + "/beishu/num", root).getComponent("TextControl")

	let ui_pkstart =cc.find("bggroup/pkstart", root)
	let ui_pklist =cc.find(pathstart + "/pklist", root)
	let ui_pk0 =cc.find(pathstart + "/pklist/pk0", root)
	let ui_pktop
	if (isSelf) {
		ui_pktop =cc.find(pathstart + "/pklist/pktop", root)
		pk0min =cc.find(pathstart + "/pk0min", root)
	}


	let ui_userstate =cc.find(pathstart + "/userinfo/userstate", root)
	let userstate_zpz =cc.find(pathstart + "/userinfo/userstate/zpz", root)
	let userstate_zpwc =cc.find(pathstart + "/userinfo/userstate/zpwc", root)
	let ui_pkstate_finished =cc.find(pathstart + "/zhupaifinished", root)

	let ui_guest =cc.find(pathstart + "/guest", root)

	// 扑克牌对象
	let ui_pkchild = [ ]

	// 初始化用户头像
	UIUserPic.ResetSpriteByName(img_head, userdata.FaceID.toString())

	// 初始化隐藏对象
	ui_pklist.active =(false)
	ui_beishu.active =(false)
	ui_paixin.active =(false)
	ui_player.active =(true)
	non_paixin.node.active =(false)

	// region 计算扑克牌位置 posNum 第几张牌,step步骤 1发牌,2扣牌,3亮牌, niuNiuRet 牌型
	let  computeCardPos = function(posNum, step, niuNiuRet){
		niuNiuRet = G.CaseWhen(niuNiuRet == null, 0, niuNiuRet)
		let groupIndexs = [ ]
		groupIndexs[0] = 5
		groupIndexs[1] = 4
		groupIndexs[2] = 5
		groupIndexs[3] = 3
		groupIndexs[4] = 3
		groupIndexs[5] = 5
		let groupIndex = groupIndexs[niuNiuRet]
		let target = ui_pk0.position
		if (isSelf && step >= 2) {
			target = pk0min.position
		}
		if (posNum > 0) {
			if (step == 3 && seatNo == 4 && groupIndex < 5) {

			}
			// 当前玩家的计算
			if (isSelf) {
				if (step == 1) {
					let selfpkW = ui_pk0.width + selfpkintervalwidth
					target = cc.v2(target.x + selfpkW * posNum, target.y)
				} 
				else if (step == 2 || posNum <= groupIndex) {
					target = cc.v2(target.x + pkintervalwidth * posNum, target.y)
				} 
				else{
					target = cc.v2(target.x + pkintervalwidth *posNum + pkgroupwidth, target.y)
				}
			} 
			else{
				if (step == 2 || posNum <= groupIndex) {
					target = cc.v2(target.x + pkintervalwidth * posNum, target.y)
				}
				else if (step == 3 && posNum > groupIndex) {
					target = cc.v2(target.x + pkintervalwidth * posNum + pkgroupwidth, target.y)
				}
			}
		}
		return target
	}
	// endregion

	// region 载入补克
	let loadpk = function(img, color, cardNum){
		let imgname = ""
		if (color == -1) {
			img.getComponent(cc.Sprite).spriteFrame = ui_pk0.getComponent(cc.Sprite).spriteFrame
			return
		} 
		else if (color >= 4) {
			imgname = "card_" + color
		}
		else{
			imgname = "card_"+ color.toString() + "_" + cardNum.toString()
		}
		GameG.SetImageSprite(img.getComponent(cc.Sprite), G.GetGamePName(), imgname, false)
	}
	// endregion

	// region 创建扑克牌 posNum第几张，cardinfo牌信息,step步骤 1发牌,2扣牌,3亮牌,isniu 是否有牛,默认有牛
	let createPosCard = function(posNum, cardinfo, step, niuNiuRet){
		niuNiuRet = G.CaseWhen(niuNiuRet != null, niuNiuRet, 0)
		let uicard
		uicard = cc.instantiate(G.CaseWhen(isSelf && step <= 1, ui_pk0, ui_pkstart))
		uicard.parent =(ui_pklist)
		uicard.scale = 1
		if (cardinfo == null || step == 2) {
			loadpk(uicard, -1)
		} 
		else{
			loadpk(uicard, cardinfo.Color, cardinfo.CardNumber)
		}

		uicard.position = computeCardPos(posNum, step, niuNiuRet)
		return uicard
	}
	// endregion

	// 播放牌型声音
	let playPaiXianSound = function(typeid, num){
		let paixinSounds = [ ]
		paixinSounds[0] = "五小牛"
		paixinSounds[1] = "四炸"
		paixinSounds[2] = "五花牛"
		paixinSounds[3] = "牛牛"
		paixinSounds[4] = "牛"
		paixinSounds[5] = "没牛"
		let soundName = G.CaseWhen(userdata.Sex == 0, "男", "女") + "-" + paixinSounds[typeid]
		if (typeid == 4) {
			soundName = soundName + num.toString()
		}
		GameG.PlayGameSound(soundName)
	}

	// region 显示牌型文本
	let showPaiXin = function(typeid, num){
		non_paixin.node.active =(false)
		if (typeid == 4) {
			txt_paixin.text = paixinname[typeid] + dxNum[num]
		}
		else if (typeid == 5) {
			txt_paixin.text = ""
		}
		else{
			txt_paixin.text = paixinname[typeid]
		}
		
		if (typeid == 5) {
			ui_paixin_dh.active =(false)
			non_paixin.node.active =(true)
		}
		else{
			ui_paixin_dh.active =(true)
		}
		if (isSelf) {
			playPaiXianSound(typeid, num)
		}
		ui_paixin.active =(true)
	}
	// endregion

	// region 显示金币变化 num变化数量,isdh 是否播放动画
	this.ShowCashChange = function(num, isdh){
		num = parseInt(num)
		isdh = G.CaseWhen(isdh == null, true, isdh)

		let score = G.CaseWhen(num > 0, "+", "") + G.FormatDecimal(num)
		
		ui_cashchangetxt_win.node.active =(false)
		ui_cashchangetxt_lose.node.active =(false)
		ui_cashchangetxt.active =(true)

		if (isdh != true) {
			if (num > 0) {
				ui_cashchangetxt_win.text = score
				ui_cashchangetxt_win.node.active =(true)
			}
			else{
				ui_cashchangetxt_lose.text = score
				ui_cashchangetxt_lose.node.active =(true)
			}
		}
		else{
			if (num > 0) {
				ui_cashchange_win.text = score
			}
			else{
				ui_cashchange_lose.text = score
			}
		}

		// 如果是当前玩家，且不是旁观，需要播放输赢的音效
		if (isdh == true && isSelf && this.IsLookOn() == false) {
			GameG.PlayGameSound(G.CaseWhen(num > 0, "win", "lose"))
		}
	}
	// endregion

	// 设置用户状态信息
	this.SetUserStateInfo = function(state){
		userstate_zpz.active =(false)
		userstate_zpwc.active =(false)
		ui_userstate.active =(true)
		ui_pkstate_finished.active =(false)

		if (state == UserState.none) {
			ui_userstate.active =(false)
		}
		else if (this.IsLookOn() == false) {
			if (state == UserState.choosebet) {
				ui_userstate.active =(false)
			}
			else if (state == UserState.zhupaizhong) {
				userstate_zpz.active =(true)
			}
			else if (state == UserState.zhupaifinished) {
				userstate_zpwc.active =(true)
				ui_pkstate_finished.active =(true)
			}
			else if (state == UserState.opencard) {
				ui_pkstate_finished.active =(false)
				ui_userstate.active =(false)
			}
		}
	}

	// region 获取玩家飞金币位置
	this.GetGoldPos = function(){
		return GameG.LocalConvertWorldPointAR(img_head.node)
	}

	// endregion

	// region 设置玩家倍数 betNum倍数,step 1抢庄阶段(默认),2确定庄阶段 isQz是否抢庄倍数,默认false
	this.SetBet = function(betNum){
		//local betStr = string.format("x%s", betNum)
		ui_beishu.active =(true)
		txt_betnum.text = betNum
	}
	// endregion

	// region 隐藏玩家倍数
	this.HideBet = function(isAll){
		ui_beishu.active =(false)
	}
	// endregion

	// region 设置用户是否旁观状态
	this.SetLookOn = function(val){
		lookon = val
		this.UpdateInfo(userdata, false)
		if (val == true) {
			ui_guest.active =(true)
		} 
		else{
			ui_guest.active =(false)
		}
	}
	// endregion

	// region 用户是否旁观
	this.IsLookOn = function(){
		return lookon || (userdata.StateValue != 4 && userdata.StateValue != 5)			
	}
	// endregion

	// region 用户离开桌子处理
	this.LeaveRoom = function(){
		ui_player.active =(false)
		this.Destory()
	}
	// endregion

	// region 用户信息更新处理
	this.UpdateInfo = function(data, isCheckSame){
		// 更新用户数据
		if (isCheckSame == false || G.IsSame(userdata, data) == false) {
			txt_username.string = data.UserID.toString()
			txt_coinnum.string = G.FormatDecimal(data.Score)
			ui_unonline.active =(false)
			ui_readystate.active =(false)
			if (data.StateValue == 3 && lookon != true) {
				this.SetUserStateInfo(UserState.none)
				ui_readystate.active =(true)
			} 
			else if (data.StateValue == 5) {
				ui_unonline.active =(true)
			}
			userdata = data
			this.UserData = data
		}
		// 用户数据未变化
		else{

		}
	}
	// endregion

	// region 检查是否有百搭
	this.checkBaida = function(cards){
		let needCheckBaida = false
		for(let k in (cards)){ 
			let v = cards[k] 
			if(v.CardNumber == 17 || v.CardNumber == 16 || v.CardNumber == 15 ){
				needCheckBaida = true
				break
			}
		}

		let showBaida = false
		if(isSelf && needCheckBaida ){
			for(let k1 in (cards)){
				let v1 = cards[k1]
				
				for(let k2 in (cards)){ 
					let v2 = cards[k2]

					for(let k3 in (cards)){ 
						let v3 = cards[k3]

						if(v1.CardNumber != 17 && v1.CardNumber != 16 && v1.CardNumber != 15
							&& v2.CardNumber != 17 && v2.CardNumber != 16 && v2.CardNumber != 15
							&& v3.CardNumber != 17 && v3.CardNumber != 16 && v3.CardNumber != 15
							&& k1 != k2 && k2 != k3	&& k1 != k3){

							let card1 = cards[k1].CardNumber
							if(card1 > 10 ){ 
								if(card1 == 14 ){ 
									card1 = 1
								} 
								else{
									card1 = 10 
								}
							}

							let card2 = cards[k2].CardNumber
							if(card2 > 10 ){ 
								if(card2 == 14 ){ 
									card2 = 1
								} 
								else{
									card2 = 10 
								}
							}

							let card3 = cards[k3].CardNumber
							if(card3 > 10 ){ 
								if(card3 == 14 ){ 
									card3 = 1
								}
								else{
									card3 = 10 
								}
							}

							let count = card1 + card2 + card3
							if(count % 10 == 0 ){
								showBaida = true
								break
							}
						}
					}
				}
			}
		}
		return showBaida
	}
	// endregion

	// region 发牌功能 cards 牌信息,sequence动画序列对象
	this.SendPacker = function(cards, sequence){
		if (this.IsLookOn()) { return }

		// 检查是否有百搭
		let showBaida = this.checkBaida(cards)

		let startPos = GameG.LocalConvertWorldPointAR(ui_pkstart)
		startPos = GameG.WorldConvertLocalPointAR(ui_pklist, startPos)
		
		for(let k in (cards)){ 
			let v = cards[k] 
			let flycard = cc.instantiate(ui_pkstart)
			flycard.parent =(ui_pklist)
			flycard.scale = 1
			flycard.position = startPos

			ui_pkchild[k] = flycard
			ui_pklist.active =(true)
			flycard.active =(true)

			// 发牌移动效果
			let target = computeCardPos(k, 1)
			sequence.delay(0.05)
			sequence.call(function(){
				GameG.PlayHallSound("sendcard")
				let seq = GameG.NewTween(flycard)
				seq.to(0.2, {position: cc.v2(target.x, target.y)})
				seq.call(function(){
					if(isSelf ){
						if(cards[k].CardNumber == 17 || cards[k].CardNumber == 16 || cards[k].CardNumber == 15 ){
							if(showBaida ){
								cc.find("baida", ui_pkchild[k]).active =(true)
							} 
							else{
								cc.find("10", ui_pkchild[k]).active =(true)
							}
						}
					} 
				})
				// 如果是当前玩家的牌需要做翻转和放大动画
				if (isSelf) {
					let targetW = ui_pk0.width
					let targetH = ui_pk0.height					
					seq.delay(0.1)
					// 放大
					seq.to(0.1, {width: targetW, height: targetH})				
					seq.delay(0.2)
					// 翻牌
					seq.to(0.1, {scaleX: 0})
					seq.call( function(){
						// 显示点数
						loadpk(ui_pkchild[k], v.Color, v.CardNumber)
					})
					// 翻到正面
					seq.to(0.1, {scaleX: 1})
				}
				seq.start()		
			})
		}
	}
	// endregion

	// region 开牌
	this.OpenCard = function(userRet){
		this.SetUserStateInfo(UserState.opencard)
		this.DestoryCards()
		for(let k in (userRet.CardGroup)){ 
			let v = userRet.CardGroup[k] 
			let flycard = createPosCard(k, v, 3, userRet.NiuNiuRet)
			ui_pkchild[k] = flycard
			ui_pklist.active =(true)
			flycard.active =(true)
		}
		// 用户牌型显示
		showPaiXin(userRet.NiuNiuRet, userRet.NiuNiuNumber)
	}
	// endregion

	// region 按下自动出牌后扣牌操作
	this.KouPai = function(sequence){
		let duration = 0.5
		for(let k in (ui_pkchild)){ 
			let v = ui_pkchild[k] 
			if (v){
				v.removeComponent(cc.Button)
				// 将牌还原到初始位置
				let target = cc.v3(v.position.x, ui_pk0.position.y, v.position.z)
				v.position = target

				console.log("v",v)
				console.log("find", cc.find("baida", v))
				cc.find("baida", v).active =(false)
				cc.find("10", v).active =(false)
				if (k > 1) {
					sequence.delay(0.1)
				}
				sequence.call(function(){
					let seq = GameG.NewTween(v)
					// 翻牌
					seq.to(duration / 2, {scaleX: 0})
					seq.call( function(){
						GameG.PlayHallSound("turncard")
						// 换成牌背
						loadpk(v, -1)
					} )
					// 牌翻回来
					seq.to(duration / 2, {scaleX: 1})
					seq.start()
				})
				sequence.delay(duration/2 + duration/2)
			}
		}

		for(let k in (ui_pkchild)){ 
			let v = ui_pkchild[k]
			if (v){
				if (k > 1) {
					sequence.delay(0.1)
				}
				sequence.call(function(){
					let pos = computeCardPos(k, 2)
					let seq = GameG.NewTween(v)
					seq.delay(1)
					// 牌缩小同时飞到牌桌
					seq.to(0.5, {position: cc.v2(pos.x, pos.y), width: ui_pkstart.width, height: ui_pkstart.height})
					seq.start()
				})
				sequence.delay(sequence + 0.1 + sequence)
			}
		}
	}
	// endregion

	// region 恢复玩家场景信息(旁观玩家不能调用)
	this.RestoreUserInfo = function(data){
		// 旁观者不处理自己的信息
		if (this.IsLookOn()) { return }
		let createCardStep = [ ]
		createCardStep["2"] = 1
		createCardStep["3"] = 1
		createCardStep["4"] = 3

		// 恢复扑克牌部分
		let restorePK = function(){
			if (data.GameStep < 4 && data.UserPoker != null) {
				self.DestoryCards()
				// 玩家自己是否是在选牌阶段
				let slefChooseCard = false
				if (data.GameStep == 3) {
					if (G.Exists(data.FinishedGroupUsers, function(uid){ return uid == userdata.UserID })){
						createCardStep["3"] = 2
					}
					else{
						if (isSelf == true)
							slefChooseCard = true
					}
				}
				
				let showBaida 
				if (slefChooseCard){
					showBaida = self.checkBaida(data.UserPoker.Cards)
				}
				
				for(let k in (data.UserPoker.Cards)){ 
					let v = data.UserPoker.Cards[k] 

					let flycard
					if (slefChooseCard == false){
						flycard = createPosCard(k, G.CaseWhen(isSelf, v, null), createCardStep[data.GameStep.toString()])
					}
					else{
						flycard = cc.instantiate(ui_pkstart)
						flycard.parent =(ui_pklist)
						flycard.scale = 1
						flycard.position = computeCardPos(k, 1)
						flycard.width = ui_pk0.width
						flycard.height = ui_pk0.height
						loadpk(flycard, v.Color, v.CardNumber)

						if(v.CardNumber == 17 || v.CardNumber == 16 || v.CardNumber == 15 ){
							if(showBaida ){
								cc.find("baida", flycard).active =(true)
							} 
							else{
								cc.find("10", flycard).active =(true)
							}
						}						
					}

					ui_pkchild[k] = flycard
					ui_pklist.active =(true)
					flycard.active =(true)
				}
			}
			else if (data.GameStep == 4) {
				let useret = G.First(data.GameRet.UserRet, function(m){ return m.UserID == userdata.UserID })
				self.OpenCard(useret)
			}
		}

		// 恢复玩家其他信息(倍数信息,输赢情况)
		let restoreOther = function(){
			if (data.GameStep >= 1) {
			// 如果选择倍数,则显示倍数信息
				let bet = G.First(data.GameBaseScore.GameBet, function(b){ return b.UserID == userdata.UserID })
				if (bet != null) {
					self.SetBet(bet.BaseScore)
				}
			}
			if (data.GameStep > 2) {
				// 如果用户已经组牌成功则显示组牌完成,否则显示组牌中
				if (data.GameStep == 3) {
					if (G.Exists(data.FinishedGroupUsers, function(uid){ return uid == userdata.UserID })) {
						self.SetUserStateInfo(UserState.zhupaifinished)
					}
					else{
						self.SetUserStateInfo(UserState.zhupaizhong)
					}
				}

				// 显示输赢情况
				if (data.GameStep == 4) {
					let userRet = G.First(data.GameRet.UserRet, function(m){ return m.UserID == userdata.UserID })
					self.HideBet(true)
					self.ShowCashChange(userRet.WinLose, false)
				}
			}
		}

		restorePK()
		restoreOther()
	}
	// endregion

	// region 回收扑克牌
	this.DestoryCards = function(){
		for(let k in (ui_pkchild)){ 
			let v = ui_pkchild[k] 
			if (v != null) {
				v.destroy()
			}
		}
		ui_pkchild = [ null, null, null, null, null ]
	}
	// endregion

	// region 设置扑克牌单击事件
	this.CardClick = false
	this.SetCardClickEvent = function(cardClickEvent, cards){
		let cardStatusList = [ false, false, false, false, false ]
		for(let k in (ui_pkchild)){ 
			let v = ui_pkchild[k] 
			if (v){
				v.addComponent(cc.Button)
				v.getComponent(cc.Button).node.on('click', function(){
					GameG.PlayGameSound("se_click")
					if (self.CardClick != true) {
						return
					}
					let isChoose = cardStatusList[k]
					if (cardClickEvent(cards[k], isChoose != null)) {
						if (cardStatusList[k] == null)
							cardStatusList[k] = true
						else if (cardStatusList[k] == false)
							cardStatusList[k] = true
						else
							cardStatusList[k] = false
						//cardStatusList[k] = not cardStatusList[k]
						let target = cc.v3(ui_pkchild[k].position.x, G.CaseWhen(isChoose, ui_pk0.position.y, ui_pktop.position.y), ui_pkchild[k].position.z)
						var sqs = GameG.NewTween(ui_pkchild[k])
						sqs.to(0.1, {position: target})
						sqs.start()
					}
				})
			}
		}
	}
	// endregion

	// region 回收用户除头像以外的所有信息
	this.Destory = function(){
		// 隐藏初始界面UI
		ui_cashchangetxt.active =(false)
		ui_pklist.active =(false)
		ui_beishu.active =(false)
		ui_paixin.active =(false)
		ui_userstate.active =(false)
		this.HideBet(true)
		ui_cashchange.active =(false)
		ui_cashchange_lose.node.active =(false)
		ui_cashchange_win.node.active =(false)
		// 回收牌
		this.DestoryCards()
	}
	// endregion

	this.UpdateInfo(userdata, false)
};

module.exports = UIUser
