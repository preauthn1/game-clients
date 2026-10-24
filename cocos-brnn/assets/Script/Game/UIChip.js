var G = require( "Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")

var chooseIndex = 0

function UIChip(root) {
	let perfab = cc.find("Grid/PfChip",root)
	let pool = []
	
	let  CreateClone = function(i){
		let clone = cc.instantiate(perfab)
		if(clone == null){ return null }
		clone.active =(true)
		clone.parent =(perfab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1

		pool[i] = {}
		pool[i].root = clone
		pool[i].blink = cc.find("blink",clone).getComponent(cc.Sprite)
		pool[i].btn = cc.find("btn",clone).getComponent(cc.Button)
		pool[i].img_normal = cc.find("btn",clone).getComponent(cc.Sprite)
		pool[i].img_disable = cc.find("btn/disable",clone).getComponent(cc.Sprite)
		pool[i].bet = cc.find("bet",clone).getComponent("TextControl")
	}
	
	//- 选择下注的按钮
	let  SetChooseChip = function(){
		for(let  i = 0;  i < pool.length; ++ i){
			pool[i].blink.node.active =(chooseIndex == i)
			if(chooseIndex == i ){
				pool[i].root.scale = 1.2
			} 
			else{
				pool[i].root.scale = 1		
			}
		}
		GameG.SetImageSprite(pool[chooseIndex].img_normal, G.GetGamePName(), "cast"+(chooseIndex+1).toString()+"_1")
	}

	this.Show = function(data){
		for(let k in (pool)){ 
			let v = pool[k] 

			v.root.active =(false)
		}

		for(let  i = 0;  i < data.length; ++ i){
			if(pool[i] == null ){
				CreateClone(i)
			}

			pool[i].root.active =(true)
			pool[i].blink.node.active =(false)
			pool[i].bet.text = G.FormatDecimal(data[i], 0)
			pool[i].count = data[i]

			let index = i
			if(index > 6 ){
				index = 6
			}
			GameG.SetImageSprite(pool[i].img_normal, G.GetGamePName(), "cast"+(index + 1).toString()+"_1")
			GameG.SetImageSprite(pool[i].img_disable, G.GetGamePName(),"cast_btn_"+(index + 1 ).toString()+"_4")

			let tmp = i
			pool[i].btn.node.on('click',function(){				
				GameG.PlayGameSound("se_click")
				GameG.PlayGameSound("adeClickChip")
				chooseIndex = tmp
				SetChooseChip()
			})
		}
		SetChooseChip()
	}
	
	this.GetChooseMoney = function(){
		let score = parseInt((gameData.UserInfo.Score - gameData.dtBetTotal * 10) / 10)		
		if(score > pool[chooseIndex].count ){
			return pool[chooseIndex].count
		} 
		else			{
			for(let  i  =  chooseIndex;  i  <=  1; ++ i ){				
				if(score > pool[i].count ){					
					return pool[i].count
				}
			}			
		}
		return pool[chooseIndex].count
	}
	
	this.GetChooseIndex = function(){
		return chooseIndex
	}
	
	this.GetChoosePosition = function(){
		return GameG.LocalConvertWorldPointAR(pool[chooseIndex].root)
	}

	this.UpdateButtonState = function(show){
		for(let k in (pool)){ 
			let v = pool[k] 

			pool[k].btn.interactable = show			
			//pool[k].blink.gameObject:SetActive(show and k == chooseIndex)
		}
	}
	
	this.CheckScore = function(st){
		let Betlimit = parseInt(gameData.UserInfo.Score/10) - gameData.dtBetTotal
		let idx = 1
		let start = st == true

		for(let k in (pool)){ 
			let v = pool[k] 
			
			pool[k].btn.interactable = (Betlimit>pool[k].count)         
			if((Betlimit>pool[k].count)==false) {
				pool[k].blink.active =(false)
			} 
			else{
				idx = k
			}
		}

		if(start && idx < chooseIndex ){
			chooseIndex = idx
			tempIndex = chooseIndex			
		}
		SetChooseChip()
	}
	
	
	this.GameEnd = function(data){
		
	}
	
	this.GetCountPosition = function(count){
		for(let k in (pool)){ 
			let v = pool[k]

			if(count == pool[k].count ){
				return pool[k].root.position
			}
		}
	}
};

module.exports = UIChip
