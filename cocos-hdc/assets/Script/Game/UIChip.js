var GameG = require("GameGlobal")
var pojectName = GameG.GetGameName() 

function UIChip(root) {		
	let chipPrefab 		= cc.find("Chips/ChipPrefab",root)
	let chips			= cc.find("Chips",root)
	let chooseChipIndex = -1
	let userMoney = 0
	let baseBet = 0
	let chipPool = []
	
	chipPrefab.active =(false)
	chips.active =(false)

	let SetChooseChip = function(index){
		if (chooseChipIndex == index){
			return
		}

		if (chooseChipIndex >= 0){ 
			chipPool[chooseChipIndex].img_select.node.active =(false)

			GameG.NewTween(chipPool[chooseChipIndex].root)
			.to(0.2, { scale : chipPrefab.scale })
			.start()
		}

		chooseChipIndex = index

		if(chipPool[index] != null){ 
			chipPool[index].img_select.node.active =(true)

			GameG.NewTween(chipPool[index].root)
			.to(0.2, { scale : 1.05 })
			.start()			
		}
	};

	let compare = function(dataA,dataB){				
		return dataA - dataB
	};

	this.CreateChip = function(chipData){
		chipData.sort(compare)
		for(let i = 0; i < chipData.length; ++i){
			let clone = cc.instantiate(chipPrefab)
			clone.active =(true)
            clone.name=chipPrefab.name + "(" + (i + 1) + ")";
			clone.parent =(chipPrefab.parent);
			clone.position = cc.v3(0, 0, 0)
			clone.scale = chipPrefab.scale
			chipPool[i] = {}
			chipPool[i].root		= clone;
			chipPool[i].btn 		= clone.getComponent(cc.Button);
			chipPool[i].img_normal 	= clone.getComponent(cc.Sprite);
			chipPool[i].img_select 	= cc.find("Select",clone).getComponent(cc.Sprite);
			chipPool[i].txt 		= cc.find("Text",clone).getComponent(cc.Label);
			chipPool[i].money 		= chipData[i]
			chipPool[i].img_select.node.active =(false)
			chipPool[i].txt.string 	= GameG.ToCash(chipData[i])
            chipPool[i].btn.selectID= i;   //觸發時i = chipData.length
			let index = i > 8 && 8 || i + 1
			GameG.SetImageSprite(chipPool[i].img_normal, pojectName, "chip_"+index.toString())		
			chipPool[i].btn.node.on('click',function(selectID){
				GameG.PlayGameSound("click")
				SetChooseChip(selectID.selectID)
			})
		}
	};

	this.GetChooseChip = function(money){
		let chipData = null
		for(let k in chipPool){ 
			let v = chipPool[k] 
			if (money == v.money){ 
                chipData = v
			}
		}
		if (chipData == null)
			return chipPool[0].root
		else
        	return chipData.root
	};

	this.GetChooseChipMoney = function(){
		if (chipPool[chooseChipIndex] == null)
			return 0
		else
			return chipPool[chooseChipIndex].money
	};

	let SetChipButtonInteractable = function (){
		for(let k in chipPool){ 
			let v = chipPool[k] 
			let active = userMoney - v.money >= (baseBet + v.money) * 2
			v.btn.interactable = active
			if(active == false){
				if (chooseChipIndex >= k){
					SetChooseChip(k - 1)
				}
			}
		}
	};

	this.SetUserMoney = function(money){
		userMoney = money
		SetChipButtonInteractable()
	}

	this.SetBaseBet = function(money){
		baseBet = money
		SetChipButtonInteractable()
	};

	this.SetChipsActive = function(value){
		chips.active =(value)
		
		if(value ){
			SetChooseChip(0)
		}
	};
};

module.exports = UIChip
